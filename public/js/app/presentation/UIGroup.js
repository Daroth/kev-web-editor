 define(
    [
        "presentation/UIEntity"
    ],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 4,
            RADIUS = 12;

        // inherit from KEntity
        UIGroup.prototype = new UIEntity();

        function UIGroup(ctrl) {
            this._ctrl = ctrl;
            UIEntity.prototype.constructor.call(this, ctrl);

            var circle = new Kinetic.Circle({
                radius: 55,
                fill: 'green',
                stroke: 'black',
                strokeWidth: STROKE,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: 5,
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            this._plug = new Kinetic.Circle({
                y: (circle.getRadius() / 2) + RADIUS,
                radius: RADIUS,
                fill: '#f1c30f'
            });

            var text = new Kinetic.Text({
                text: ctrl.getName() + '\n' + ctrl.getType(),
                fontSize: 13,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                align: 'center',
                width: circle.getWidth()-10
            });

            text.move(-text.getWidth()/2, -text.getHeight()/2);

            this._shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true
            });
            this._shape.add(circle);
            this._shape.add(this._plug);
            this._shape.add(text);

            //===========================
            // Event handling
            //===========================
            var that = this;

            this._shape.on('mouseover touchstart', function() {
                document.body.style.cursor = 'pointer';
                circle.setStrokeWidth(STROKE+1);
                circle.getLayer().draw();
            });

            this._shape.on('mouseout touchend', function() {
                document.body.style.cursor = 'default';
                circle.setStrokeWidth(STROKE);
                circle.getLayer().draw();
            });

            this._shape.on('dragmove', function() {
                that._ctrl.p2cDragMove();
            });

            this._plug.on('mouseover touchmove', function() {
                that._plug.setRadius(RADIUS+1);
                that._plug.getLayer().draw();
            });

            this._plug.on('mouseout touchend', function() {
                that._plug.setRadius(RADIUS);
                that._plug.getLayer().draw();
            });

            //===========================
            // Properties popup content
            //===========================
            this.setPopup();
        }

        // Override UIEntity.c2pWireCreationStarted(UIWire)
        UIGroup.prototype.c2pWireCreationStarted = function (wire) {
            var wiresLayer = this._ctrl.getEditor().getUI().getWiresLayer();
            wire.setTargetPoint(this.getPosition());
            wiresLayer.draw();
        }


        UIGroup.prototype.ready = function () {
            if (!this._isReady) {
                var that = this;

                // listens to 'mousedown' events to recognize
                // initiation of wire drawing
                this._plug.on('mousedown touchstart', function() {
                    // disable drag events on group during wire creation process
                    that._shape.setDraggable(false);
                    // dispatch user's mousedown event to controller
                    that._ctrl.p2cMouseDown(that._shape.getStage().getPointerPosition());
                });

                that._shape.getStage().on('mouseup touchend', function () {
                    that._ctrl.p2cMouseMove(this.getPointerPosition());
                });

                this._isReady = true;
            }
        }

        UIGroup.prototype.getPosition = function () {
            return this._plug.getAbsolutePosition();
        }

        return UIGroup;
    }
);