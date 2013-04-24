define(
    [
        'util/AlertPopupHelper',
        'util/Config'
    ],

    function (AlertPopupHelper, Config) {
        function OpenFromNodeCommand() {};

        OpenFromNodeCommand.prototype.execute = function (protocol, uri, editor) {
            $('body').off('.open-node-popup')
            $('body').on('hidden.open-node-popup', '#open-node-popup', function () {
                $('#open-node-alert').removeClass('in');
            });


            if (uri && uri.length != 0) {
                // seems like we have a good uri

                switch (protocol) {
                    case Config.HTTP:
                        uri = protocol + uri;
                        $.get(uri, function (data) {
                            // load model into editor
                            editor.setModel(data);

                            // close 'Open from node' modal
                            $('#open-node-popup').modal('hide');

                            AlertPopupHelper.setText("Model loaded successfully");
                            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
                            AlertPopupHelper.show(5000);

                        }, 'json').fail(function () {
                                $('#open-node-alert-content').text("Unable to get model from "+uri+". Are you sure that your model is a valid JSON Kevoree model ?");
                                $('#open-node-alert').addClass('in');
                            });
                        break;

                    case Config.WS:
                        uri = protocol + uri;

                        break;

                    default:
                        break;
                }

            } else {
                // uri is malformed
                $('#open-node-alert-content').text("Malformed URI");
                $('#open-node-alert').addClass('in');
            }
        }

        return OpenFromNodeCommand;
    }
);