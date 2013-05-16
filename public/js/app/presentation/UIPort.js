define(
    function () {
        var RADIUS = 12;

        function UIPort (ctrl) {
            this._ctrl = ctrl;

            this._shape = new Kinetic.Circle({
                radius: RADIUS,
                fillLinearGradientStartPoint: [0, 0],
                fillLinearGradientEndPoint: [0, RADIUS*2],
                fillLinearGradientColorStops: [0, '#bc7645', 1, '#8e7361'],
                strokeWidth: 2
            });

            //==========================
            // Event handling
            //==========================
            var that = this;
            this._shape.on('mouseenter touchstart', function () {
                that._shape.setStrokeWidth(that._shape.getStrokeWidth()+1);
                that._shape.getLayer().draw();
            });

            this._shape.on('mouseout touchend', function () {
                that._shape.setStrokeWidth(that._shape.getStrokeWidth()-1);
                that._shape.getLayer().draw();
            });

            this._shape.on('mousedown touchstart', function () {
                that._ctrl.p2cMouseDown();
            });
        }

        UIPort.prototype.getPosition = function () {
            var pos = this._shape.getAbsolutePosition(),
                scale = this._shape.getStage().getScale();
            return {
                x: pos.x / scale.x,
                y: pos.y / scale.y
            };
        }

        UIPort.prototype.getShape = function () {
            return this._shape;
        }

        UIPort.prototype.c2pWireCreationStarted = function (wire) {
            var wiresLayer = this._ctrl.getComponent().getEditor().getUI().getWiresLayer();
            wire.setTargetPoint(this.getPosition());
            wiresLayer.draw();
            this._ctrl.getComponent().getUI().setDraggable(false, true, true);
        }

        UIPort.prototype.setDraggable = function (isDraggable, parentsToo, childrenToo) {
            this._ctrl.getComponent().getUI().setDraggable(isDraggable, parentsToo, childrenToo);
        }

        UIPort.prototype.getWidth = function () {
            return RADIUS*2;
        }

        return UIPort;
    }
);