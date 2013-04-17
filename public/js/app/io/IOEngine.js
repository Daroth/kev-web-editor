define(
    [
        'abstraction/KEditor',
        'factory/CFactory',
        'util/Config'
    ],

    function (KEditor, CFactory, Config, Cereal) {

        function IOEngine () {}

        // static method load(fromJsonModel)
        IOEngine.load = function (model) {
            console.log("patate");
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);

            console.log(model);
            // TODO
            for (var i=0; i < model.groups.length; i++) {
                console.log(model.groups[i]);
            }

            return editor;
        }

        // static method save()
        IOEngine.save = function (editor) {
            // TODO
            return "not implemented yet";
        }

        return IOEngine;
    }
);