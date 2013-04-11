define(
    ["app/presentation/UIEntity"],

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
                text: ctrl.getType(),
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            this._width = this._headerName.getWidth();

            this._rect = new Kinetic.Rect({
                stroke: DEFAULT_STROKE_COLOR,
                strokeWidth: STROKE,
                width: this._width,
                height: this._headerName.getHeight(),
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                cornerRadius: 10
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

            this._shape.on('dragmove', function() {
                that._ctrl.p2cDragMove();
            });

            this.setPopup('<p>'+ctrl.getType()+' TODO</p>');
        }

        UINode.prototype.ready = function() {
            var that = this;

            this._shape.on('mouseup', function() {
                that._ctrl.p2cMouseUp(this.getStage().getPointerPosition());
            });
        }

        UINode.prototype.getPosition = function () {
            return {
                x: this._shape.getAbsolutePosition().x + this._rect.getWidth()/2,
                y: this._shape.getAbsolutePosition().y + this._rect.getHeight()/4
            };
        }

        UINode.prototype.c2pAddChild = function (entity) {
            var entityShape = entity.getShape();
            console.log(entityShape);

            var currentW = this._rect.getWidth();
            var currentH = this._rect.getHeight();

            if (this._ctrl.getChildren().length > 0) {
                this._rect.setWidth(this._width + 50);
            } else {
                this._rect.setWidth(this._width);
            }
            this._rect.setHeight(currentH + entity._rect.getHeight() + 50);

            this._headerName.setOffset(-25, 0);
            

            entityShape.setPosition(25, currentH + 25);
            this._shape.add(entityShape);
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

        UINode.prototype.c2pPointerOverShape = function () {
            document.body.style.cursor = 'pointer';
            this._rect.setStrokeWidth(STROKE+1);
            this._rect.getLayer().draw();
        }

        return UINode;
    }
);