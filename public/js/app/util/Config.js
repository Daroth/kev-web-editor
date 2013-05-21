define(
    function () {

        function Config () {}

        Config.CONTAINER_ID = 'editor';
        Config.HTTP = 'http://';
        Config.WS = 'ws://';

        // Local Storage Constants
        Config.LS_ASK_BEFORE_LEAVING = 'askBeforeLeaving';
        Config.LS_COMPONENT_TOOLTIP = 'componentTooltip';
        Config.LS_DISPLAY_ALERT_POPUPS = 'displayAlertPopups';

        return Config;
    }
);