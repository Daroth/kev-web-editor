define(

    function () {

        function ZoomToCommand() {}

        ZoomToCommand.prototype.execute = function (editor, scale) {
            editor.getUI().zoomTo(scale);
        }

        return ZoomToCommand;
    }
);