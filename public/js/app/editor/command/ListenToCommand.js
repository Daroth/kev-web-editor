define(
    [
        'util/AlertPopupHelper',
        'kevoree'
    ],

    function (AlertPopupHelper, Kevoree) {

        function ListenToCommand() {}

        ListenToCommand.prototype.execute = function (editor, uri) {
            var ws = new WebSocket('ws://'+uri),
                loader = new Kevoree.org.kevoree.loader.JSONModelLoader(),
                serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer(),
                os = new Kevoree.java.io.OutputStream();

            ws.onmessage = function (event) {
                var model = loader.loadModelFromString(event.data).get(0);
                editor.setModel(model);
                loadSucceed(ws, uri);
            }

            ws.onopen = function () {
                // you are connected
            }

            ws.onclose = function () {
                connectionClosed();
            }

            ws.onerror = function () {
                loadFailed(uri);
            }

            editor.setModelListener({
                onUpdates: function () {
                    console.log("MODEL UPDATED (d'après le visitor)");
                    serializer.serialize(editor.getModel(), os);
                    var jsonModel = JSON.parse(os.get_result());
                    console.log(jsonModel);
                    ws.send(JSON.stringify(jsonModel));

                    os.set_result(''); // reset OutputStream
                }
            });
        }

        // private method
        function loadSucceed(ws, uri) {
            AlertPopupHelper.setText("New model received from ws://"+uri);
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show(5000);

            $('#listen-to-content').html(['Currently listening to <span class="text-info">', uri, '</span>'].join(''));
            $('#listen-to-close').show();
            $('#listen-to-close').off('click');
            $('#listen-to-close').on('click', function () {
                ws.close();
            });
            $('#listen-to').hide();
        }

        function loadFailed(uri) {
            AlertPopupHelper.setHTML("Unable to connect to "+uri+".<br/> Aborting listening process...");
            AlertPopupHelper.setType(AlertPopupHelper.ERROR);
            AlertPopupHelper.show(5000);

            $('#listen-to-content').empty();
            $('#listen-to-close').hide();
            $('#listen-to').show();
        }

        function connectionClosed() {
            AlertPopupHelper.setHTML('Listen to aborted. <br/> Connection closed.');
            AlertPopupHelper.setType(AlertPopupHelper.WARN);
            AlertPopupHelper.show(5000);

            $('#listen-to-content').empty();
            $('#listen-to-close').hide();
            $('#listen-to').show();
        }

        return ListenToCommand;
    }
);