define(
    [
        'abstraction/KPort',
        'control/AController',
        'presentation/UIPort',
        'util/Pooffs'
    ],

    function (KPort, AController, UIPort, Pooffs) {

        Pooffs.extends(CPort, KPort);
        Pooffs.extends(CPort, AController);

        function CPort(/* CComponent */ component) {
            KPort.prototype.constructor.call(this, component);
        }

        CPort.prototype.p2cMouseDown = function () {
            var wire = this.createWire();

            // tell editor that we have started a new wire task
            this.getComponent().getEditor().startWireCreationTask(wire);

            // give the ui the newly created wire's UI
            this._ui.c2pWireCreationStarted(wire.getUI());
        }

        return CPort;
    }
);