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

        KGroup.prototype.addInstanceToModel = function (factory) {
            var model = this._editor.getModel(),
                instance = factory.createGroup();

            instance.setName(this._name);
            instance.setTypeDefinition(model.findTypeDefinitionsByID(this._type));

            if (this._wires.length > 0) {
                for (var i=0; i < this._wires.length; i++)
                    this.addBindingInstanceToModel(this._wires[i].getTarget());
            }

            model.addGroups(instance);
        }

        KGroup.prototype.removeInstanceFromModel = function () {
            var model = this._editor.getModel(),
                grp = model.findGroupsByID(this._name);
            model.removeGroups(grp);
        }

        KGroup.prototype.addBindingInstanceToModel = function (target) {
            var model = this._editor.getModel(),
                node = model.findNodesByID(target.getName()),
                grp = model.findGroupsByID(this._name);
            if (node && grp) grp.addSubNodes(node);
        }

        return KGroup;
    }
);