/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 */
define(
    ["jquery"],

    function($) {
        function KEntity(handler) {
            this._handler = handler;
            this._wires = new Array();
        }

        KEntity.prototype.getShape = function() {
            return this._shape;
        }

        KEntity.prototype.setPopup = function(content) {
            // TODO this is not buenos
            this._shape.off('dblclick');
            this._shape.on('dblclick', function() {
                console.log("dblclick dude : "+content);
                $('#popup-content').html(content);
                $('#popup').modal({ show: true });
            });
        }

        KEntity.prototype.addWire = function(wire) {
            this._wires.push(wire);
        }

        KEntity.prototype.setWireListener = function(handler) {}

        return KEntity;
    }
);