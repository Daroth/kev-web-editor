define(
    function () {
        var RADIUS = 12;

        function UIPort (ctrl) {
            this._ctrl = ctrl;

            this._circle = new Kinetic.Circle({
                radius: RADIUS,
                fillLinearGradientStartPoint: [0, 0],
                fillLinearGradientEndPoint: [0, RADIUS*2],
                fillLinearGradientColorStops: [0, '#bc7645', 1, '#8e7361'],
                strokeWidth: 2
            });

            this._text = new Kinetic.Text({
                text: ctrl.getName().substr(0, 5),
                fontSize: 9,
                fontStyle: 'bold',
                fontFamily: 'Helvetica',
                fill: '#FFF',
                align: 'center'
            });

            this._text.move(
                -this._text.getWidth()/2,
                (-this._text.getHeight()/2) + (RADIUS+5)
            );

            this._shape = new Kinetic.Group({
                x: 100,
                y: 100
            });

            this._shape.add(this._circle);
            this._shape.add(this._text);

            //==========================
            // Event handling
            //==========================
            var that = this;
            this._shape.on('mousedown touchstart', function () {
                that._ctrl.p2cMouseDown();
            });
        }

        UIPort.prototype.getPosition = function () {
            var pos = this._shape.getAbsolutePosition(),
                scale = this._shape.getStage().getScale(),
                stagePos = this._shape.getStage().getPosition();

            return {
                x: (pos.x - stagePos.x) / scale.x,
                y: (pos.y - stagePos.y) / scale.y
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

        UIPort.prototype.getRadius = function () {
            return RADIUS;
        }

        UIPort.prototype.getHeight = function () {
            return RADIUS*2 + this._text.getHeight();
        }

        return UIPort;
    }
);