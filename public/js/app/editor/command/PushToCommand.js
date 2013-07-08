define(
    [
        'kevoree'
    ],
    function (Kevoree) {
        function PushToCommand() {}

        PushToCommand.prototype.execute = function (ip, port, model, options) {
            var ws = new WebSocket('ws://'+ip+':'+port),
                serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer(),
                os = new Kevoree.java.io.OutputStream();

            serializer.serialize(model, os);

            ws.onopen = function () {
                ws.send(os.$result);
                if (options.sent && typeof(options.sent) == 'function') {
                    options.sent.call(this);
                }
            }

            ws.onerror = function () {
                if (options.onerror && typeof(options.onerror) == 'function') {
                    options.onerror.call(this);
                }
            }

            ws.onclose = function () {
                if (options.onclose && typeof(options.onclose) == 'function') {
                    options.onclose.call(this);
                }
            }
        }

        return PushToCommand;
    }
);