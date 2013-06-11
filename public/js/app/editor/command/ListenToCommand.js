define(
    [
        'util/AlertPopupHelper',
        'kevoree'
    ],

    function (AlertPopupHelper, Kevoree) {

        function ListenToCommand() {}

        ListenToCommand.prototype.execute = function (editor, uri) {
            var ws = new WebSocket('ws://'+uri);

            ws.onmessage = function (event) {
                var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                var model = loader.loadModelFromString(event.data).get(0);
                editor.setModel(model);
                loadSucceed(uri);
            }

            ws.onopen = function () {
                // you are connected
            }

            ws.onclose = function () {
                AlertPopupHelper.setHTML('Listen to aborted. <br/> Connection closed by server.');
                AlertPopupHelper.setType(AlertPopupHelper.WARN);
                AlertPopupHelper.show(5000);
            }

            ws.onerror = function () {
                loadFailed(uri);
            }
        }

        // private method
        function loadSucceed(uri) {
            AlertPopupHelper.setText("New model received from ws://"+uri);
            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
            AlertPopupHelper.show(5000);
        }

        function loadFailed(uri) {
            AlertPopupHelper.setHTML("Unable to connect to "+uri+".<br/> Aborting listening process...");
            AlertPopupHelper.setType(AlertPopupHelper.ERROR);
            AlertPopupHelper.show(5000);
        }

        return ListenToCommand;
    }
);