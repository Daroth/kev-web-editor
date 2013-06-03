define(
    [
        'jquery'
    ],
    function ($) {
        function DebugCommand () {}

        DebugCommand.prototype.execute = function () {
            $('#debug-alert').toggleClass('in');
        }

        return DebugCommand;
    }
);