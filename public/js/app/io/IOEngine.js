define(
    [
        'abstraction/KEditor',
        'factory/CFactory',
        'util/Config'
    ],

    function (KEditor, CFactory, Config) {

        function IOEngine () {}

        // static method load(fromJsonModel)
        IOEngine.load = function (model) {
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);

            console.log(model);
            if (model.eClass == "kevoree:ContainerRoot") {


            } else {
                throw new SyntaxError("Unable to read model: model.eClass != kevoree:ContainerRoot");
            }

            return editor;
        }

        // static method save()
        IOEngine.save = function (editor) {
            // TODO
            console.warn("IOEngine.save(KEditor): not implemented yet");
            return "";
        }

        return IOEngine;
    }
);