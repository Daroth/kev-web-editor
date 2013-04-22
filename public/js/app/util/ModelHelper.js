define(
    [
        'abstraction/KComponent'
    ],

    function (KComponent) {

        function ModelHelper () {}

        /**
         * Inflates given Editor with data found in the given JSON model
         * @param jsonModel
         * @param editor
         */
        ModelHelper.prototype.loadFromJSON = function (jsonModel, editor) {
            try {
                var libraries = [];
                for (var i=0; i < jsonModel.libraries.length; i++) {
                    libraries.push({
                        name: jsonModel.libraries[i].name,
                        components: isolateSubTypes(jsonModel.libraries[i])
                    });
                }

                var typeDefs = [];
                for (var i=0; i < jsonModel.typeDefinitions.length; i++) {
                    var name = jsonModel.typeDefinitions[i].name;
                    var type = isolateEClassName(jsonModel.typeDefinitions[i].eClass);
                    typeDefs[name] = { name: name, type: type };
                    if (type == KComponent.ENTITY_TYPE) {
                        typeDefs[name]['required'] = jsonModel.typeDefinitions[i].required;
                        typeDefs[name]['provided'] = jsonModel.typeDefinitions[i].provided;
                    }
                }

                computeLibrariesWithComponents(libraries, typeDefs);

                for (var i=0; i < libraries.length; i++) {
                    editor.addLibrary(libraries[i].name, libraries[i].components);
                }
            } catch (err) {
                throw new Error("Unable to load model. Corrupted file ?");
            }
        }

        return ModelHelper;


        // ================================================
        // Util functions unavailable outside this scope
        function isolateEClassName(eClass) {
            var index = eClass.search(':');
            return eClass.substr(index+1, eClass.length - index);
        }

        function isolateSubTypes(lib) {
            var prettySubTypes = [];
            for (var i=0; i < lib.subTypes.length; i++) {
                var index = lib.subTypes[i].search('\\[');
                prettySubTypes.push(lib.subTypes[i].substr(index+1, lib.subTypes[i].length - index - 2));
            }
            return prettySubTypes;
        }

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