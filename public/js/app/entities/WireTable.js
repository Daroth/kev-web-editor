define(
    function() {
        function WireTable(layer) {
            this._layer = layer;
            this._wires = new Array();
        }

        WireTable.prototype.push = function(wire) {
            this._wires.push(wire);
            wire.addObserver(this);
            this.draw();
        }

        WireTable.prototype.pop = function() {
            this._wires.pop();
            this.draw();
        }

        WireTable.prototype.draw = function() {
            // clear canvas before drawing each wire
            this._layer.getCanvas().clear();

            for (var i=0; i<this._wires.length; i++) {
                this._wires[i].draw(this._layer);
            }
        }

        WireTable.prototype.update = function(wire) {
            this.draw();
        }

        return WireTable;
    }
);