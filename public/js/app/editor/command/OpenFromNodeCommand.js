define(
    [
        'util/AlertPopupHelper',
        'util/Config',
        'kevoree'
    ],

    function (AlertPopupHelper, Config, Kevoree) {
        var NAMESPACE = '.open-node-popup';

        function OpenFromNodeCommand() {};

        OpenFromNodeCommand.prototype.execute = function (protocol, uri, editor) {
            // prevent listeners from being registered several times
            $('body').off(NAMESPACE)
            $('body').on('hidden'+NAMESPACE, '#open-node-popup', function () {
                $('#open-node-alert').removeClass('in');
            });

            // prevent user from clicking 'open' button while disabled
            if (!$('#open-from-node').hasClass('disabled')) {
                // check uri
                // TODO check it better maybe ?
                if (uri && uri.length != 0) {
                    // seems like we have a good uri
                    // display loading alert
                    $('#open-node-alert').removeClass('alert-error');
                    $('#open-node-alert').addClass('alert-success');
                    $('#open-node-alert-content').html("<img src='/img/ajax-loader-small.gif'/> Loading in progress, please wait...");
                    $('#open-node-alert').addClass('in');
                    $('#open-from-node').addClass('disabled');

                    // use HTTP or WebSocket
                    switch (protocol) {
                        case Config.HTTP:
                            uri = protocol + uri;
                            $.ajax({
                                url: uri,
                                timeout: 10000, // 10 seconds timeout
                                dataType: 'json',
                                success: function (data) {
                                    // load model into editor
                                    var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                                    var model = loader.loadModelFromString(JSON.stringify(data)).get(0);
                                    editor.setModel(model);
                                    loadSucceed();
                                },
                                error: function () {
                                    loadFailed(uri);
                                }
                            });
                            break;

                        case Config.WS:
                            uri = protocol + uri;
                            var ws = new WebSocket(uri);
                            ws.binaryType = "arraybuffer";
                            ws.onmessage = function (event) {
                                var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                                // TODO this will work only if model is in JSON
                                var model = loader.loadModelFromString(String.fromCharCode.apply(null, new Uint8Array(event.data))).get(0);
                                editor.setModel(model);
                                loadSucceed();
                            }

                            ws.onopen = function () {
                                // TODO use a clean protocol
                                var byteArray = new Uint8Array(1);
                                byteArray[0] = 2;
                                ws.send(byteArray.buffer);
                            }

                            ws.onclose = function () {
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
        }

        return OpenFromNodeCommand;

        function loadSucceed() {
            // close 'Open from node' modal
            $('#open-node-popup').modal('hide');
            $('#open-from-node').removeClass('disabled');

            AlertPopupHelper.setText("Model loaded successfully");
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show(5000);
        }

        function loadFailed(uri) {
            $('#open-from-node').removeClass('disabled');
            $('#open-node-alert').removeClass('alert-success');
            $('#open-node-alert').addClass('alert-error');
            $('#open-node-alert-content').text("Unable to get model from "+uri+". Are you sure that your model is a valid JSON Kevoree model ? Or that the remote target is reachable ?");
            $('#open-node-alert').addClass('in');
        }
    }
);