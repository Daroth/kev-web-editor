define(
    [],

    function () {

        var id = 0;

        function KNodeNetwork(initBy, target) {
            this._links = [];
            this._target = target;
            this._initBy = initBy;
            this._links.push(require('factory/CFactory').getInstance().newNodeLink(this));
            this._id = id++;
        }

        KNodeNetwork.prototype.addLink = function (link) {
            var index = this._links.indexOf(link);
            if (index == -1) {
                this._links.push(link);
            }
        }

        KNodeNetwork.prototype.removeLink = function (link) {
            if (this._links.length > 1) {
                var index = this._links.indexOf(link);
                if (index != -1) {
                    this._links.splice(index, 1);
                }
            }
        }

        KNodeNetwork.prototype.getLinks = function () {
            return this._links;
        }

        KNodeNetwork.prototype.setTarget = function (node) {
            this._target = node;
        }

        KNodeNetwork.prototype.getTarget = function () {
            return this._target;
        }

        KNodeNetwork.prototype.setInitBy = function (node) {
            this._initBy = node;
        }

        KNodeNetwork.prototype.getInitBy = function () {
            return this._initBy;
        }

        KNodeNetwork.prototype.accept = function (visitor) {
            visitor.visitNodeNetwork(this);
        }

        return KNodeNetwork;
    }
);