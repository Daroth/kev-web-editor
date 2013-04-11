define(
    [
        'app/util/Observer'
    ],

    function(Observer) {
        WireLayer.prototype = new Observer();

        function WireLayer() {
            this._layer = new Kinetic.Layer();
            this._wires = new Array();
        }

        WireLayer.prototype.add = function (wire) {
            var index = this._wires.indexOf(wire);
            if (index == -1) {
                this._wires.push(wire);
                wire.addObserver(this);
                this.draw();
            }
        }

        WireLayer.prototype.remove = function (wire) {
            var index = this._wires.indexOf(wire);
            if (index != -1) {
                this._wires.splice(index, 1);
                this.draw();
            }
        }

        WireLayer.prototype.draw = function () {
            this._layer.getCanvas().clear();
            for (var i= 0; i < this._wires.length; i++) {
                this._wires[i].draw(this._layer);
            }
        }

        WireLayer.prototype.getKineticLayer = function () {
            return this._layer;
        }

        WireLayer.prototype.update = function (wire) {
            if (wire.isRemovable()) this.remove(wire);
            else this.draw();
        }

        return WireLayer;
    }
);