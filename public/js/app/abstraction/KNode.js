define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KNode.ENTITY_TYPE = 'node';

        KNode.prototype = new KEntity();

        /**
         *
         * @param type
         * @constructor
         */
        function KNode(type) {
            KEntity.prototype.constructor.call(this, type);
        }

        return KNode;
    }
);