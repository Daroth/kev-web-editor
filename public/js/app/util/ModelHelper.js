define(
    /**
     * TODO Change all this helper to use a real deserializer and to have
     * only a ContainerRoot object in abstraction/KEditor in order to
     * process the model. Because parsing 'a la mano' suxx
     */

    [
        'kevoree',
        'abstraction/KComponent',
        'abstraction/KGroup',
        'abstraction/KNode',
        'abstraction/KChannel'
    ],
    function (Kevoree, KComponent, KGroup, KNode, KChannel) {

        function ModelHelper () {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
            this._serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer();
        }

        ModelHelper.prototype.getLibraries = function (model) {
            var libz = this.getTypeDefs(model);

            for (var i=0; i < libz.length; i++) {
                var compz = libz[i].components;
                for (var j=0; j < compz.length; j++) {
                    compz[j] = {
                        name: compz[j].name,
                        type: isolateEClassName(compz[j].eClass),
                        required: isolatePorts(compz[j].required),
                        provided: isolatePorts(compz[j].provided)
                    };
                }
            }
            return libz;
        }

        ModelHelper.prototype.addInstance = function (model, entity) {
            // TODO retrieve ContainerRoot from model with the thing that I do not have to for now
            var instance = {},
                type = {};

            switch (entity.getEntityType()) {
                case KComponent.ENTITY_TYPE:
                    instance = this._factory.createComponentInstance();
                    type = this._factory.createComponentType();
                    break;

                case KChannel.ENTITY_TYPE:
                    instance = this._factory.createChannel();
                    type = this._factory.createChannelType();
                    break;

                case KGroup.ENTITY_TYPE:
                    instance = this._factory.createGroup();
                    type = this._factory.createGroupType();
                    break;

                case KNode.ENTITY_TYPE:
                    instance = this._factory.createContainerNode();
                    type = this._factory.createNodeType();
                    break;
            }

            instance.setName(entity.getName());
            instance.setTypeDefinition(type);

            var modelTypeDef = this.getTypeDef(model, entity.getLibrary(), entity.getType());
            var typeDef = this._factory.createTypeDefinition();
            typeDef.setBean(modelTypeDef.bean);
            typeDef.setFactoryBean(modelTypeDef.factoryBean);
            for (var i=0; i < modelTypeDef.deployUnits.length; i++) {
                var deployUnit = this._factory.createDeployUnit();
                deployUnit.setRef(modelTypeDef.deployUnits[i]);
                typeDef.addDeployUnits(deployUnit);
            }
            type.setName(entity.getType());

            // TODO remove the following lines, this is for TEST
            // Work in progress from now on !
            var ostream = new Kevoree.java.io.OutputStream();
            var root = this._factory.createContainerRoot();

            switch (entity.getEntityType()) {
                case KComponent.ENTITY_TYPE:
                    root.addComponents(instance);
                    break;

                case KChannel.ENTITY_TYPE:
                    root.addHubs(instance);
                    break;

                case KGroup.ENTITY_TYPE:
                    root.addGroups(instance);
                    break;

                case KNode.ENTITY_TYPE:
                    root.addNodes(instance);
                    break;
            }

            this._serializer.serialize(root, ostream);
            console.log("output", ostream.get_result());
        }

        ModelHelper.prototype.getTypeDef = function (model, lib, name) {
            var compz = this.getTypeDefs(model, lib);
            for (var i=0; i < compz.length; i++) {
                if (compz[i].name == name) return compz[i];
            }
            return null;
        }

        /**
         * Returns every typedef from the specified given 'lib' parameter or from all
         * 'lib' if only the model is given in parameter
         * @param model
         * @param lib {optional} Android, JavaSE, etc..
         * @returns {*}
         */
        ModelHelper.prototype.getTypeDefs = function (model, lib) {
            // create an array of [libEnv => [compName, compName, ...], libEnv => [...], ...]
            var libz = [];
            for (var i=0; i < model.libraries.length; i++) {
                libz.push({
                    name: model.libraries[i].name,
                    components: isolateSubTypes(model.libraries[i])
                });
            }

            // create an array of [compName => {**fullDef**}, compName => {**fullDef**}, ...]
            var components = [];
            for (var i=0; i < model.typeDefinitions.length; i++) {
                components[model.typeDefinitions[i].name] = model.typeDefinitions[i];
            }

            // associate components name in libz array to fullDef from components array
            for (var i=0; i < libz.length; i++) {
                for (var j=0; j < libz[i].components.length; j++) {
                    libz[i].components[j] = components[libz[i].components[j]];
                }
            }

            // return lib's components if lib is given
            var ret = [];
            if (lib) {
                for (var i=0; i < libz.length; i++) {
                    if (libz[i].name == lib) ret = libz[i].components;
                }

            // return every lib's components if no lib given
            } else {
                ret = libz;
            }

            return ret;
        }

        return ModelHelper;


        // ================================================
        // Util functions unavailable outside of this scope
        // ================================================

        function isolateEClassName(eClass) {
            var index = eClass.search(':');
            return eClass.substr(index+1, eClass.length - index);
        }

        /**
         * Returns a clean String array containing this lib's available subTypes
         * @param lib android, javase, arduino, ...
         * @returns {Array} [JavaSENode, FakeConsole, ...]
         */
        function isolateSubTypes(lib) {
            var prettySubTypes = [];
            for (var i=0; i < lib.subTypes.length; i++) {
                var index = lib.subTypes[i].search('\\[');
                // typeDefinition[JavaSENode] => JavaSENode
                prettySubTypes.push(lib.subTypes[i].substr(index+1, lib.subTypes[i].length - index - 2));
            }
            return prettySubTypes;
        }

        function isolatePorts(array) {
            if (array) {
                var ports = [];
                for (var i=0; i < array.length; i++) {
                    ports.push({
                        name: array[i].name,
                        optional: array[i].optional
                    });
                }
                return ports;
            }
            return [];
        }

        /**
         * Replaces the given libraries array of components
         * libzArray : [{name: android, components: ["foo", "bar", ...]}, ...]
         * with the real components given with the second array
         * compzArray: ["foo" => {}, "bar" => {}] // foo & bar are components names
         * @param libraries
         * @param components
         */
        function computeLibrariesWithComponents(libraries, components) {
            for (var i=0; i < libraries.length; i++) {
                for (var j=0; j < libraries[i].components.length; j++) {
                    libraries[i].components[j] = components[libraries[i].components[j]];
                }
            }
        }
        // ================================================
    }
);