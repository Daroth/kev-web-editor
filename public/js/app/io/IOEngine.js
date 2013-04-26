define(
    [
        'abstraction/KEditor',
        'factory/CFactory',
        'util/Config'
    ],

    function (KEditor, CFactory, Config) {

        function IOEngine () {}

        // static save() method
        IOEngine.save = function (editor) {
            // TODO
            console.warn("IOEngine.save(KEditor): not implemented yet");
            return "";
        }

        return IOEngine;
    }
);