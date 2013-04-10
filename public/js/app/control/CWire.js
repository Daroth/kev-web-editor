define(
    [
        'app/abstraction/KWire',
        'app/presentation/UIWire',
        'app/control/AController',
        'app/util/Pooffs',
        'app/util/Observable'
    ],

    function(KWire, UIWire, AController, Pooffs, Observable) {

        Pooffs.extends(CWire, KWire);
        Pooffs.extends(CWire, Observable);
        Pooffs.extends(CWire, AController);

        function CWire(layer) {
            // KWire.super()
            KWire.prototype.constructor.call(this);
            // Observable.super()
            Observable.prototype.constructor.call(this);

            // instantiate ui
            this._ui = new UIWire(this, layer);
        }

        // Override KWire.setOrigin(KEntity)
        CWire.prototype.setOrigin = function(entity) {
            KWire.prototype.setOrigin.call(this, entity);
            this._ui.setOrigin(entity.getUI());
        }

        // Override KWire.setTarget(KEntity)
        CWire.prototype.setTarget = function(entity) {
            KWire.prototype.setTarget.call(this, entity);
            this._ui.setTarget(entity.getUI());
        }

        return CWire;
    }
);