define(
    [
        'require'
    ],

    function(require) {
        KEntity._COUNT = 0;

        function KEntity(editor, type) {
            this._editor = editor;
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

        KEntity.prototype.getEditor = function () {
            return this._editor;
        }

        KEntity.prototype.getWires = function() {
            return this._wires;
        }

        KEntity.prototype.addWire = function (wire) {
            if (this._wires.indexOf(wire) == -1) { // do not duplicate wire in array
                this._wires.push(wire);
            }
        }

        KEntity.prototype.createWire = function () {
            var wire = require('factory/CFactory').getInstance().newWire();
            wire.setOrigin(this);
            this.addWire(wire);
            return wire;
        }

        KEntity.prototype.remove = function () {
            this.getEditor().removeEntity(this);
            this.clearWires();
        }

        KEntity.prototype.disconnectWire = function (wire) {
            var index = this._wires.indexOf(wire);
            this._wires.splice(index, 1);
        }

        KEntity.prototype.clearWires = function () {
            var wires = this._wires.slice(0); // clone wires array
            for (var i=0; i<wires.length; i++) {
                wires[i].disconnect(); // tell each wire to disconnect
            }
        }

        return KEntity;
    }
);