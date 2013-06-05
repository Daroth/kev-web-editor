define(
    [
        'jquery',
        'kevoree',
        'util/AlertPopupHelper'
    ],
    function ($, Kevoree, AlertPopupHelper) {
        function SaveCommand () {}

        SaveCommand.prototype.execute = function (editor) {
            console.log("SaveCommand.execute(editor)");
            if (editor.getModel()) {
                console.log("SaveCommand.execute(editor): editor.getModel() != null");
                $('#save-popup').modal({show: true});
//                try {
                    var serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer();
                    var os = new Kevoree.java.io.OutputStream();
                    serializer.serialize(editor.getModel(), os);
                    var jsonModel = JSON.parse(os.get_result());
                    console.log(jsonModel);

                    $.ajax({
                        type: 'post',
                        url: '/save',
                        data: {model: jsonModel},
                        dataType: 'json',
                        success: function (data) {
                            $('#save-popup-text').html('Your model has been successfully uploaded to the server.');
                            $('#saved-model-link').attr('href', data.href);
                            $('#saved-model-link').show('fast');
                        },
                        error: function () {
                            $('#save-popup-text').html("Something went wrong while uploading your model.. :(");
                        }
                    });
//                } catch (err) {
//                    $('#save-popup-text').html("Something went wrong while uploading your model.. :(", err.message);
//                    throw err;
//                }
            } else {
                AlertPopupHelper.setType(AlertPopupHelper.WARN);
                AlertPopupHelper.setText("There is no model to save currently.");
                AlertPopupHelper.show(2000);
            }
        }

        return SaveCommand;
    }
);