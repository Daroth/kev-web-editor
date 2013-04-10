define(
    [
        "app/presentation/UIEntity"
    ],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 4,
            RADIUS = 10;

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
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            this._plug = new Kinetic.Circle({
                y: (circle.getRadius() / 2) + RADIUS,
                radius: RADIUS,
                fill: '#f1c30f'
            });

            var text = new Kinetic.Text({
                text: ctrl.getType(),
                fontSize: 13,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                align: 'center',
                width: circle.getWidth()
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

            this._shape.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
                circle.setStrokeWidth(STROKE+1);
                circle.getLayer().draw();
            });

            this._shape.on('mouseout', function() {
                document.body.style.cursor = 'default';
                circle.setStrokeWidth(STROKE);
                circle.getLayer().draw();
            });

            this._shape.on('dragmove', function() {
                var wires = that._ctrl.getWires();
                if (wires.length > 0) {
                    // there is plugged wires
                    // go update wiretable
                    for (var i=0; i<wires.length; i++) {
                        wires[i].setOrigin(that._ctrl);
                    }
                }
            });

            this._plug.on('mouseover', function() {
                that._plug.setRadius(RADIUS+1);
                that._plug.getLayer().draw();
            });

            this._plug.on('mouseout', function() {
                that._plug.setRadius(RADIUS);
                that._plug.getLayer().draw();
            });

            //===========================
            // Properties popup content
            //===========================
            this.setPopup('<p>'+ctrl.getType()+' TODO</p>');
        }

        UIGroup.prototype.setWireListener = function(handler) {
            UIEntity.prototype.setWireListener.call(this, handler); // like super.setWireListener(handler); in Java
            var that = this;

            // listens to 'mousedown' events to recognize
            // initiation of wire drawing
            this._plug.on('mousedown', function() {
                // disable drag events on group during wire creation process
                that._shape.setDraggable(false);

                // dispatch onWireCreationStart event with the position on the plug
                if (handler && typeof (handler.onWireCreationStart) == typeof (Function)) {
                    handler.onWireCreationStart(that.getPosition());
                }
            });

            // listens to 'mouseup' events to recognize
            // the end of a wire drawing
            that._shape.getStage().on('mouseup', function() {
                // re-enable drag events on group
                that._shape.setDraggable(true);
            });
        }

        UIGroup.prototype._delete = function() {
            UIEntity.prototype._delete.call(this);
        }

        UIGroup.prototype.getPosition = function () {
            return this._plug.getAbsolutePosition();
        }

        return UIGroup;
    }
);