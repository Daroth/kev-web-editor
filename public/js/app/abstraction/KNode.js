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

            this._parent = null;
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
                    entity.setParent(this);
                }
                return true;
            }
            return false;
        }

        KNode.prototype.getChildren = function () {
            return this._children;
        }

        KNode.prototype.removeChild = function (entity) {
            var index = this._children.indexOf(entity);
            if (index != -1) {
                this._children.splice(index, 1);
                entity.setParent(null);
            }
        }

        KNode.prototype.isValidChildEntity = function (entity) {
            return (entity.getEntityType() == KNode.ENTITY_TYPE
                || entity.getEntityType() == KComponent.ENTITY_TYPE);
        }

        KNode.prototype.setParent = function (entity) {
            this._parent = entity;
        }

        KNode.prototype.getParent = function () {
            return this._parent;
        }

        KNode.prototype.hasChildren = function () {
            return this._children.length > 0;
        }

        /**
         * @returns {number} max depth in the child tree
         */
        KNode.prototype.getMaxChildTreeDepth = function () {
            var maxDepth = 0;
            for (var i=0; i < this._children.length; i++) {
                var depth;
                if (this._children[i].hasChildren()) {
                    depth = this._children[i].getMaxChildTreeDepth() + 1;
                } else {
                    depth = 1;
                }
                if (depth > maxDepth) maxDepth = depth;
            }
            return maxDepth;
        }

        return KNode;
    }
);