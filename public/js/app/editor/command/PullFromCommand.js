define(
    [
        'kevoree'
    ],
    function (Kevoree) {
        function PullFromCommand() {

        }

        PullFromCommand.prototype.execute = function (ip, port, options) {
            var uri = 'ws://' + ip + ':' + port;
            var ws = new WebSocket(uri);
            ws.onmessage = function (event) {
                var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();

                if (options.success && typeof(options.success) == 'function') {
                    options.success.call(this, loader.loadModelFromString(event.data).get(0));
                }
            }

            ws.onopen = function () {
                // TODO use a clean protocol
                ws.send("2");
                if (options.onopen && typeof(options.onopen) == 'function') {
                    options.onopen.call(this);
                }
            }

            ws.onclose = function () {

            }

            ws.onerror = function () {
                if (options.onerror && typeof(options.onerror) == 'function') {
                    options.onerror.call(this);
                }
            }
        }

        return PullFromCommand;
    }
);