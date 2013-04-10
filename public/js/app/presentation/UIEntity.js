/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 */
define(
    ["jquery"],

    function($) {
        function UIEntity(ctrl) {
            this._ctrl = ctrl;
            this._position = {x: 0, y: 0} // default position
        }

        UIEntity.prototype.getShape = function() {
            return this._shape;
        }

        UIEntity.prototype.setPopup = function(content) {
            var that = this;
            // TODO this is not buenos
            this._shape.on('dblclick tap', function() {
                $('#delete').off('click'); // get rid of old listeners on '#delete'
                $('#delete').on('click', function() {
                    that._delete();
                });
                $('#popup-content').html(content);
                $('#popup').modal({ show: true });
            });
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
        }

        UIEntity.prototype.getPosition = function () {
            return this._position;
        }

        UIEntity.prototype.getCtrl = function () {
            return this._ctrl;
        }

        UIEntity.prototype.setWireListener = function(handler) {}

        return UIEntity;
    }
);