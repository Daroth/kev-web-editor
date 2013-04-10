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

            this.setPopup('<p>'+ctrl.getType()+' TODO</p>');
        }

        return UIComponent;
    }
);