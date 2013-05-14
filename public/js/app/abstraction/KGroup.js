define(
    [
        'abstraction/KEntity',
        'kevoree',
        'util/Pooffs'
    ],

    function(KEntity, Kevoree, Pooffs) {
        var COUNT = 0;

        KGroup.ENTITY_TYPE = 'GroupType';

        Pooffs.extends(KGroup, KEntity);

        function KGroup(editor, lib, type) {
            KEntity.prototype.constructor.call(this, editor, lib, type);

            this._name = "group" + (COUNT++);
            var factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
            this._model = factory.createGroup();
            this._model.setName(this._name);
        }

        KGroup.prototype.getEntityType = function () {
            return KGroup.ENTITY_TYPE;
        }

        return KGroup;
    }
);