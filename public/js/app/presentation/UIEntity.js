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
                    that._ctrl.p2cRemoveEntity();
                });
                $('#popup-content').html(content);
                $('#popup').modal({ show: true });
            });
        }

        UIEntity.prototype.getPosition = function () {
            return this._position;
        }

        UIEntity.prototype.getCtrl = function () {
            return this._ctrl;
        }

        UIEntity.prototype.setWireListener = function(handler) {}

        UIEntity.prototype.c2pRemoveEntity = function () {
            // retrieve this shape's layer
            var layer = this._shape.getLayer();
            // remove shape from layer
            this._shape.remove();
            // redraw the layer
            layer.draw();
        }

        return UIEntity;
    }
);