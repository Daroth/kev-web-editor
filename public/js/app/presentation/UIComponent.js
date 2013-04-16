define(
    [
        'presentation/UINestableEntity',
        'util/Pooffs'
    ],

    function(UINestableEntity, Pooffs) {
        var DEFAULT_STROKE_COLOR = "white",
            STROKE = 1;

        Pooffs.extends(UIComponent, UINestableEntity);

        function UIComponent(ctrl) {
            UINestableEntity.prototype.constructor.call(this, ctrl);

            this._rect.setFill('black');
            this._rect.setStroke(DEFAULT_STROKE_COLOR);
            this._rect.setStrokeWidth(STROKE);

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        // Override UINestableEntity._draw()
        UIComponent.prototype._draw = function () {
            if (this._ctrl.getParent()) {
                var parent = this._ctrl.getParent().getUI();
                var offset = parent.getChildOffset(this);

                this._shape.setOffset(-offset.x, -offset.y);
            }

            this._headerName.setOffset(- (this.getWidth()/2 - this._headerName.getWidth()/2), 0);
        }

        // override UINestableEntity.c2pMouseOut()
        UIComponent.prototype.c2pMouseOut = function () {
            document.body.style.cursor = 'default';
            this._rect.setStrokeWidth(STROKE);
            this._rect.setStroke(DEFAULT_STROKE_COLOR);
            this._rect.getLayer().draw();
        }

        return UIComponent;
    }
);