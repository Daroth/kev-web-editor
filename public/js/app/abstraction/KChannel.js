define(
    [
        'abstraction/KEntity',
        'util/Pooffs'
    ],

    function(KEntity, Pooffs) {
        var COUNT = 0;

        KChannel.ENTITY_TYPE = 'ChannelType';

        Pooffs.extends(KChannel, KEntity);

        function KChannel(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);

            this._name = 'chan' + (COUNT++);
        }

        KChannel.prototype.getEntityType = function () {
            return KChannel.ENTITY_TYPE;
        }

        return KChannel;
    }
);