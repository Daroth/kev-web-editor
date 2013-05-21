define(
    [
        'presentation/UIEntity',
        'presentation/UIInputPort',
        'util/Pooffs',
        'require'
    ],

    function (UIEntity, UIInputPort, Pooffs, require) {
        var UINode = null;
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

            UINode = require('presentation/UINode');

            this._headerName = new Kinetic.Text({
                text: ctrl.getName() + " : " + ctrl.getType(),
                fontSize: 14,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 12,
                align: 'center',
                drawFunc: function (canvas) {
                    that._drawHeader();
                    this.drawFunc(canvas);
                }
            });

            var that = this;
            this._rect = new Kinetic.Rect({
                width: that._headerName.getWidth(),
                height: that._headerName.getHeight(),
                fill: 'white',
                opacity: 0.1,
                drawFunc: function (canvas) {
                    that._draw();
                    this.drawFunc(canvas);
                }
            });

            this._border = new Kinetic.Rect({
                width: that._rect.getWidth(),
                height: that._rect.getHeight(),
                stroke: 'white',
                strokeWidth: 2,
                cornerRadius: 10,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.6,
                drawFunc: function (canvas) {
                    that._drawBorder();
                    this.drawFunc(canvas);
                }
            });

            this._shape = new Kinetic.Group({
                draggable: true
            });
            this._shape.add(this._border);
            this._shape.add(this._rect);
            this._shape.add(this._headerName);

            //==========================
            // Event handling
            //==========================
            this._mouseUpEvent = null;

            this._shape.on('mouseover touchmove', function (e) {
                that._ctrl.p2cMouseOver();
                e.cancelBubble = true;
            });

            this._shape.on('mouseout touchend', function() {
                that._ctrl.p2cMouseOut();
            });

            this._shape.on('dragmove', function(e) {
                that._ctrl.p2cDragMove();
            });
        }

        UINestableEntity.prototype.ready = function() {
            if (!this._isReady) {
                var that = this;

                this._shape.on('mouseup touchend', function(event) {
                    that._mouseUpEvent = event;
                    that._ctrl.p2cMouseUp(this.getStage().getTouchPosition() || this.getStage().getPointerPosition());
                });

                this._shape.on('dragstart', function(event) {
                    that._dragStartHandler(event);
                });

                this._shape.on('dragend', function(e) {
                    that._ctrl.p2cDragEnd();

                    // prevent parent from getting the event too
                    if (that._ctrl.getParent()) e.cancelBubble = true;
                });

                this._isReady = true;
            }
        }

        UINestableEntity.prototype._dragStartHandler = function (event) {
            this._shape.setZIndex(0); // this is mandatory,
            // otherwise you won't get 'mouseup' events on previously added shapes
            // meaning that you won't be able to drag'n'drop UINestableEntity (in|out)side each other
            this._ctrl.p2cDragStart();

            // prevent parent from getting the event too
            if (this._ctrl.getParent()) {
                event.cancelBubble = true;
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
            this._border.setAttrs({
                strokeWidth: 1,
                stroke: 'white'
            });
            this._shape.getLayer().draw();
        }

        UINestableEntity.prototype.c2pMouseOver = function () {
            document.body.style.cursor = 'pointer';
        }

        UINestableEntity.prototype.redrawParent = function () {
            if (this._shape && this._shape.getParent() && this._shape.getLayer()) {
                this._shape.getLayer().draw();
            }

            if (this._ctrl.getParent()) {
                this._ctrl.getParent().getUI().redrawParent();
            }
        }

        UINestableEntity.prototype._drawHeader = function () {
            this._headerName.setText(this._ctrl.getName() + ' : ' + this._ctrl.getType());
        }

        UINestableEntity.prototype._draw = function () {}

        UINestableEntity.prototype._drawBorder = function () {
            this._border.setWidth(this._rect.getWidth());
            this._border.setHeight(this._rect.getHeight());
        }

        UINestableEntity.prototype.getPosition = function () {
            return this._shape.getAbsolutePosition();
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