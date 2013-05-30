define(
    [
        'ui/RuntimeUI',
        'ctrl/QueryStringCtrl',
        'core/KevoreeJSBootstrap',
        'util/Logger'
    ],

    function (RuntimeUI, QueryStringCtrl, KevoreeJSBootstrap, Logger) {
        var DEFAULT_P2P_IP = "kevoree.org";

        function RuntimeController() {
            this._isStarted = false;
            this._tabs = [];

            this._bootstrapper = new KevoreeJSBootstrap();

            this._ui = new RuntimeUI(this);
            var groups = doARealModelParsingToGetGroups();
            this._ui.inflateGroupSelector(groups);
            this._queryStrCtrl = new QueryStringCtrl(this);
        }

        RuntimeController.prototype.p2cStartNode = function (params) {
            params.nodeName = (params.nodeName && params.nodeName.length > 0) ? params.nodeName : randomName();
            params.p2pIP = (params.p2pIP && params.p2pIP.length > 0) ? params.p2pIP : DEFAULT_P2P_IP;
            console.log(params);
            if (!this._isStarted) {
                // TODO real start node
                this._isStarted = this._bootstrapper.start(params.nodeName, params.groupName, params.p2pIP);

                if (this._isStarted) {
                    this._ui.c2pNodeStarted(params);
                } else {
                    this._ui.c2pNodeStopped();
                }
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

        function randomName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for(var i=0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return 'node'+text;
        }

        function doARealModelParsingToGetGroups() {
            // TODO fake values, read that from model
            return ['WebRTCGroup'];
        }

        return RuntimeController;
    }
);