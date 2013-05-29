define(
    [
        'ui/RuntimeUI',
        'ctrl/QueryStringCtrl'
    ],

    function (RuntimeUI, QueryStringCtrl) {

        function RuntimeController() {
            this._ui = new RuntimeUI(this);
            this._queryStrCtrl = new QueryStringCtrl(this);
        }

        RuntimeController.prototype.p2cStartNode = function (nodeName, grpId) {
            // TODO
            nodeName = (nodeName && nodeName.length > 0) ? nodeName : 'node0';
            console.log("wanna start "+nodeName+" with group "+grpId);
            this._ui.c2pNodeStarted(nodeName, grpId);
        }

        RuntimeController.prototype.p2cStopNode = function () {
            // TODO
            this._ui.c2pNodeStopped();
        }

        RuntimeController.prototype.addTab = function (name, content) {
            this._ui.addTab(name, content);
        }

        return RuntimeController;
    }
);