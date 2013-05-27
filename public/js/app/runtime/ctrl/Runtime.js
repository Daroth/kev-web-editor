define(
    [
        'ui/RuntimeUI'
    ],

    function (RuntimeUI) {

        function RuntimeController() {
            this._ui = new RuntimeUI(this);
        }

        RuntimeController.prototype.p2cStartNode = function () {
            this._ui.c2pNodeStarted();
        }

        RuntimeController.prototype.p2cStopNode = function () {
            this._ui.c2pNodeStopped();
        }

        return RuntimeController;
    }
);