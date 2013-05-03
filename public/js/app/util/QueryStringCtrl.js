define(
    [
        'util/QueryString',
        'command/MergeDefaultLibraryCommand',
        'command/ZoomToCommand'
    ],

    function (QueryString, MergeDefaultLibraryCommand, ZoomToCommand) {

        function QueryStringCtrl(editor) {
            var qs = new QueryString();
            var actions = [
                {
                    name:'fold',
                    action: function (env) {
                        // reify logic binded to listeners in UIEditor so I can call them from here too
                    }
                },
                {
                    name:'corelib',
                    action: function (env) {
                        // merge this core library
                        var cmd = new MergeDefaultLibraryCommand();
                        cmd.execute(env, editor);
                    }
                },
                {
                    name:'zoom',
                    action: function (scale) {
                        // set editor zoom to the given scale if not wrong number
                        var value = parseFloat(scale) || 1;
                        if (value < 0) value = 0.1;
                        var cmd = new ZoomToCommand();
                        cmd.execute(editor, value);
                    }
                },
                {
                    name:'menu',
                    action: function (hidden) {
                        // reify logic binded to listeners in UIEditor so I can call them from here too
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