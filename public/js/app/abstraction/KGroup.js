define(
    ['app/abstraction/KEntity'],

    function(KEntity) {
        KGroup.ENTITY_TYPE = 'group';

        KGroup.prototype = new KEntity();

        /**
         *
         * @param type
         * @constructor
         */
        function KGroup(type) {
            KEntity.prototype.constructor.call(this, type);
        }

        return KGroup;
    }
);