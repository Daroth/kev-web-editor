define(
    function() {
        var COUNT = 0;

        KWire.ENTITY_TYPE = 'Wire';

        function KWire(origin) {
            this._origin = origin;
            this._name = 'wire'+COUNT++;
        }

        KWire.prototype.setOrigin = function(entity) {
            this._origin = entity;
        }

        KWire.prototype.setTarget = function(entity) {
            this._target = entity;

            // when this is called, it means that wire is plug from one hand to another
            // so we can add it to the model
            this._origin.addBindingInstanceToModel(this._target);
        }

        KWire.prototype.getOrigin = function() {
            return this._origin;
        }

        KWire.prototype.getTarget = function() {
            return this._target;
        }

        KWire.prototype.getName = function () {
            return this._name;
        }

        KWire.prototype.setName = function (name) {
            this._name = name;
        }

        KWire.prototype.getEntityType = function () {
            return KWire.ENTITY_TYPE;
        }

        KWire.prototype.canConnect = function (entity) {
            for (var i=0; i < this._origin.getWires().length; i++) {
                var wire = this._origin.getWires()[i];
                if (wire.getTarget() && wire.getTarget() == entity) return false;
            }
            return true;
        }

        KWire.prototype.disconnect = function() {
            if (this._origin) this._origin.disconnect(this);
            if (this._target) this._target.disconnect(this);
            this._origin = null;
            this._target = null;
        }

        return KWire;
    }
);