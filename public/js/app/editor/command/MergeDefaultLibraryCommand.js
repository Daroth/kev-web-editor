define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper',
        'kevoree'
    ],

    function ($, ModelHelper, AlertPopupHelper, Kevoree) {
        function MergeDefaultLibraryCommand() {}

        MergeDefaultLibraryCommand.prototype.execute = function (lib, editor) {
            // display loading headsup for user
            AlertPopupHelper.setHTML("<img src='/img/ajax-loader-small.gif' alt='loading' /> Loading libraries...")
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show();

            $.getJSON('/merge/'+lib, function (data) {
//                try {
                    // TODO allow merge, this is not a merge, it replaces the old model if there is one
                    var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                    var model = loader.loadModelFromString(JSON.stringify(data)).get(0);
                    editor.setModel(model);

                    // update headsup for user
                    AlertPopupHelper.setText("Core library ("+lib+") loaded successfully");
                    AlertPopupHelper.show(5000);

                    // update url
                    window.history.replaceState(null, "Core library "+lib+" loaded", "/?corelib="+lib);

//                } catch (err) {
//                    // update headsup for user
//                    AlertPopupHelper.setText("Unable to load library ("+lib+")");
//                    AlertPopupHelper.setType(AlertPopupHelper.ERROR);
//                    AlertPopupHelper.show(5000);
//                    console.error("Unable to load library ("+lib+")", (err.message) ? err.message : err);
//                }
            });
        }

        return MergeDefaultLibraryCommand;
    }
);