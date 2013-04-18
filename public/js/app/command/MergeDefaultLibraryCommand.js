define(
    [
        'jquery'
    ],

    function ($) {
        function MergeDefaultLibraryCommand() {
            this._editor = null;
        }

        MergeDefaultLibraryCommand.prototype.execute = function () {
            $('#alert-content').text("Load core library: not implemented yet");
            $('#alert').addClass('alert-error in');
            setTimeout(function () {
                $('#alert').removeClass('alert-error in');
            }, 5000);
        }

        MergeDefaultLibraryCommand.prototype.setEditor = function (editor) {
            this._editor = editor;
        }

        return MergeDefaultLibraryCommand;
    }
);