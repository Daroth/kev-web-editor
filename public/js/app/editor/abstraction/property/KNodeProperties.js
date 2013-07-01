define(
    function () {
        function KNodeProperties(node) {
            this._node = node;
            this._nets = [];
            this._nets.push(require('factory/CFactory').getInstance().newNodeNetwork(node, node)); // default
        }

        KNodeProperties.prototype.addNodeNetwork = function (net) {
            var index = this._nets.indexOf(net);
            if (index == -1) {
                this._nets.push(net);
            }
        }

        KNodeProperties.prototype.removeNodeNetwork = function (net) {
            var index = this._nets.indexOf(net);
            if (index != -1) {
                this._nets.splice(index, 1);
            }
        }

        KNodeProperties.prototype.getNodeNetworks = function () {
            return this._nets;
        }

        KNodeProperties.prototype.getEditor = function () {
            return this._node.getEditor();
        }

        KNodeProperties.prototype.getType = function () {
            return this._node.getType();
        }

        KNodeProperties.prototype.getEntityType = function () {
            return this._node.getEntityType();
        }

        KNodeProperties.prototype.getName = function () {
            return this._node.getName();
        }

        return KNodeProperties;
    }
);