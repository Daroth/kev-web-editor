define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KNode.ENTITY_TYPE = 'node';

        KNode.prototype = new KEntity();

        /**
         *
         * @param editor
         * @param type
         * @constructor
         */
        function KNode(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        return KNode;
    }
);