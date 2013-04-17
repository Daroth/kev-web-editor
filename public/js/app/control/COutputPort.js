define(
    [
        'abstraction/KOutputPort',
        'control/CPort',
        'presentation/UIOutputPort',
        'util/Pooffs'
    ],

    function (KOutputPort, CPort, UIOutputPort, Pooffs) {

        Pooffs.extends(COutputPort, CPort);
        Pooffs.extends(COutputPort, KOutputPort);

        function COutputPort (component) {
            CPort.prototype.constructor.call(this, component);

            // instantiate ui
            this._ui = new UIOutputPort(this);
        }

        return COutputPort;
    }
);