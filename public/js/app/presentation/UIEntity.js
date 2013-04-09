/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 */
define(
    ["jquery"],

    function($) {
        function UIEntity(handler) {
            this._handler = handler;
            this._wires = new Array();
        }

        UIEntity.prototype.getShape = function() {
            return this._shape;
        }

        UIEntity.prototype.setPopup = function(content) {
            var that = this;
            // TODO this is not buenos
            this._shape.on('dblclick tap', function() {
                console.log("dblclick dude : "+content);
                $('#delete').off('click'); // get rid of old listeners on '#delete'
                $('#delete').on('click', function() {
                    that._delete();
                });
                $('#popup-content').html(content);
                $('#popup').modal({ show: true });
            });
        }

        UIEntity.prototype.addWire = function(wire) {
            this._wires.push(wire);
        }

        UIEntity.prototype._delete = function() {
            if (this._wires > 0) {
                for (var i=0; i<this._wires.length; i++) {
                    this._wires[i].remove();
                }
            }

            var stage = this._shape.getStage();
            this._shape.remove();
            stage.draw();

            if (this._handler && typeof (this._handler.onDelete) == typeof (Function)) {
                this._handler.onDelete();
            }
        }

        UIEntity.prototype.setWireListener = function(handler) {}

        return UIEntity;
    }
);