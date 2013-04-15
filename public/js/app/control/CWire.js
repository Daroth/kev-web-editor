define(
    [
        'app/abstraction/KWire',
        'app/presentation/UIWire',
        'app/control/AController',
        'app/util/Pooffs'
    ],

    function(KWire, UIWire, AController, Pooffs) {

        Pooffs.extends(CWire, KWire);
        Pooffs.extends(CWire, AController);

        function CWire() {
            // KWire.super()
            KWire.prototype.constructor.call(this);

            // instantiate ui
            this._ui = new UIWire(this);
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

        // Override KWire.disconnect()
        CWire.prototype.disconnect = function () {
            KWire.prototype.disconnect.call(this);
            this._ui.remove();
        }

        return CWire;
    }
);