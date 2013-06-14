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

        KChannel.prototype.accept = function (visitor) {
            visitor.visitChannel(this);
        }

        // Overriding addWire from KEntity in order to add the instance to the model
        // cause if the wire has been added here, it means that it is plugged from one hand
        // to another (port -> chan)
        KChannel.prototype.addWire = function (wire) {
            if (this._wires.indexOf(wire) == -1) { // do not duplicate wire in array
                this._wires.push(wire);
                this.getEditor().addWire(wire);
            }
        }

        return KChannel;
    }
);