define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KComponent.ENTITY_TYPE = 'component';

        KComponent.prototype = new KEntity();

        function KComponent(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        return KComponent;
    }
);