define(
    ['abstraction/KNetworkProperty'],

    function (KNetworkProperty) {

        var id = 0;

        function KNodeLink(nodeNetwork) {
            this._props = [];
            this._nodeNetwork = nodeNetwork;
            this._type = "type";
            this._rate = 100;
            this._props.push(new KNetworkProperty(this));
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

        KNodeLink.prototype.containsKey = function (key, exceptThisID) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                // if exceptThisID is given, we want to check if key value exists
                // just for props that do not have exceptThisID as keyID
                if (exceptThisID) {
                    if (prop.keyID != exceptThisID && key == prop.key) {
                        // this key already exists
                        return true;
                    }
                } else {
                    if (key == prop.key) {
                        // this key already exists
                        return true;
                    }
                }
            }
            return false;
        }

        KNodeLink.prototype.add = function (keyID, key, value) {
            this._props.push({
                keyID: keyID,
                key: key,
                value: value
            });
        }

        KNodeLink.prototype.remove = function (id) {
            if (this._props.length > 1) {
                for (var i=0; i < this._props.length; i++) {
                    var prop = this._props[i];
                    if (id == prop.keyID) {
                        this._props.splice(i, 1);
                        return true;
                    }
                }
            }
            return false;
        }

        KNodeLink.prototype.setKey = function (id, key) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    prop.key = key;
                    return true;
                }
            }
            this.add(id, key, null);
            return false;
        }

        KNodeLink.prototype.setValue = function (id, value) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    prop.value = value;
                    return true;
                }
            }
            this.add(id, null, value);
            return false;
        }

        KNodeLink.prototype.size = function() {
            return this._props.length;
        }

        KNodeLink.prototype.containsKeyID = function (id) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    return true;
                }
            }
            return false;
        }

        KNodeLink.prototype.getKey = function (id) {
            for (var i=0; i < this._props.length; i++) {
                var prop = this._props[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    return prop.key;
                }
            }
            return null;
        }

        KNodeLink.prototype.toArray = function () {
            var ret = [];
            for (var i=0; i < this._props.length; i++) {
                ret.push({
                    key:    this._props[i].key,
                    value:  this._props[i].value
                });
            }
            return ret;
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