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

        CNodeProperties.prototype.p2cSelectedNodeNetwork = function (nodeName) {
            var net = this.getNodeNetworkByInitByName(nodeName);
            if (net == null) {
                var initByNode = this.getNode().getEditor().getEntity(nodeName),
                    nodeNetwork = require('factory/CFactory').getInstance().newNodeNetwork(initByNode, this);
                this.addNodeNetwork(nodeNetwork);
            }
        }

        CNodeProperties.prototype.p2cUnselectedNodeNetwork = function (nodeName) {
            var nets = this.getNodeNetworks(),
                removed = false;

            if (nets.length > 1) {
                for (var i=0; i < nets.length; i++) {
                    if (nets[i].getInitBy().getName() == nodeName) {
                        this.removeNodeNetwork(nets[i]);
                        removed = true;
                    }
                }
            }

            if (!removed) this._ui.c2pSelectNodeNetwork(nodeName);
        }

        // Override KNodeProperties.addLink(link)
        CNodeProperties.prototype.addLink = function (link) {
            KNodeProperties.prototype.addLink.call(this, link);
            this._ui.c2pNodeLinkAdded(link.getUI());
        }

        CNodeProperties.prototype.p2cAddNodeLink = function () {
            var link = require('factory/CFactory').getInstance().newNodeLink(this);
            this.addLink(link);
        }

        // Override KNodeProperties.removeLink(link)
        CNodeProperties.prototype.removeLink = function (link) {
            if (this.getLinks().length > 1) {
                KNodeProperties.prototype.removeLink.call(this, link);
                this._ui.c2pNodeLinkRemoved(link.getUI());
            }
        }

        CNodeProperties.prototype.p2cDeleteNodeLink = function (id) {
            var links = this.getLinks();

            // always keep at least one node link
            if (links.length > 1) {
                for (var i=0; i < links.length; i++) {
                    if (links[i]._id == id) {
                        var link = links[j];
                        this.removeLink(link);
                    }
                }
            }

            // set default node link to active
            links[0].getUI().setActive(true);

            // check nodeLinks.length in order to tell to the UI to enable/disable delete button
            if (links.length == 1) {
                this._ui.c2pDisableDeleteNodeLinkButton();
            } else {
                this._ui.c2pEnableDeleteNodeLinkButton();
            }
        }

        CNodeProperties.prototype.p2cSaveProperties = function (props) {
            // node's proxy
            this.getNode().p2cSaveProperties(props);
        }

        CNodeProperties.prototype.p2cRemoveEntity = function () {
            // node's proxy
            this.getNode().p2cRemoveEntity();
        }

        CNodeProperties.prototype.p2cSaveNetworkProperties = function () {
            this.getNode().getEditor().updateModel(this);
        }

        return CNodeProperties;
    }
);