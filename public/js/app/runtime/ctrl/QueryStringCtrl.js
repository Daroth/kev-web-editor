define(
    [
        'app_util/QueryString'
    ],

    function (QueryString) {

        function QueryStringCtrl(runtime) {
            var qs = new QueryString();
            var actions = [
                {
                    name: 'name',
                    action: function (name) {
                        runtime.setNodeName(name);
                    }
                },
                {
                    name: 'server',
                    action: function (ip) {
                        runtime.setServerIP(ip);
                    }
                },
                {
                    name: 'debug',
                    action: function (enabled) {
                        if (enabled == "true" || enabled == "on" || enabled == "show") {
                            $('#debug-menu').show();
                        }
                    }
                }
            ];

            for (var i=0; i < actions.length; i++) {
                if (qs[actions[i].name]) {
                    actions[i].action.call(this, qs[actions[i].name]);
                }
            }
        }

        return QueryStringCtrl;
    }
);