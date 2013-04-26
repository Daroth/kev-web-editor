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

                            loadSucceed();

                        }, 'json').fail(function () {
                                loadFailed(uri);
                            });
                        break;

                    case Config.WS:
                        uri = protocol + uri;
                        var ws = new WebSocket(uri);
                        ws.onmessage = function (event) {
                            console.log("WS onMessage event ", event);
                            editor.setModel(JSON.parse(event.data));
                            loadSucceed();
                        }

                        ws.onopen = function () {
                            console.log("WS onOpen event");
                            ws.send("gimme da model");
                        }

                        ws.onclose = function () {
                            console.log("WS onClose event");
                            loadFailed(uri);
                        }

                        ws.onerror = function () {
                            loadFailed(uri);
                        }
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

        function loadSucceed() {
            // close 'Open from node' modal
            $('#open-node-popup').modal('hide');

            AlertPopupHelper.setText("Model loaded successfully");
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show(5000);
        }

        function loadFailed(uri) {
            $('#open-node-alert-content').text("Unable to get model from "+uri+". Are you sure that your model is a valid JSON Kevoree model ? Or remote target is reachable ?");
            $('#open-node-alert').addClass('in');
        }
    }
);