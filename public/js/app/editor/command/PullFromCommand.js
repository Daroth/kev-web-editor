define(
    [
        'kevoree'
    ],
    function (Kevoree) {
        var TIMEOUT = 10000;

        function PullFromCommand() {
            this._id = null;
        }

        PullFromCommand.prototype.execute = function (grp, callbacks) {
            clearTimeout(this._id);
            this._id = setTimeout(function () {
                if (callbacks.error && typeof(callbacks.error) == "function") {
                    callbacks.error.call(this, 'Timeout: '+TIMEOUT+'ms');
                }
            }, TIMEOUT);

            // TODO pull

        }

        return PullFromCommand;
    }
);