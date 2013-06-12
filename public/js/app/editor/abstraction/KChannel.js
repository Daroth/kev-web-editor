define(
    [
        'abstraction/KEntity',
        'util/Pooffs'
    ],

    function(KEntity, Pooffs) {
        var COUNT = 0;

        KChannel.ENTITY_TYPE = 'ChannelType';

        Pooffs.extends(KChannel, KEntity);

        function KChannel(editor, lib, type) {
            KEntity.prototype.constructor.call(this, editor, lib, type);

            this._name = 'chan' + (COUNT++);
        }

        KChannel.prototype.getEntityType = function () {
            return KChannel.ENTITY_TYPE;
        }

        KChannel.prototype.accept = function (visitor) {
            visitor.visitChannel(this);
        }

        return KChannel;
    }
);