define(
    [
        'ui/RuntimeUI',
        'ctrl/QueryStringCtrl',
        'util/Logger'
    ],

    function (RuntimeUI, QueryStringCtrl, Logger) {

        function RuntimeController() {
            this._isStarted = false;
            this._tabs = [];

            this._ui = new RuntimeUI(this);
            this._queryStrCtrl = new QueryStringCtrl(this);
        }

        RuntimeController.prototype.p2cStartNode = function (nodeName, grpId) {
            // TODO real start node
            nodeName = (nodeName && nodeName.length > 0) ? nodeName : 'node0';
            if (!this._isStarted) {
                this._isStarted = true;
                this._ui.c2pNodeStarted(nodeName, grpId);
            }
        }

        RuntimeController.prototype.p2cStopNode = function () {
            // TODO real stop node
            if (this._isStarted) {
                this._isStarted = false;
                this._ui.c2pNodeStopped();
            }
        }

        RuntimeController.prototype.addTab = function (name, content) {
            this._tabs.push({
                name: name,
                content: content
            });
            this._ui.addTab(name, content);
        }

        RuntimeController.prototype.removeTab = function (name) {
            var index = this._tabs.indexOf(name);
            if (index != -1) {
                this._tabs.slice(index, 1);
            } else {
                Logger.log("Runtime: cannot remove unknown tab \""+name+"\"");
            }
        }

        return RuntimeController;
    }
);