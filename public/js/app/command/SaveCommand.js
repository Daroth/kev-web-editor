define(
    [
        'jquery',
        'io/IOEngine'
    ],
    function ($, IOEngine) {
        function SaveCommand () {}

        SaveCommand.prototype.execute = function (editor) {


            console.log(editor.getEntities());
            var json = IOEngine.save(editor);
            console.log(json);

            $('#filename').val('/foo/bar/model.kvm');
        }

        return SaveCommand;
    }
);