define(
    [
        'jquery',
        'util/Config'
    ],

    function ($, Config) {

        function LoadSettingsCommand() {}

        LoadSettingsCommand.prototype.execute = function () {
            var storage = window.localStorage;
            if (storage) { // check if browser is compatible with HTML5 Local Storage
                var askBeforeLeaving = storage.getItem(Config.LS_ASK_BEFORE_LEAVING) || "true",
                    componentTooltip = storage.getItem(Config.LS_COMPONENT_TOOLTIP) || "true";

                askBeforeLeaving = (askBeforeLeaving == "true") ? true : false;
                $('#ask-before-leaving').prop('checked', askBeforeLeaving);

                componentTooltip = (componentTooltip == "true") ? true : false;
                $('#component-tooltip').prop('checked', componentTooltip);

            } else {
                console.warn('Your browser is not compatible with HTML5 Local Storage. ' +
                    'KevWebEditor won\'t be able to save/load your settings!');
            }
        }

        return LoadSettingsCommand;
    }
);