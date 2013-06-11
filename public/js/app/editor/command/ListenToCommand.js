define(
    [
        'util/AlertPopupHelper'
    ],

    function (AlertPopupHelper) {

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
                loadFailed(uri);
            }

            ws.onerror = function () {
                loadFailed(uri);
            }
        }

        // private method
        function loadSucceed(uri) {
            AlertPopupHelper.setText("Listening on ws://"+uri);
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