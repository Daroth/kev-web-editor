define(
    [
        'jquery',
        'util/Config'
    ],
    function ($, Config) {
        var NAMESPACE = '.settings-popup';

        function SettingsCommand () {}

        SettingsCommand.prototype.execute = function () {
            $('#save-settings').off(NAMESPACE);

            // check browser compatibily with HTML5 Local Storage
             var storage = window.localStorage;
            if (storage) {
                // Local storage available
                $('#save-settings').on('click'+NAMESPACE, function () {
                    var askBeforeLeaving = $('#ask-before-leaving').prop('checked');
                    storage.setItem(Config.LS_ASK_BEFORE_LEAVING, askBeforeLeaving);
                    console.log("saved stuff "+askBeforeLeaving);
                });

            } else {
                // local storage is not available
                $('#save-settings').addClass('disabled');
                $('#local-storage-unavailable').show();
            }

            $('#settings-popup').modal({ show: true });
        }

        return SettingsCommand;
    }
);