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

            this._shape.getLayer().draw();
        }

        // override UINestableEntity.c2pMouseOut()
        UINode.prototype.c2pMouseOut = function () {
            document.body.style.cursor = 'default';
            this._rect.setStrokeWidth(STROKE);
            this._rect.setStroke(DEFAULT_STROKE_COLOR);
            this._rect.getLayer().draw();
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

        // override UINestableEntity.c2pMouseOver()
        UINode.prototype.c2pMouseOver = function () {
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

        // Override UINestableEntity._draw()
        UINode.prototype._draw = function () {
            var width = this.getHeader().getWidth(),
                height = this.getHeader().getHeight();

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
                // find the widest children in this node and compute the whole height
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (entity.getWidth() > maxChildrenWidth) maxChildrenWidth = entity.getWidth();
                    childrenHeight += entity.getHeight() + UINestableEntity.CHILD_Y_PADDING;
                }

                // resize children if necessary
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (maxChildrenWidth < width) {
                        // parent herited width
                        entity.setWidth(this.getWidth() - UINestableEntity.CHILD_X_PADDING);
                    } else {
                        // entity width is set to the one of its widest brother
                        width = maxChildrenWidth + UINestableEntity.CHILD_X_PADDING;
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

        return UINode;
    }
);