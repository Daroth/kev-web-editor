define(
    [
        'presentation/UIEntity',
        'presentation/UIInputPort',
        'util/Pooffs'
    ],

    function (UIEntity, UIInputPort, Pooffs) {
        Pooffs.extends(UINestableEntity, UIEntity);

        // static constants
        UINestableEntity.CHILD_X_PADDING = 40;
        UINestableEntity.CHILD_Y_PADDING = 15;

        /**
         * UINestableEntity as to be considered as an Abstract Class (no direct instantiation please)
         * This class defines a bunch of behaviors for nestable entities (like UINode and UIComponent)
         * in order for them to draw their content properly and react to events accordingly whether
         * they are children/parents whatever
         *
         * @param ctrl
         * @constructor
         */
        function UINestableEntity(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

            this._headerName = new Kinetic.Text({
                text: ctrl.getName() + " : " + ctrl.getType(),
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            var that = this;
            this._rect = new Kinetic.Rect({
                stroke: 'white',
                strokeWidth: 1,
                width: that._headerName.getWidth(),
                height: that._headerName.getHeight(),
                cornerRadius: 10,
                drawFunc: function (canvas) {
                    that._draw();
                    this.drawFunc(canvas);
                }
            });

            this._shape = new Kinetic.Group({
                draggable: true
            });
            this._shape.add(this._rect);
            this._shape.add(this._headerName);

            //==========================
            // Event handling
            //==========================
            var that = this;
            this._mouseUpEvent = null;

            this._shape.on('mouseover', function() {
                that._ctrl.p2cMouseOver();
            });

            this._shape.on('mouseout', function() {
                that._ctrl.p2cMouseOut();
            });

            this._shape.on('dragmove', function(e) {
                that._ctrl.p2cDragMove();
            });
        }

        UINestableEntity.prototype.ready = function() {
            if (!this._isReady) {
                var that = this;

                this._shape.on('mouseup', function(event) {
                    that._mouseUpEvent = event;
                    that._ctrl.p2cMouseUp(this.getStage().getPointerPosition());
                });

                this._shape.on('dragstart', function(event) {
                    console.log("drag start UINestable");
                    this.setZIndex(0); // this is mandatory,
                                       // otherwise you won't get 'mouseup' events on previously added shapes
                                       // meaning that you won't be able to drag'n'drop UINestableEntity (in|out)side each other
                    that._ctrl.p2cDragStart();

                    // prevent parent from getting the event too
                    if (that._ctrl.getParent()) event.cancelBubble = true;
                });

                this._shape.on('dragend', function(e) {
                    that._ctrl.p2cDragEnd();

                    // prevent parent from getting the event too
                    if (that._ctrl.getParent()) e.cancelBubble = true;
                });

                this._isReady = true;
            }
        }

        UINestableEntity.prototype.getChildOffset = function (child) {
            var children = this._ctrl.getChildren();
            var y_offset = this._headerName.getHeight();

            for (var i=0; i < children.length; i++) {
                if (child === children[i].getUI()) {
                    return { x: UINestableEntity.CHILD_X_PADDING/2, y: y_offset };
                } else {
                    y_offset += children[i].getUI().getHeight() + UINestableEntity.CHILD_Y_PADDING;
                }
            }

            return { x: UINestableEntity.CHILD_X_PADDING/2, y: y_offset };
        }

        UINestableEntity.prototype.c2pMouseOut = function () {
            document.body.style.cursor = 'default';
            this._rect.setStrokeWidth(1);
            this._rect.setStroke('white');
            this._rect.getLayer().draw();
        }

        UINestableEntity.prototype.c2pMouseOver = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(2);
            this._rect.setStroke('#ccc');
            this._rect.getLayer().draw();
        }

        UINestableEntity.prototype._draw = function () {
            console.log("UINestableEntity _draw()");
        }

        UINestableEntity.prototype.getPosition = function () {
            return {
                x: this._shape.getAbsolutePosition().x + 10 - this._shape.getOffset().x,
                y: this._shape.getAbsolutePosition().y + 10 - this._shape.getOffset().y
            };
        }

        UINestableEntity.prototype.getHeader = function () {
            return this._headerName;
        }

        UINestableEntity.prototype.getWidth = function () {
            return this._rect.getWidth();
        }

        UINestableEntity.prototype.getHeight = function () {
            return this._rect.getHeight();
        }

        UINestableEntity.prototype.setWidth = function (width) {
            this._rect.setWidth(width);
        }

        UINestableEntity.prototype.setHeight = function (height) {
            this._rect.setHeight(height);
        }

        return UINestableEntity;
    }
);