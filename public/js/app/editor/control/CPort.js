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

        function CPort(name) {
            KPort.prototype.constructor.call(this, name);
        }

        CPort.prototype.p2cMouseDown = function () {
            var wire = this.createWire();

            // tell editor that we have started a new wire task
            this.getComponent().getEditor().startWireCreationTask(wire);

            // give the ui the newly created wire's UI
            this._ui.c2pWireCreationStarted(wire.getUI());
        }

        CPort.prototype.p2cMouseUp = function () {
            var wire = this.getComponent().getEditor().getCurrentWire();
            if (wire) {
                if (this.isConnectable(wire)) {
                    // wire is connectable with this entity
                    // show user a list of available channels
                    var typeDefs = this.getComponent().getEditor().getModel().getTypeDefinitions();
                    for (var i=0; i < typeDefs.size(); i++) {
                        // TODO
//                        if (typeDefs.metaClassName() == "org.kevoree.ChannelType") {
//
//                        }
                    }
                    this._ui.c2pWireCreationPossible(wire.getUI());

                } else {
                    // it is impossible to connect this wire to this target
                    // TODO
                }

            } else {
                // the user as just released the mouse over this port
                // TODO
            }
        }

        CPort.prototype.isConnectable = function (wire) {
            return false;
        }

        return CPort;
    }
);