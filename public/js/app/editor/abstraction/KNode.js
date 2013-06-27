define(
    [
        'abstraction/KEntity',
        'abstraction/KComponent',
        'abstraction/KNodeNetwork',
        'util/Pooffs'
    ],

    function(KEntity, KComponent, KNodeNetwork, Pooffs) {
        var COUNT = 0;

        KNode.ENTITY_TYPE = 'NodeType';

        Pooffs.extends(KNode, KEntity);

        function KNode(editor, type) {
            KEntity.prototype.constructor.call(this, editor, type);

            this._parent = null;
            this._children = new Array();
            this._name = 'node'+ COUNT++;
            this._nets = [];
            this._nets.push(new KNodeNetwork(this, this)); // default
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

        KNode.prototype.getEntity = function (name) {
            for (var i=0; i < this._children.length; i++) {
                if (this._children[i].getName() == name) {
                    return this._children[i];
                } else {
                    if (this._children[i].getEntity && typeof(this._children[i].getEntity) == "function") {
                        var entity = this._children[i].getEntity(name);
                        if (entity != null) return entity;
                    }
                }
            }
            return null;
        }

        KNode.prototype.hasChild = function (entity) {
            for (var i=0; i < this._children.length; i++) {
                if (this._children[i].getName() == entity.getName()) {
                    return true;
                }
            }
            return false;
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

        // Overriding addWire from KEntity in order to add the instance to the model
        // cause if the wire has been added here, it means that it is plugged from one hand
        // to another (group -> node)
        KNode.prototype.addWire = function (wire) {
            if (this._wires.indexOf(wire) == -1) { // do not duplicate wire in array
                this._wires.push(wire);
                this.getEditor().addWire(wire);
            }
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

        KNode.prototype.addNodeNetwork = function (net) {
            var index = this._nets.indexOf(net);
            if (index == -1) {
                this._nets.push(net);
            }
        }

        KNode.prototype.removeNodeNetwork = function (net) {
            var index = this._nets.indexOf(net);
            if (index != -1) {
                this._nets.splice(index, 1);
            }
        }

        KNode.prototype.getNodeNetworks = function () {
            return this._nets;
        }

        KNode.prototype.accept = function (visitor) {
            visitor.visitNode(this);
        }

        return KNode;
    }
);