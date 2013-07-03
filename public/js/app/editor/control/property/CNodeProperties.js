define(
    [
        'abstraction/property/KNodeProperties',
        'presentation/property/UINodeProps',
        'control/AController',
        'util/Pooffs'
    ],
    function (KNodeProperties, UINodeProps, AController, Pooffs) {

        Pooffs.extends(CNodeProperties, AController);
        Pooffs.extends(CNodeProperties, KNodeProperties);

        function CNodeProperties(node) {
            KNodeProperties.prototype.constructor.call(this, node);

            this._ui = new UINodeProps(this);
        }

        CNodeProperties.prototype.p2cPushModel = function () {
            this._ui.c2pPushModelStarted();
            // TODO real implem needed here
            setTimeout(this._ui.c2pPushModelEndedWell, 3000);
        }

        CNodeProperties.prototype.p2cPullModel = function () {
            this._ui.c2pPullModelStarted();
            // TODO real implem needed here
            setTimeout(this._ui.c2pPullModelEndedWell, 3000);
        }

        CNodeProperties.prototype.p2cAddNodeLink = function () {
            var nets = this.getNodeNetworks();

            for (var i=0; i < nets.length; i++) {
                var link = require('factory/CFactory').getInstance().newNodeLink(nets[i]);
                nets[i].addLink(link);
                this._ui.c2pNodeLinkAdded(link.getUI());
            }
        }

        CNodeProperties.prototype.p2cDeleteNodeLink = function (id) {
            var nets = this.getNodeNetworks();

            // always keep at least one node link
            if (nets[0].getLinks().length > 1) {
                for (var i=0; i < nets.length; i++) {
                    var links = nets[i].getLinks();
                    for (var j=0; j < links.length; j++) {
                        if (links[j]._id == id) {
                            var link = links[j];
                            nets[i].removeLink(link);
                            this._ui.c2pNodeLinkRemoved(link.getUI());
                        }
                    }
                }
            }

            // set default node link to active
            nets[0].getLinks()[0].getUI().setActive(true);

            if (nets[0].getLinks().length == 1) {
                this._ui.c2pDisableDeleteNodeLinkButton();
            } else {
                this._ui.c2pEnableDeleteNodeLinkButton();
            }
        }

        CNodeProperties.prototype.p2cSaveProperties = function (props) {
            // node's proxy
            this.getNode().p2cSaveProperties(props);
        }

        return CNodeProperties;
    }
);