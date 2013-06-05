define(
    [
        'abstraction/KEntity',
        'abstraction/KComponent',
        'util/Pooffs'
    ],

    function(KEntity, KComponent, Pooffs) {
        var COUNT = 0;

        KNode.ENTITY_TYPE = 'NodeType';

        Pooffs.extends(KNode, KEntity);

        function KNode(editor, lib, type) {
            KEntity.prototype.constructor.call(this, editor, lib, type);

            this._parent = null;
            this._children = new Array();
            this._name = 'node'+ COUNT++;
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
                    this.getEditor().addNestableEntity(entity);
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
                // update typeCounter
                this.getEditor().removeNestableEntity(entity);
                entity.setParent(null); // TODO changethat; this is ugly, cause if you add before removing, you got a null on parent
            }
        }

        KNode.prototype.isValidChildEntity = function (entity) {
            return ((entity.getEntityType() == KNode.ENTITY_TYPE
                || entity.getEntityType() == KComponent.ENTITY_TYPE)
                && this !== entity);
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

        // Override KEntity.remove()
        KNode.prototype.remove = function () {
            // tell my children to kill themselves x.x
            var children = this._children.slice(0);
            for (var i = 0; i < children.length; i++) {
                children[i].remove();
            }

            this._children = []; // reset my children :'(

            // tell my parent that I'm gone *sob*
            if (this._parent) {
                this._parent.removeChild(this);
            }

            KEntity.prototype.remove.call(this);
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

        KNode.prototype.addInstanceToModel = function (factory) {
            var model = this._editor.getModel(),
                instance = factory.createContainerNode();

            instance.setName(this._name);
            instance.setTypeDefinition(model.findTypeDefinitionsByID(this._type));

            model.addNodes(instance);

            if (this._parent) {
                var node = model.findNodesByID(this._parent.getName());
                node.addHosts(instance);
            }

            if (this._children.length > 0) {
                for (var i=0; i< this._children.length; i++) {
                    this._children[i].addInstanceToModel(factory);
                }
            }

            if (this._wires.length > 0) {
                for (var i=0; i < this._wires.length; i++) {
                    this._wires[i].getOrigin().addBindingInstanceToModel(this);
                }
            }
        }

        KNode.prototype.removeInstanceFromModel = function () {
            var model = this._editor.getModel(),
                node = model.findNodesByID(this._name);
            if (node) model.removeNodes(node);
        }

        return KNode;
    }
);