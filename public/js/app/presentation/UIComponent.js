define(
    ["presentation/UIEntity"],

    function(UIEntity) {
        var DEFAULT_STROKE_COLOR = "white";

        UIComponent.prototype = new UIEntity();

        function UIComponent(ctrl) {
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
                stroke: DEFAULT_STROKE_COLOR,
                strokeWidth: 1,
                width: that._headerName.getWidth(),
                height: that._headerName.getHeight(),
                fill: 'black',
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

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        UIComponent.prototype._draw = function () {
            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);

                this._shape.setOffset(-offset.x, -offset.y);
            }

            this._headerName.setOffset(- (this.getWidth()/2 - this._headerName.getWidth()/2), 0);
        }

        UIComponent.prototype.getWidth = function () {
            return this._rect.getWidth();
        }

        UIComponent.prototype.getHeight = function () {
            return this._rect.getHeight();
        }

        UIComponent.prototype.setWidth = function (width) {
            this._rect.setWidth(width);
        }

        UIComponent.prototype.setHeight = function (height) {
            this._rect.setHeight(height);
        }

        UIComponent.prototype.getChildOffset = function (child) {
            var children = this._ctrl.getChildren();
            var y_offset = this._headerName.getHeight();

            for (var i=0; i < children.length; i++) {
                if (child === children[i].getUI()) {
                    return { x: UIEntity.CHILD_X_PADDING/2, y: y_offset };
                } else {
                    y_offset += children[i].getUI().getHeight() + UIEntity.CHILD_Y_PADDING;
                }
            }

            return { x: UIEntity.CHILD_X_PADDING/2, y: y_offset };
        }

        UIComponent.prototype.getHeader = function () {
            return this._headerName;
        }

        return UIComponent;
    }
);