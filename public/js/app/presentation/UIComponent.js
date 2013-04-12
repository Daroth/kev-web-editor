define(
    ["app/presentation/UIEntity"],

    function(UIEntity) {
        UIComponent.prototype = new UIEntity();

        function UIComponent(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

            this._shape = new Kinetic.Text({
                x: 100,
                y: 100,
                text: "TODO",
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        UIComponent.prototype.getWidth = function () {
            return this._shape.getWidth();
        }

        UIComponent.prototype.getHeight = function () {
            return this._shape.getHeight();
        }

        UIComponent.prototype.setWidth = function (width) {
            this._shape.setWidth(width);
        }

        UIComponent.prototype.setHeight = function (height) {
            this._shape.setHeight(height);
        }

        return UIComponent;
    }
);