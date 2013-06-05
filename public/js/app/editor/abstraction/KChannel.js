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

        KChannel.prototype.addInstanceToModel = function (factory) {
            var model = this._editor.getModel(),
                instance = factory.createChannel();

            instance.setName(this._name);
            instance.setTypeDefinition(model.findTypeDefinitionsByID(this._type));

            model.addHubs(instance);
        }

        KChannel.prototype.removeInstanceFromModel = function () {
            var model = this._editor.getModel(),
                hub = model.findHubsByID(this._name);
            model.removeHubs(hub);
        }

        return KChannel;
    }
);