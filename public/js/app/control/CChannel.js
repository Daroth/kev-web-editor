define(
    [
        'app/abstraction/KChannel',
        'app/presentation/UIChannel',
        'app/control/AController',
        'app/util/Pooffs'
    ],

    function(KChannel, UIChannel, AController, Pooffs) {
        Pooffs.extends(CChannel, KChannel);
        Pooffs.extends(CChannel, AController);

        function CChannel(type) {
            // KChannel.super(type)
            KChannel.prototype.constructor.call(this, type);

            // instantiate UI
            this._ui = new UIChannel(this);
        }

        return CChannel;
    }
);