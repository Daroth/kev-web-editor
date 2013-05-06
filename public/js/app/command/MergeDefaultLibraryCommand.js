define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper'
    ],

    function ($, ModelHelper, AlertPopupHelper) {
        function MergeDefaultLibraryCommand() {}

        MergeDefaultLibraryCommand.prototype.execute = function (lib, editor) {
            // display loading headsup for user
            AlertPopupHelper.setHTML("<img src='/img/ajax-loader-small.gif' alt='loading' /> Loading libraries...")
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show();

            $.get('/merge/'+lib, function (model) {
                try {
                    // TODO allow merge, this is not a merge, it replaces the old model if there is one
                    editor.setModel(model);

                    // update headsup for user
                    AlertPopupHelper.setText("Core library ("+lib+") loaded successfully");
                    AlertPopupHelper.show(5000);
                } catch (err) {
                    // update headsup for user
                    AlertPopupHelper.setText(err.message);
                    AlertPopupHelper.setType(AlertPopupHelper.ERROR);
                    AlertPopupHelper.show(5000);
                    console.error(err.message);
                }
            });
        }

        return MergeDefaultLibraryCommand;
    }
);