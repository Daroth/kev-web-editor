define(
    [
        'abstraction/dictionary/KValue',
        'control/AController',
        'presentation/dictionary/UIValue',
        'util/Pooffs'
    ],
    function (KValue, AController, UIValue, Pooffs) {

        Pooffs.extends(CValue, AController);
        Pooffs.extends(CValue, KValue);

        function CValue(attr) {
            KValue.prototype.constructor.call(this, attr);

            this._ui = new UIValue(this);
        }

        return CValue;
    }
);