define(
    function () {

        function Config () {}

        Config.CONTAINER_ID = 'editor';
        Config.HTTP = 'http://';
        Config.WS = 'ws://';

        // Local Storage Constants
        Config.LS_ASK_BEFORE_LEAVING = 'askBeforeLeaving';

        return Config;
    }
);