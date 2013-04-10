define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KComponent.ENTITY_TYPE = 'component';

        KComponent.prototype = new KEntity();

        /**
         *
         * @param type
         * @constructor
         */
        function KComponent(type) {
            KEntity.prototype.constructor.call(this, type);
        }

        return KComponent;
    }
);