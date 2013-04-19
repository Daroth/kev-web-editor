define(
    [
        'jquery',
        'io/IOEngine'
    ],
    function ($, IOEngine) {
        function SaveCommand () {}

        SaveCommand.prototype.execute = function (editor) {
            var serializedStage = editor.getUI().getStage().toJSON();

            var json = IOEngine.save(editor);
            console.log(json);

            setTimeout(function () {
                $('#filename').val('/foo/bar/model.kvm');
                $('#save-popup-content').html(
                    '<p>'+serializedStage+'</p>'
                );
                $('#save-popup').modal({ show: true });
            }, 300);
        }

        return SaveCommand;
    }
);