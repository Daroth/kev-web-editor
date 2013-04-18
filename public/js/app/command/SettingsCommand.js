define(
    [
        'jquery'
    ],
    function ($) {
        function SettingsCommand () {}

        SettingsCommand.prototype.execute = function () {
            $('#settings-popup').modal({ show: true });
        }

        return SettingsCommand;
    }
);