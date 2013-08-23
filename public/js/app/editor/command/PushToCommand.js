define(
    [
        'kevoree'
    ],
    function (Kevoree) {
        var TIMEOUT = 10000;

        function PushToCommand() {
            this._id = null;
        }

        PushToCommand.prototype.execute = function (node, grp, model, callbacks) {
            var that = this;
            clearTimeout(this._id);
            this._id = setTimeout(function () {
                if (callbacks.error && typeof(callbacks.error) == "function") {
                    callbacks.error.call(this, 'Timeout: '+TIMEOUT+'ms');
                }
            }, TIMEOUT);

            var serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer();
            console.log("model", model);
            var jsonModel = JSON.parse(serializer.serialize(model));
            $.ajax({
                url: '/push',
                type: 'POST',
                timeout: 10000, // 10 seconds timeout
                data: {
                    destNodeName: node.getName(),
                    grpName: grp.getName(),
                    model: jsonModel
                },
                dataType: 'json',
                success: function (data) {
                    console.log("PUSH REQUEST ANSWER", data);

                    switch (data.result) {
                        case 1:
                            if (callbacks.success && typeof(callbacks.success) == "function") {
                                callbacks.success.call(this);
                            }
                            clearTimeout(that._id);
                            break;

                        case -1:
                        default:
                            if (callbacks.error && typeof(callbacks.error) == "function") {
                                callbacks.error.call(
                                    this,
                                    'Something went wrong while pushing model to '+node.getName()+' via '+grp.getName()
                                );
                            }
                            clearTimeout(that._id);
                            break;
                    }
                },
                error: function () {
                    if (callbacks.error && typeof(callbacks.error) == "function") {
                        callbacks.error.call(this, 'Internal Server Error');
                    }
                    clearTimeout(that._id);
                }
            });
        }

        return PushToCommand;
    }
);