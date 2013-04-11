define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KNode.ENTITY_TYPE = 'node';

        KNode.prototype = new KEntity();

        function KNode(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        KNode.prototype.getEntityType = function () {
            return KNode.ENTITY_TYPE;
        }

        return KNode;
    }
);