define(
    [
        'jquery',
        'util/ModelHelper'
    ],

    function ($, ModelHelper) {
        function MergeDefaultLibraryCommand() {
            this._editor = null;
        }

        MergeDefaultLibraryCommand.prototype.execute = function (lib, editor) {
            // display loading headsup for user
            $('#alert-content').html("<img src='img/ajax-loader-small.gif' alt='loading' /> Loading libraries...");
            $('#alert').addClass('alert-success in');

            // TODO get modelAll.json from server
            // TODO for now this is static...
            $.get('merge/'+lib, function (jsonModel) {
                // create a model helper to handle jsonModel parsing
                var modelHelper = new ModelHelper();
                modelHelper.loadFromJSON(jsonModel, editor);

                // update headsup for user
                $('#alert-content').text("Core library ("+lib+") loaded successfully");
                setTimeout(function () {
                    $('#alert').removeClass('alert-success in');
                }, 5000);
            });
        }

        return MergeDefaultLibraryCommand;
    }
);