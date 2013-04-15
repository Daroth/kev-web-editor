/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 * This should be considered as an Abstract Class
 */
define(
    ["jquery"],

    function($) {
        // STATIC CONSTANTS
        UIEntity.CHILD_X_PADDING = 40;
        UIEntity.CHILD_Y_PADDING = 15;

        /**
         * You shouldn't use this object directly, it should be considered
         * as an abstract object that facilitate the work in sub-classes
         * @param ctrl
         * @constructor
         */
        function UIEntity(ctrl) {
            this._ctrl = ctrl;
            this._position = {x: 0, y: 0} // default position
            this._isReady = false;
        }

        UIEntity.prototype.getShape = function() {
            return this._shape;
        }

        UIEntity.prototype.setPopup = function(content) {
            var that = this;
            // TODO this is not buenos
            this._shape.on('dblclick tap', function(e) {
                // prevent children from getting the event too
                e.cancelBubble = true;

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

        UIEntity.prototype.c2pRemoveEntity = function () {
            // retrieve this shape's layer
            var layer = this._shape.getLayer();
            // remove shape from layer
            this._shape.remove();
            // redraw the layer
            layer.draw();
        }

        UIEntity.prototype.setDOMItem = function (item) {
            this._DOMItem = item;
        }

        UIEntity.prototype.getDOMItem = function () {
            return this._DOMItem;
        }

        /**
         * Called when this entity's shape has been added to the stage
         * and so you can use KineticJS methods such as :
         * getLayer(), getStage() etc..
         *
         * TODO change that and give stage to each entity UI ?
         */
        UIEntity.prototype.ready = function() {}

        UIEntity.prototype.isReady = function() {
            return this._isReady;
        }

        UIEntity.prototype.c2pWireCreationStarted = function (wire) {}

        /**
         * Do not rely on that, in KineticJS, groups do not have
         * width & height defined, so you MUST override this method
         * @returns {number} the width of this shape
         */
        UIEntity.prototype.getWidth = function () {
            // do not rely on that, in KineticJS, groups do not have
            // width & height defined, so you MUST override this method
            return this._shape.getWidth();
        }

        /**
         * Do width & height defined, so you MUST override this method
         * @returns {number} the height of this shape
         */
        UIEntity.prototype.getHeight = function () {
            return this._shape.getHeight();
        }

        return UIEntity;
    }
);