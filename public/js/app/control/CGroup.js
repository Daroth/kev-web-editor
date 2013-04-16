define(
    [
        'abstraction/KGroup',
        'presentation/UIGroup',
        'control/AController',
        'control/CEntity',
        'util/Pooffs'
    ],

    function(KGroup, UIGroup, AController, CEntity, Pooffs) {

        Pooffs.extends(CGroup, KGroup);
        Pooffs.extends(CGroup, AController);
        Pooffs.extends(CGroup, CEntity);

        function CGroup(editor, type) {
            // super(type)
            KGroup.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIGroup(this);
        }

        // Override CEntity.p2cMouseDown()
        CGroup.prototype.p2cMouseDown = function (position) {
            // user starts the creation of a wire
            var wire = this.createWire();

            // tell editor that we have started a new wire task
            this.getEditor().startWireCreationTask(wire);

            // give the ui the newly created wire's UI
            this._ui.c2pWireCreationStarted(wire.getUI());
        }

        CGroup.prototype.p2cDragMove = function () {
            var wires = this.getWires();
            if (wires.length > 0) {
                // there is plugged wires
                for (var i=0; i<wires.length; i++) {
                    wires[i].setOrigin(this);
                }
            }
        }

        return CGroup;
    }
);