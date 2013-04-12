define(
    ["app/presentation/UIEntity"],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3,
            DEFAULT_STROKE_COLOR = '#FFF',
            KO_STROKE_COLOR = '#F00',
            OK_STROKE_COLOR = '#0F0',
            CHILD_Y_PADDING = 15,
            CHILD_X_PADDING = 50;

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
            UIEntity.prototype.ready.call(this);
            var that = this;

            this._shape.off('mouseup');
            this._shape.on('mouseup', function(e) {
                if (that._ctrl.getParent()) e.cancelBubble = true;

                that._ctrl.p2cMouseUp(this.getStage().getPointerPosition());
            });

            this._shape.off('dragstart');
            this._shape.on('dragstart', function(e) {
                // prevent parent from getting the event too
                console.log(that._ctrl.getParent());
                if (that._ctrl.getParent()) e.cancelBubble = true;

                that._ctrl.p2cDragStart();
            });

            this._shape.off('dragend');
            this._shape.on('dragend', function(e) {
                // prevent parent from getting the event too
                if (that._ctrl.getParent()) e.cancelBubble = true;

                that._ctrl.p2cDragEnd();
            });
        }

        UINode.prototype.getPosition = function () {
            return {
                x: this._shape.getAbsolutePosition().x + this.getWidth()/2,
                y: this._shape.getAbsolutePosition().y + this.getHeight()/4
            };
        }

        UINode.prototype.c2pAddChild = function (entity) {
            // reset entity old position and offset to fit in its new container
            entity.getShape().setPosition(0, 0);
            entity.getShape().setOffset(0, 0);
            this._shape.add(entity.getShape());
            entity.ready();

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
            console.log("graphically removed child", entity);

            this._shape.getLayer().draw();

            if (this._ctrl.getParent()) {
                this._ctrl.getParent().getUI().getShape().getLayer().draw();
            }
        }

        UINode.prototype.c2pPointerOverShape = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(STROKE+1);
            this._rect.getLayer().draw();
        }

        UINode.prototype.redrawParent = function () {
            this._shape.getLayer().draw();

            if (this._ctrl.getParent()) {
                this._ctrl.getParent().getUI().redrawParent();
            }
        }

        UINode.prototype._draw = function () {
            if (this._ctrl.hasChildren()) {
                var maxChildrenWidth = 0;
                var childrenHeight = 0;
                var children = this._ctrl.getChildren();
                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (entity.getWidth() > maxChildrenWidth) maxChildrenWidth = entity.getWidth();
                    childrenHeight += entity.getHeight() + CHILD_Y_PADDING;
                }

                for (var i=0; i < children.length; i++) {
                    var entity = children[i].getUI();
                    if (entity.getWidth() != maxChildrenWidth) {
                        entity.setWidth(maxChildrenWidth);
                        entity._headerName.move(CHILD_X_PADDING/2, 0);
                    }
                }

                this._rect.setWidth(maxChildrenWidth + CHILD_X_PADDING);
                this._rect.setHeight(childrenHeight + this._headerName.getHeight());

            } else {
                this._rect.setWidth(this._headerName.getWidth());
                this._rect.setHeight(this._headerName.getHeight());
            }

            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);

                this._shape.setOffset(-offset.x, -offset.y);
            }

            this._headerName.setOffset(this.getWidth()/2 - this._headerName/2, 0);
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
            var y_offset = this._headerName.getHeight();

            for (var i=0; i < children.length; i++) {
                if (child === children[i].getUI()) {
                    return { x: CHILD_X_PADDING/2, y: y_offset };
                } else {
                    y_offset += children[i].getUI().getHeight() + CHILD_Y_PADDING;
                }
            }

            return { x: CHILD_X_PADDING/2, y: y_offset };
        }

        return UINode;
    }
);