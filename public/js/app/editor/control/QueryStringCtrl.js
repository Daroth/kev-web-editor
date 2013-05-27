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
                    name: 'corelib',
                    action: function (env) {
                        var envz = env.split('+');
                        // merge those core libraries
                        var cmd = new MergeDefaultLibraryCommand();
                        for (var i=0; i < envz.length; i++) {
                            cmd.execute(envz[i], editor);
                        }
                    }
                },
                {
                    name: 'zoom',
                    action: function (scale) {
                        // set editor zoom to the given scale if not wrong number
                        var value = parseFloat(scale) || 1;
                        if (value < 0) value = 0.1;
                        var cmd = new ZoomToCommand();
                        cmd.execute(editor, value);
                    }
                },
                {
                    name: 'menu',
                    action: function (value) {
                        var hide = (value == 'hide' || value == '0');
                        if (hide) {
                            editor.getUI().c2pHideLibTree();
                        } else {
                            editor.getUI().c2pShowLibTree();
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