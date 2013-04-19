define(
    ['abstraction/KEntity'],

    function(KEntity) {
        KGroup.ENTITY_TYPE = 'GroupType';

        KGroup.prototype = new KEntity();

        function KGroup(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        KGroup.prototype.getEntityType = function () {
            return KGroup.ENTITY_TYPE;
        }

        return KGroup;
    }
);