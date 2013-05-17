define(
    [
        'presentation/UINestableEntity',
        'util/Pooffs'
    ],

    function(UINestableEntity, Pooffs) {
        // GLOBAL CONSTANTS
        var STROKE = 3,
            DEFAULT_STROKE_COLOR = '#FFF',
            KO_STROKE_COLOR = '#F00',
            OK_STROKE_COLOR = '#0F0';

        UINode.SHAPE_NAME = 'kev_node';

        Pooffs.extends(UINode, UINestableEntity);

        function UINode(ctrl) {
            UINestableEntity.prototype.constructor.call(this, ctrl);

            this._rect.setStroke(DEFAULT_STROKE_COLOR);
            this._rect.setStrokeWidth(STROKE);
            this._rect.setShadowColor('black');
            this._rect.setShadowBlur(10);
            this._rect.setShadowOffset([5, 5]);
            this._rect.setShadowOpacity(0.2);
            this._rect.setCornerRadius(10);
            this._rect.setName(UINode.SHAPE_NAME);

            // this offset is set to improve positioning when entity is dropped
            this._shape.setOffset(this._rect.getWidth()/2, this._rect.getHeight()/2);

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
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

            this._shape.draw();
            this._shape.getLayer().draw();
        }

        // override UINestableEntity.c2pMouseOut()
        UINode.prototype.c2pMouseOut = function () {
            document.body.style.cursor = 'default';
            this._rect.setStroke(DEFAULT_STROKE_COLOR);
            this._rect.getLayer().draw();
        }

        UINode.prototype.c2pDropPossible = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStroke(OK_STROKE_COLOR);
            this._rect.getLayer().draw();

        }

        UINode.prototype.c2pDropImpossible = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStroke(KO_STROKE_COLOR);
            this._rect.getLayer().draw();
        }

        UINode.prototype.c2pChildRemoved = function (entity) {
            if (this._ctrl.getParent()) {
                // tell parents to redraw themselves
                this._ctrl.getParent().getUI().redrawParent();
            }
        }

        UINode.prototype.c2pChildDragStarted = function (entity) {
            var shape = entity.getShape();
            var absPosition = shape.getAbsolutePosition();
            shape.remove(); // remove the shape from its group
            this._shape.getLayer().add(shape);  // add shape to modelLayer
            shape.setPosition(absPosition);     // prevent shape from "jumping" from 0,0 to current pointer position
                                                // by re-assigning its old absolute position in the new layer
            shape.setZIndex(0);                 // we wont go through the 'classic' dragstart handler so ZIndex wont
                                                // be set unless we do it here
            shape.fire('dragstart.fake');       // fire a fake 'dragstart' to let the shape follow the pointer (mouse)
                                                // by doing so, the previous dragstart handler wont be triggered
            this._shape.getLayer().draw();      // redraw layer
        }

        /**
         * override UINestableEntity.getPosition()
         *
         * @param origin {optional} when this is set it means that the getPosition has been
         * asked for wire displaying purposes and this origin param is the origin point of
         * the wire (= group's origin though)
         * @returns {{x: number, y: number}} wire plug point
         */
        UINode.prototype.getPosition = function (origin) {
            var pos = this._shape.getAbsolutePosition(),
                off = this._shape.getOffset(),
                width = this._rect.getWidth(),
                scale = this._shape.getStage().getScale(),
                pos = {x: pos.x / scale.x, y: pos.y / scale.y};

            if (origin && origin.x > pos.x - off.x + width/2 + 10) {
                // if origin point is on the right, then give the upper right corner for node wire's plug
                return {
                    x: pos.x - off.x + width - 10,
                    y: pos.y - off.y + 10
                };
            }

            // default is the upper left corner for node wire's plug
            return {
                x: pos.x - off.x + 10,
                y: pos.y - off.y + 10
            };
        }

        UINode.prototype.c2pWireCreated = function (wire) {
            wire.getCtrl().getOrigin().getUI().getShape().setDraggable(true);

            if (this._mouseUpEvent) {
                //this._mouseUpEvent.cancelBubble = true;
                this._mouseUpEvent = null;
            }
        }

        // Override UINestableEntity._draw()
        UINode.prototype._draw = function () {
            var width = this.getHeader().getWidth(),
                height = this.getHeader().getHeight(),
                pos = this._rect.getAbsolutePosition(),
                pointer = this._shape.getStage().getPointerPosition() || this._shape.getStage().getMousePosition(),
                draggedEntity = this._ctrl.getEditor().getDraggedEntity(),
                wireCreation = this._ctrl.getEditor().getCurrentWire();

            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);
                this._shape.setOffset(-offset.x, -offset.y);

                width = parent.getWidth() - UINestableEntity.CHILD_X_PADDING;
            }

            if (this._ctrl.hasChildren()) {
                var maxChildrenWidth = 0;
                var childrenHeight = 0;
                var children = this._ctrl.getChildren();
                // find the widest children in this node, plus compute the whole height
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (entity.getWidth() > maxChildrenWidth) maxChildrenWidth = entity.getWidth();
                    childrenHeight += entity.getHeight() + UINestableEntity.CHILD_Y_PADDING;
                }

                // resize children if necessary
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (maxChildrenWidth < (width - UINestableEntity.CHILD_X_PADDING)) {
                        // parent herited width
                        entity.setWidth(this.getWidth() - UINestableEntity.CHILD_X_PADDING);
                    } else {
                        // entity width is set to the one of its widest brother
                        width = maxChildrenWidth + UINestableEntity.CHILD_X_PADDING;
                        entity.setWidth(maxChildrenWidth);
                    }
                }
                // height is the children's height sum + header height
                height = childrenHeight + this.getHeader().getHeight();
            }

            this._rect.setWidth(width);
            this._rect.setHeight(height);
            this.getHeader().setOffset(- (width/2 - this.getHeader().getWidth()/2), 0);

            if (((draggedEntity && draggedEntity != this._ctrl) || wireCreation) && pos && pointer &&
                pos.x <= pointer.x && pointer.x <= pos.x + this._rect.getWidth() &&
                pos.y <= pointer.y && pointer.y <= pos.y + this._rect.getHeight()) {
                this._rect.setStroke(OK_STROKE_COLOR);
            } else {
                this._rect.setStroke(DEFAULT_STROKE_COLOR);
            }
        }

        return UINode;
    }
);