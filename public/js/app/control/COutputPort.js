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

        function COutputPort () {
            CPort.prototype.constructor.call(this);
            KOutputPort.prototype.constructor.call(this);

            // instantiate ui
            this._ui = new UIOutputPort(this);
        }

        return COutputPort;
    }
);