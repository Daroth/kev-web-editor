define(
    ['jquery'],

    function ($) {

        DebugLoggerHelper.isEmpty = true;

        function DebugLoggerHelper() {
            this._ui = $('#debug-alert-content');
        }

        DebugLoggerHelper.prototype.log = function (message) {
            if (DebugLoggerHelper.isEmpty) {
                this._ui.empty();
                DebugLoggerHelper.isEmpty = false;
            }
            this._ui.append('<li>'+message+'</li>');
        }

        return DebugLoggerHelper;
    }
);