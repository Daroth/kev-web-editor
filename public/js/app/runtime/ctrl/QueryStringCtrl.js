define(
    [
        'util/QueryString'
    ],

    function (QueryString) {

        function QueryStringCtrl(runtime) {
            var qs = new QueryString();
            var actions = [
                {
                    name: 'foo',
                    action: function (value) {
                        
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