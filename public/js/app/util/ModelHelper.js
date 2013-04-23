define(
    function () {

        function ModelHelper () {}

        ModelHelper.prototype.getLibraries = function (model) {
            var libz = this.getComponents(model);

            for (var i=0; i < libz.length; i++) {
                var compz = libz[i].components;
                for (var j=0; j < compz.length; j++) {
                    compz[j] = {
                        name: compz[j].name,
                        type: isolateEClassName(compz[j].eClass)
                    };
                }
            }

            return libz;
        }

        ModelHelper.prototype.addGroup = function (model, name) {
            var ports = [];



            return ports;
        }

        ModelHelper.prototype.getComponent = function (model, env, name) {
            var compz = this.getComponents(model, env);
            console.log("getComponent", compz);
            for (var i=0; i < compz.length; i++) {
                if (compz[i].name == name) return compz[i];
            }
            return null;
        }

        /**
         *
         * @param model
         * @param env {optional}
         * @returns {*}
         */
        ModelHelper.prototype.getComponents = function (model, env) {
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

            // return env's components if env is given
            var ret = [];
            if (env) {
                for (var i=0; i < libz.length; i++) {
                    if (libz[i].name = env) ret = libz[i].components;
                }

            // return every env's components if no env given
            } else {
                ret = libz;
            }

            return ret;
        }

        return ModelHelper;


        // ================================================
        // Util functions unavailable outside this scope
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