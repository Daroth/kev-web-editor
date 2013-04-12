define(
    ['app/abstraction/KEntity'],

    function(KEntity) {

        KComponent.ENTITY_TYPE = 'component';

        KComponent.prototype = new KEntity();

        function KComponent(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);

            this._parent = null;
        }

        KComponent.prototype.getEntityType = function () {
            return KComponent.ENTITY_TYPE;
        }

        KComponent.prototype.getParent = function () {
            return this._parent;
        }

        KComponent.prototype.setParent = function (node) {
            this._parent = node;
        }

        KComponent.prototype.hasChildren = function () {
            return false;
        }

        KComponent.prototype.getChildren = function () {
            return [];
        }

        return KComponent;
    }
);