define(
    [
        'abstraction/KInputPort',
        'control/CPort',
        'presentation/UIInputPort',
        'util/Pooffs'
    ],

    function (KInputPort, CPort, UIInputPort, Pooffs) {

        Pooffs.extends(CInputPort, CPort);
        Pooffs.extends(CInputPort, KInputPort);

        function CInputPort (name) {
            CPort.prototype.constructor.call(this, name);

            // instantiate ui
            this._ui = new UIInputPort(this);
        }

        return CInputPort;
    }
);