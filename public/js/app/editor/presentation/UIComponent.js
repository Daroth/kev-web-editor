define(
    [
        'presentation/UINestableEntity',
        'util/Pooffs'
    ],

    function(UINestableEntity, Pooffs) {
        var DEFAULT_STROKE_COLOR = "white",
            STROKE = 2;

        UIComponent.PORT_PADDING = 10;

        Pooffs.extends(UIComponent, UINestableEntity);

        function UIComponent(ctrl) {
            UINestableEntity.prototype.constructor.call(this, ctrl);

            this._headerName.setText(
                ctrl.getName()
                + "\n"
                + ctrl.getType()
            );
            this._headerName.setPadding(8);

            this._rect.setAttrs({
                fill: 'black',
                opacity: 1,
                cornerRadius: 10
            });

            this._border.setAttrs({
                strokeWidth: STROKE
            });

            var that = this;

            var inputs = ctrl.getInputs();
            for (var i=0; i < inputs.length; i++) {
                var port = inputs[i].getUI().getShape();
                port.setX(port.getRadius() + UIComponent.PORT_PADDING);
                port.setY(that._rect.getHeight() / 2);
                this._shape.add(port);
            }

            var outputs = ctrl.getOutputs();
            for (var i=0; i < outputs.length; i++) {
                var port = outputs[i].getUI().getShape();
                port.setX(that._rect.getWidth() - port.getRadius() - UIComponent.PORT_PADDING);
                port.setY(that._rect.getHeight() / 2);
                this._shape.add(port);
            }

            this._updateDimensions();

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        UIComponent.prototype._drawHeader = function () {
            this._headerName.setText(
                this._ctrl.getName() +
                "\n" +
                this._ctrl.getType());
        }

        // Override UINestableEntity._draw()
        UIComponent.prototype._draw = function () {
            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);
                this._shape.setOffset(-offset.x, -offset.y);
            } else {
                this._updateDimensions();
            }

            this._rect.setHeight(this._headerName.getHeight());

            var inputs = this._ctrl.getInputs();
            for (var i=0; i < inputs.length; i++) {
                var port = inputs[i].getUI().getShape();
                port.setPosition(port.getRadius() + 10, this._rect.getHeight() / 2);
            }

            var outputs = this._ctrl.getOutputs();
            for (var i=0; i < outputs.length; i++) {
                var port = outputs[i].getUI().getShape();
                port.setPosition(this._rect.getWidth() - port.getRadius() - 10, this._rect.getHeight() / 2);
            }

            this._headerName.setOffset(- (this.getWidth()/2 - this._headerName.getWidth()/2), 0);
        }

        // Override UINestableEntity.c2pMouseOut()
        UIComponent.prototype.c2pMouseOut = function () {
            document.body.style.cursor = 'default';
            this._border.setAttrs({
                strokeWidth: STROKE,
                stroke: 'white'
            });
            this._shape.getLayer().draw();
        }

        UIComponent.prototype._updateDimensions = function () {
            var portSpace = 0;
            if (this._ctrl.getInputs().length > 0 || this._ctrl.getOutputs().length > 0) {
                portSpace = (this._ctrl.getInputs()[0].getUI().getWidth()*2
                    || this._ctrl.getOutputs()[0].getUI().getWidth()*2) + UIComponent.PORT_PADDING;
            }

            this._rect.setWidth(this._headerName.getWidth()+this._headerName.getPadding() + portSpace);
            this._rect.setHeight(this._headerName.getHeight()+this._headerName.getPadding());
        }

        return UIComponent;
    }
);