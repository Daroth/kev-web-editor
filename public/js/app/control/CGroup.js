define(
    [
        'app/abstraction/KGroup',
        'app/presentation/UIGroup',
        'app/control/AController',
        'app/control/CEntity',
        'app/util/Pooffs'
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

        return CGroup;
    }
);