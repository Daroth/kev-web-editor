define(
    [
        'app/abstraction/KChannel',
        'app/presentation/UIChannel',
        'app/control/AController',
        'app/control/CEntity',
        'app/util/Pooffs'
    ],

    function(KChannel, UIChannel, AController, CEntity, Pooffs) {
        Pooffs.extends(CChannel, KChannel);
        Pooffs.extends(CChannel, AController);
        Pooffs.extends(CChannel, CEntity);

        function CChannel(editor, type) {
            // KChannel.super(type)
            KChannel.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIChannel(this);
        }

        return CChannel;
    }
);