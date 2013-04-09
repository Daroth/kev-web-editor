define(
    [
        'app/abstraction/KChannel',
        'app/presentation/UIChannel'
    ],

    function(KChannel, UIChannel) {
        CChannel.prototype = new KChannel();
        CChannel.prototype.constructor = CChannel;

        function CChannel(type, handler) {
            // super(type)
            KChannel.prototype.constructor.call(this, type);

            // instantiate UI
            this._handler = handler;
            this._ui = new UIChannel(this);
        }

        CChannel.prototype.getUI = function() {
            return this._ui;
        }

        CChannel.prototype.getHandler = function() {
            return this._handler;
        }

        return CChannel;
    }
);