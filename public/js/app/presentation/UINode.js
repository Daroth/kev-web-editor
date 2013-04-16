define(
    ["presentation/UIEntity"],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3,
            DEFAULT_STROKE_COLOR = '#FFF',
            KO_STROKE_COLOR = '#F00',
            OK_STROKE_COLOR = '#0F0';

        UINode.prototype = new UIEntity();

        function UINode(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

            this._headerName = new Kinetic.Text({
                text: ctrl.getName()+" : "+ctrl.getType(),
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            var that = this;
            this._rect = new Kinetic.Rect({
                stroke: DEFAULT_STROKE_COLOR,
                strokeWidth: STROKE,
                width: that._headerName.getWidth(),
                height: that._headerName.getHeight(),
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
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
                document.body.style.cursor = 'default';
                that._rect.setStrokeWidth(STROKE);
                that._rect.setStroke(DEFAULT_STROKE_COLOR);
                that._rect.getLayer().draw();
            });

            this._shape.on('dragmove', function(e) {
                that._ctrl.p2cDragMove();
            });

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        UINode.prototype.ready = function() {
            if (!this._isReady) {
                var that = this;

                this._shape.on('mouseup', function(event) {
                    that._mouseUpEvent = event;
                    that._ctrl.p2cMouseUp(this.getStage().getPointerPosition());
                });

                this._shape.on('dragstart', function(event) {
                    this.setZIndex(0); // this is mandatory, otherwise you won't get 'mouseup' events on previously added shapes
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

        UINode.prototype.getPosition = function () {
            return {
                x: this._shape.getAbsolutePosition().x + 10 - this._shape.getOffset().x,
                y: this._shape.getAbsolutePosition().y + 10 - this._shape.getOffset().y
            };
        }

        UINode.prototype.c2pAddChild = function (entity) {
            // reset entity old position and offset to fit in its new container
            entity.getShape().setPosition(0, 0);
            entity.getShape().setOffset(0, 0);

            // remove entity's shape from its container if any
            entity.getShape().remove();
            // add entity's shape to this node group
            this._shape.add(entity.getShape());

            // tell the entity that it has been init well
            entity.ready();

            // ask parent to redraw itself
            var parent = this._ctrl.getParent();
            if (parent) parent.getUI().redrawParent();

            this._shape.getLayer().draw();
        }

        UINode.prototype.c2pDropPossible = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(STROKE+1);
            this._rect.setStroke(OK_STROKE_COLOR);
            this._rect.getLayer().draw();
        }

        UINode.prototype.c2pDropImpossible = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(STROKE+1);
            this._rect.setStroke(KO_STROKE_COLOR);
            this._rect.getLayer().draw();
        }

        UINode.prototype.c2pChildRemoved = function (entity) {
            var absPosition = entity.getShape().getAbsolutePosition();
            entity.getShape().remove(); // remove the shape from its group
            this._shape.getLayer().add(entity.getShape()); // add shape to modelLayer
            entity.getShape().setPosition(absPosition); // prevent shape from "jumping" from 0,0 to current pointer position
                                                        // by re-assigning its old absolute position in the new layer
            entity.getShape().fire('dragstart'); // fire a 'dragstart' event again to let the shape follows pointer
            this._shape.getLayer().draw(); // redraw layer

            if (this._ctrl.getParent()) {
                // tell parents to redraw themselves
                this._ctrl.getParent().getUI().getShape().getLayer().draw();
            }
        }

        UINode.prototype.c2pPointerOverShape = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(STROKE+1);
            this._rect.getLayer().draw();
        }

        UINode.prototype.redrawParent = function () {
            if (this._shape && this._shape.getLayer()) {
                this._shape.getLayer().draw();
            }

            if (this._ctrl.getParent()) {
                this._ctrl.getParent().getUI().redrawParent();
            }
        }

        UINode.prototype.c2pWireCreated = function (wire) {
            wire.getCtrl().getOrigin().getUI().getShape().setDraggable(true);

            if (this._mouseUpEvent) {
                this._mouseUpEvent.cancelBubble = true;

                this._mouseUpEvent = null;
            }
        }

        UINode.prototype._draw = function () {
            var width = this.getHeader().getWidth(),
                height = this.getHeader().getHeight();

            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);
                this._shape.setOffset(-offset.x, -offset.y);

                width = parent.getWidth() - UIEntity.CHILD_X_PADDING;
            }

            if (this._ctrl.hasChildren()) {
                var maxChildrenWidth = 0;
                var childrenHeight = 0;
                var children = this._ctrl.getChildren();
                // find the widest children in this node and compute the whole height
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (entity.getWidth() > maxChildrenWidth) maxChildrenWidth = entity.getWidth();
                    childrenHeight += entity.getHeight() + UIEntity.CHILD_Y_PADDING;
                }

                // resize children if necessary
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (maxChildrenWidth < width) {
                        // parent herited width
                        entity.setWidth(this.getWidth() - UIEntity.CHILD_X_PADDING);
                    } else {
                        // entity width is set to the one of its widest brother
                        width = maxChildrenWidth + UIEntity.CHILD_X_PADDING;
                        entity.setWidth(maxChildrenWidth);
                    }
                }
                // height is always the children's height sum + headerName's height
                height = childrenHeight + this.getHeader().getHeight();
            }

            this._rect.setWidth(width);
            this._rect.setHeight(height);
            this.getHeader().setOffset(- (width/2 - this.getHeader().getWidth()/2), 0);
        }

        UINode.prototype.getWidth = function () {
            return this._rect.getWidth();
        }

        UINode.prototype.getHeight = function () {
            return this._rect.getHeight();
        }

        UINode.prototype.setWidth = function (width) {
            this._rect.setWidth(width);
        }

        UINode.prototype.setHeight = function (height) {
            this._rect.setHeight(height);
        }

        UINode.prototype.getChildOffset = function (child) {
            var children = this._ctrl.getChildren();
            var y_offset = this.getHeader().getHeight();

            for (var i=0; i < children.length; i++) {
                if (child === children[i].getUI()) {
                    return { x: UIEntity.CHILD_X_PADDING/2, y: y_offset };
                } else {
                    y_offset += children[i].getUI().getHeight() + UIEntity.CHILD_Y_PADDING;
                }
            }

            return { x: UIEntity.CHILD_X_PADDING/2, y: y_offset };
        }

        UINode.prototype.getHeader = function () {
            return this._headerName;
        }

        return UINode;
    }
);