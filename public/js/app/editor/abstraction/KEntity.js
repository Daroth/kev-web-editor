define(
    function(require) {
        KEntity._COUNT = 0;

        function KEntity(editor, lib, type) {
            this._editor = editor;
            this._library = lib;
            this._type = type;
            this._name = type + KEntity._COUNT++;
            this._wires = new Array();
        }

        KEntity.prototype.getName = function() {
            return this._name;
        }

        KEntity.prototype.setName = function(name) {
            this._name = name;
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
            var wire = require('factory/CFactory').getInstance().newWire(this);
            this.addWire(wire);
            return wire;
        }

        KEntity.prototype.remove = function () {
            this.getEditor().removeEntity(this);
            this.clearWires();
        }

        KEntity.prototype.disconnect = function (wire) {
            var index = this._wires.indexOf(wire);
            this._wires.splice(index, 1);
        }

        KEntity.prototype.clearWires = function () {
            var wires = this._wires.slice(0); // clone wires array
            for (var i=0; i < wires.length; i++) {
                wires[i].disconnect();
            }
        }

        KEntity.prototype.hasWires = function () {
            if (this._wires.length > 0) return true;
            else {
                if (this._children) {
                    for (var i=0; i < this._children.length; i++) {
                        if (this._children[i].hasWires()) return true;
                    }
                }
            }
            return false;
        }

        KEntity.prototype.getLibrary = function () {
            return this._library;
        }

        return KEntity;
    }
);