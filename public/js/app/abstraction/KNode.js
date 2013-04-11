define(
    [
        'app/abstraction/KEntity',
        'app/abstraction/KComponent',
        'app/util/Pooffs'
    ],

    function(KEntity, KComponent, Pooffs) {

        KNode.ENTITY_TYPE = 'node';

        Pooffs.extends(KNode, KEntity);

        function KNode(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);

            this._children = new Array();
        }

        KNode.prototype.getEntityType = function () {
            return KNode.ENTITY_TYPE;
        }

        KNode.prototype.addChild = function (entity) {
            if (this.isValidChildEntity(entity)) {
                var index = this._children.indexOf(entity);
                if (index == -1) { // do not duplicate instances inside array
                    this._children.push(entity);
                }
                return true;
            } else {
                return false;
            }
        }

        KNode.prototype.getChildren = function () {
            return this._children;
        }

        KNode.prototype.removeChild = function (entity) {
            var index = this._children.indexOf(entity);
            this._children.splice(index, 1);
        }

        KNode.prototype.isValidChildEntity = function (entity) {
            return (entity.getEntityType() == KNode.ENTITY_TYPE
                || entity.getEntityType() == KComponent.ENTITY_TYPE);
        }

        return KNode;
    }
);