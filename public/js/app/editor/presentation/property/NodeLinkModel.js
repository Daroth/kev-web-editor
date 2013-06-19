define(
    function () {

        function NodeLinkModel() {
            this._pairs = [];
        }

        NodeLinkModel.prototype.containsKey = function (key, exceptThisID) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
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

        NodeLinkModel.prototype.add = function (keyID, key, value) {
            this._pairs.push({
                keyID: keyID,
                key: key,
                value: value
            });
        }

        NodeLinkModel.prototype.remove = function (id) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
                if (id == prop.keyID) {
                    this._pairs.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        NodeLinkModel.prototype.setKey = function (id, key) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    prop.key = key;
                    return true;
                }
            }
            this.add(id, key, null);
            return false;
        }

        NodeLinkModel.prototype.setValue = function (id, value) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    prop.value = value;
                    return true;
                }
            }
            this.add(id, null, value);
            return false;
        }

        NodeLinkModel.prototype.size = function() {
            return this._pairs.length;
        }

        NodeLinkModel.prototype.containsKeyID = function (id) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    return true;
                }
            }
            return false;
        }

        NodeLinkModel.prototype.getKey = function (id) {
            for (var i=0; i < this._pairs.length; i++) {
                var prop = this._pairs[i];
                if (id == prop.keyID) {
                    // this key ID already exists
                    return prop.key;
                }
            }
            return null;
        }

        NodeLinkModel.prototype.toArray = function () {
            var ret = [];
            for (var i=0; i < this._pairs.length; i++) {
                ret.push({
                    key:    this._pairs[i].key,
                    value:  this._pairs[i].value
                });
            }
            return ret;
        }

        return NodeLinkModel;
    }
);