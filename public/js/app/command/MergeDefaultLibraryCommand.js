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
            AlertPopupHelper.setHTML("<img src='img/ajax-loader-small.gif' alt='loading' /> Loading libraries...")
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show();

            // TODO get modelAll.json from server
            // TODO for now this is static...
            $.get('merge/'+lib, function (jsonModel) {
                try {
                    // create a model helper to handle jsonModel parsing
                    var modelHelper = new ModelHelper();
                    modelHelper.loadFromJSON(jsonModel, editor);

                    // update headsup for user
                    AlertPopupHelper.setText("Core library ("+lib+") loaded successfully");
                    AlertPopupHelper.show(5000);
                } catch (err) {
                    // update headsup for user
                    AlertPopupHelper.setText(err.message);
                    AlertPopupHelper.setType(AlertPopupHelper.ERROR);
                    AlertPopupHelper.show(5000);
                }
            });
        }

        return MergeDefaultLibraryCommand;
    }
);