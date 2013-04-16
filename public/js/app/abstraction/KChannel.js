define(
    ['abstraction/KEntity'],

    function(KEntity) {

        KChannel.ENTITY_TYPE = 'channel';

        KChannel.prototype = new KEntity();

        function KChannel(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        KChannel.prototype.getEntityType = function () {
            return KChannel.ENTITY_TYPE;
        }

        return KChannel;
    }
);