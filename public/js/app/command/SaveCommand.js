define(
    [
        'jquery',
        'io/IOEngine'
    ],
    function ($, IOEngine) {
        function SaveCommand () {
            this._editor = null;
        }

        SaveCommand.prototype.execute = function () {
            var serializedStage = this._editor.getUI().getStage().toJSON();

            var json = IOEngine.save(this._editor);
            console.log(json);

            setTimeout(function () {
                $('#filename').val('/foo/bar/model.kvm');
                $('#save-popup-content').html(
                    '<p>'+serializedStage+'</p>'
                );
                $('#save-popup').modal({ show: true });
            }, 300);
        }

        SaveCommand.prototype.setEditor = function (editor) {
            this._editor = editor;
        }

        return SaveCommand;
    }
);