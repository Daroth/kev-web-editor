define(
    [
        'app/abstraction/KGroup',
        'app/presentation/UIGroup',
        'app/control/AController',
        'app/util/Pooffs'
    ],

    function(KGroup, UIGroup, AController, Pooffs) {

        Pooffs.extends(CGroup, KGroup);
        Pooffs.extends(CGroup, AController);

        function CGroup(type) {
            // super(type)
            KGroup.prototype.constructor.call(this, type);

            // instantiate UI
            this._ui = new UIGroup(this);
        }

        return CGroup;
    }
);