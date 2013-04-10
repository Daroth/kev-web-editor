define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KChannel.ENTITY_TYPE = 'channel';

        KChannel.prototype = new KEntity();

        /**
         *
         * @param type
         * @constructor
         */
        function KChannel(type) {
            KEntity.prototype.constructor.call(this, type);
        }

        return KChannel;
    }
);