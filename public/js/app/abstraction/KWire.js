define(
    function() {

        function KWire() {}

        KWire.prototype.setOrigin = function(entity) {
            this._origin = entity;
        }

        KWire.prototype.setTarget = function(entity) {
            this._target = entity;
        }

        KWire.prototype.getOrigin = function() {
            return this._origin;
        }

        KWire.prototype.getTarget = function() {
            return this._target;
        }

//        KWire.prototype.disconnect = function() {
//            if (this._origin) this._origin.wireDisconnected(this);
//            if (this._target) this._target.wireDisconnected(this);
//        }

        return KWire;
    }
);