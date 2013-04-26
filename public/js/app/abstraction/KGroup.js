define(
    [
        'abstraction/KEntity',
        'util/Pooffs'
    ],

    function(KEntity, Pooffs) {
        var COUNT = 0;

        KGroup.ENTITY_TYPE = 'GroupType';

        Pooffs.extends(KGroup, KEntity);

        function KGroup(editor, type) {
            console.log("start KGroup constructor");
            KEntity.prototype.constructor.call(this, editor, type);

            this._name = "group" + (COUNT++);
            console.log("end KGroup constructor");
        }

        KGroup.prototype.getEntityType = function () {
            return KGroup.ENTITY_TYPE;
        }

        return KGroup;
    }
);