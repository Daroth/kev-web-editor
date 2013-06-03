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
        Pooffs.extends(CGroup, CEntity);
        Pooffs.extends(CGroup, AController);

        function CGroup(editor, lib, type) {
            // KGroup.super(type)
            KGroup.prototype.constructor.call(this, editor, lib, type);

            // CEntity.super(editor, type)
            CEntity.prototype.constructor.call(this, editor, lib, type);

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

        return CGroup;
    }
);