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
            // TODO

            return editor;
        }

        // static method save()
        IOEngine.save = function (editor) {
            // TODO
            console.warn("IOEngone.save(KEditor): not implemented yet");
            return "";
        }

        return IOEngine;
    }
);