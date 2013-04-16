define(
    [
        'abstraction/KComponent',
        'presentation/UIComponent',
        'control/AController',
        'control/CEntity',
        'util/Pooffs'
    ],

    function(KComponent, UIComponent, AController, CEntity, Pooffs) {

        Pooffs.extends(CComponent, KComponent);
        Pooffs.extends(CComponent, AController);
        Pooffs.extends(CComponent, CEntity);

        function CComponent(editor, type) {
            // super(type)
            KComponent.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIComponent(this);
        }

        return CComponent;
    }
);