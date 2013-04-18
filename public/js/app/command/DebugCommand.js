define(
    [
        'jquery'
    ],
    function ($) {
        function DebugCommand () {}

        DebugCommand.prototype.execute = function () {
            $('#debug-alert').addClass('in');
        }

        return DebugCommand;
    }
);