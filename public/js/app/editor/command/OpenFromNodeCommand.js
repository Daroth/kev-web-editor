define(
    [
        'util/AlertPopupHelper',
        'util/Config',
        'kevoree'
    ],

    function (AlertPopupHelper, Config, Kevoree) {
        var NAMESPACE = '.open-node-popup';

        function OpenFromNodeCommand() {
            this._timeoutID = null;
        };

        OpenFromNodeCommand.prototype.execute = function (protocol, uri, editor) {
            clearTimeout(this._timeoutID);

            // hide alert when popup is closed
            $('body').off(NAMESPACE)
            $('body').on('hidden'+NAMESPACE, '#open-node-popup', function () {
                $('#open-node-alert').removeClass('in');
                $('#open-node-alert').hide();
            });

            // jquery hide() alert when .close button clicked
            $('#open-node-alert .close').off('click'+NAMESPACE);
            $('#open-node-alert .close').on('click'+NAMESPACE, function () {
                $('#open-node-alert').removeClass('in');
                $('#open-node-alert').hide();
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
                    $('#open-node-alert').show();
                    $('#open-node-alert').addClass('in');
                    $('#open-from-node').addClass('disabled');

                    var timeoutID = this._timeoutID = setTimeout(function () {
                        loadTimeout(uri);
                    }, 10000);

                    // use TCP or HTTP or WebSocket
                    switch (protocol) {
                        case Config.TCP:
                            // for TCP request, we need to ask server to do the process
                            // because I can't create a TCP socket in a browser
                            $.ajax({
                                url: '/open',
                                type: 'POST',
                                timeout: 10000, // 10 seconds timeout
                                data: {uri: uri},
                                dataType: 'json',
                                success: function (data) {
                                    switch (data.result) {
                                        case -1:
                                        default:
                                            // something went wrong server-side, check data.message for the 'why?'
                                            console.warn('Unable to open from node ('+uri+'): '+ data.message);
                                            loadFailed(uri, timeoutID);
                                            break;

                                        case 1:
                                            // open from node: ok, model is in data.model (string)
                                            var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                                            var model = loader.loadModelFromString(data.model).get(0);
                                            editor.setModel(model);
                                            loadSucceed(timeoutID);
                                            break;
                                    }
                                },
                                error: function () {
                                    loadFailed(uri, timeoutID);
                                }
                            });
                            break;

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
                                    loadSucceed(timeoutID);
                                },
                                error: function () {
                                    loadFailed(uri, timeoutID);
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
                                loadSucceed(timeoutID);
                                ws.close();
                            }

                            ws.onopen = function () {
                                // TODO use a clean protocol
                                var byteArray = new Uint8Array(1);
                                byteArray[0] = 42;
                                ws.send(byteArray.buffer);
                            }

                            ws.onclose = function () {
//                                loadFailed(uri, timeoutID);
                            }

                            ws.onerror = function () {
                                loadFailed(uri, timeoutID);
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

        function loadSucceed(timeoutID) {
            // clear timeout
            clearTimeout(timeoutID);

            // close 'Open from node' modal
            $('#open-node-popup').modal('hide');
            $('#open-from-node').removeClass('disabled');

            AlertPopupHelper.setText("Model loaded successfully");
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show(5000);
        }

        function loadFailed(uri, timeoutID) {
            // clear timeout
            clearTimeout(timeoutID);

            $('#open-from-node').removeClass('disabled');
            $('#open-node-alert').removeClass('alert-success');
            $('#open-node-alert').addClass('alert-error');
            $('#open-node-alert-content').text("Unable to get model from "+uri+". Are you sure that your model is a valid JSON Kevoree model ? Or that the remote target is reachable ?");
            $('#open-node-alert').show();
            $('#open-node-alert').addClass('in');
        }

        function loadTimeout(uri) {
            $('#open-from-node').removeClass('disabled');
            $('#open-node-alert').removeClass('alert-success');
            $('#open-node-alert').addClass('alert-error');
            $('#open-node-alert-content').text("Unable to get model from "+uri+". Request timed out (10 seconds).");
            $('#open-node-alert').show();
            $('#open-node-alert').addClass('in');
        }
    }
);