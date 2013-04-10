define(
    function() {
        KEntity._COUNT = 0;

        function KEntity(type) {
            this._type = type;
            this._name = type + KEntity._COUNT++;
            this._wires = new Array();
        }

        KEntity.prototype.getName = function() {
            return this._name;
        }

        KEntity.prototype.getType = function() {
            return this._type;
        }

        KEntity.prototype.getWires = function() {
            return this._wires;
        }

        KEntity.prototype.addWire = function (wire) {
            if (this._wires.indexOf(wire) == -1) { // do not duplicate wire in array
                this._wires.push(wire);
            }
        }

        KEntity.prototype.removeWire = function (wire) {
            var index = this._wires.indexOf(wire);
            this._wires.splice(index, 1);
        }

        KEntity.prototype.clearWires = function () {
            this._wires = new Array();
        }

        return KEntity;
    }
);