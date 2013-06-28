define(
    [
        'require'
    ],

    function (require) {

        var id = 0;

        function KNodeLink(nodeNetwork) {
            this._props = [];
            this._nodeNetwork = nodeNetwork;
            this._type = "type";
            this._rate = 100;
            this._props.push(require('factory/CFactory').getInstance().newNetworkProperty(this));
            this._id = id++;
        }

        KNodeLink.prototype.getNodeNetwork = function () {
            return this._nodeNetwork;
        }

        KNodeLink.prototype.setNetworkType = function (type) {
            this._type = type;
        }

        KNodeLink.prototype.getNetworkType = function () {
            return this._type;
        }

        KNodeLink.prototype.setEstimatedRate = function (rate) {
            this._rate = rate;
        }

        KNodeLink.prototype.getEstimatedRate = function () {
            return this._rate;
        }

        KNodeLink.prototype.addNetworkProperty = function (prop) {
            var index = this._props.indexOf(prop);
            if (index == -1) {
                this._props.push(prop);
            }
        }

        KNodeLink.prototype.deleteNetworkProperty = function (prop) {
            var index = this._props.indexOf(prop);
            if (index != -1) {
                this._props.splice(index, 1);
            }
        }

        KNodeLink.prototype.hasNetworkProperty = function (id) {
            for (var i=0; i < this._props.length; i++) {
                if (this._props[i]._id == id) return true;
            }
            return false;
        }

        KNodeLink.prototype.getNetworkProperty = function (id) {
            for (var i=0; i < this._props.length; i++) {
                if (this._props[i]._id == id) return this._props[i];
            }
            return null;
        }

        KNodeLink.prototype.containsKey = function (key, exceptThisID) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                // if exceptThisID is given, we want to check if key value exists
                // just for props that do not have exceptThisID as keyID
                if (exceptThisID) {
                    if (prop._id != exceptThisID && key == prop.getKey()) {
                        // this key already exists
                        return true;
                    }
                } else {
                    if (key == prop.getKey()) {
                        // this key already exists
                        return true;
                    }
                }
            }
            return false;
        }

        KNodeLink.prototype.accept = function (visitor) {
            visitor.visitNodeLink(this);
        }

        KNodeLink.prototype.getNetworkProperties = function () {
            return this._props;
        }

        return KNodeLink;
    }
);