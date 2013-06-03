define(
    [
        'jquery',
        'util/AlertPopupHelper'
    ],
    function ($, AlertPopupHelper) {
        function SaveCommand () {}

        SaveCommand.prototype.execute = function (editor) {
            if (editor.getModel()) {
                $('#save-popup').modal({show: true});
                try {
                    $.ajax({
                        type: 'post',
                        url: '/save',
                        data: {model: editor.getModel()},
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
                } catch (err) {
                    $('#save-popup-text').html("Something went wrong while uploading your model.. :(", err.message);
                }
            } else {
                AlertPopupHelper.setType(AlertPopupHelper.WARN);
                AlertPopupHelper.setText("There is no model to save currently.");
                AlertPopupHelper.show(2000);
            }
        }

        return SaveCommand;
    }
);