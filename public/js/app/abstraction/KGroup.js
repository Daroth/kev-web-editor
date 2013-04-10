define(
    ['app/abstraction/KEntity'],

    function(KEntity) {
        KGroup.ENTITY_TYPE = 'group';

        KGroup.prototype = new KEntity();

        function KGroup(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);
        }

        return KGroup;
    }
);