define(
    [
        'ui/RuntimeUI'
    ],

    function (RuntimeUI) {

        function RuntimeController() {
            this._ui = new RuntimeUI(this);
        }

        RuntimeController.prototype.p2cStartNode = function (nodeName) {
            // TODO
            nodeName = (nodeName && nodeName.length > 0) ? nodeName : 'node0';
            this._ui.c2pNodeStarted(nodeName);
        }

        RuntimeController.prototype.p2cStopNode = function () {
            // TODO
            this._ui.c2pNodeStopped();
        }

        return RuntimeController;
    }
);