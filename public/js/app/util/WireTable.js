define(
    function() {

        /**
         * Holds wire refs and handle their drawing
         * Acts like an observer (subjects are CWire): it registers itself
         * on each added wire with push(wire) method
         * @param layer
         * @constructor
         */
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
                this._wires[i].getUI().draw(this._layer);
            }
        }

        WireTable.prototype.remove = function (wire) {
            var index = this._wires.indexOf(wire);
            this._wires.splice(index, 1);
            this.draw();
        }

        WireTable.prototype.update = function(wire) {
            if (wire.getUI().isToRemove()) {
                var index = this._wires.indexOf(wire);
                this._wires.splice(index, 1);
            }
            this.draw();
        }

        return WireTable;
    }
);