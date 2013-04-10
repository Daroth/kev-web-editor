define(
    [
        'app/abstraction/KComponent',
        'app/presentation/UIComponent',
        'app/control/AController',
        'app/util/Pooffs'
    ],

    function(KComponent, UIComponent, AController, Pooffs) {

        Pooffs.extends(CComponent, KComponent);
        Pooffs.extends(CComponent, AController);

        function CComponent(type) {
            // super(type)
            KComponent.prototype.constructor.call(this, type);

            // instantiate UI
            this._ui = new UIComponent(this);
        }

        return CComponent;
    }
);