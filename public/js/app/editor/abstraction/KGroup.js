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
        }

        KGroup.prototype.getEntityType = function () {
            return KGroup.ENTITY_TYPE;
        }

        KGroup.prototype.addBindingInstanceToModel = function (target) {
            var model = this._editor.getModel(),
                node = model.findNodesByID(target.getName()),
                grp = model.findGroupsByID(this._name);
            if (node && grp) grp.addSubNodes(node);
        }

        KGroup.prototype.accept = function (visitor) {
            visitor.visitGroup(this);
        }

        return KGroup;
    }
);