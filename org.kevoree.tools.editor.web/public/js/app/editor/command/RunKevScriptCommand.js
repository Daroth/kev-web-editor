define(
    [
        'util/AlertPopupHelper'
    ],

    function (AlertPopupHelper) {

        function RunKevScriptCommand() {}

        RunKevScriptCommand.prototype.execute = function (editor, script) {
            // TODO
            AlertPopupHelper.setText("RunKevScript: not implemented yet");
            AlertPopupHelper.setType(AlertPopupHelper.WARN);
            AlertPopupHelper.show(5000);
        }

        return RunKevScriptCommand;
    }
);