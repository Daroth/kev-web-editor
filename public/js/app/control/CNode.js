define(
    [
        'abstraction/KNode',
        'abstraction/KGroup',
        'presentation/UINode',
        'control/AController',
        'control/CEntity',
        'util/Pooffs'
    ],

    function(KNode, KGroup, UINode, AController, CEntity, Pooffs) {

        Pooffs.extends(CNode, KNode);
        Pooffs.extends(CNode, AController);
        Pooffs.extends(CNode, CEntity);

        function CNode(editor, type) {
            // super(type)
            KNode.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UINode(this);
            this._isDragged = false;
        }

        // Override CNode.p2cMouseUp(position)
        CNode.prototype.p2cMouseUp = function (position) {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                if (wire.getOrigin().getEntityType() == KGroup.ENTITY_TYPE) {
                    // we are good to go
                    wire.setTarget(this);
                    this.addWire(wire);
                    this.getEditor().endWireCreationTask(wire);
                    this._ui.c2pWireCreated(wire.getUI());
                }
            } else if (!this._isDragged) {
                var draggedEntity = this.getEditor().getDraggedEntity();
                if (draggedEntity) {
                    // user is over the shape and he drops an entity
                    if (this.isValidChildEntity(draggedEntity)) {
                        // this entity is valid and can be added to this node
                        // I'm in charge of adding this to the model, not CEditor
                        this.getEditor().consumeDraggedEntity();
                        // actually add the entity to my children
                        this.addChild(draggedEntity);
                    } else {
                        // this entity is not valid and can't be added to this node
                        console.log("Can't do that mate: add a "+draggedEntity.getEntityType()+" to a Node. I added it to the model (but not the node)");
                        return;
                    }

                } else {
                    // user is just overing the shape
                    this._ui.c2pPointerOverShape();
                }
            }
        }

        // Override CEntity.remove()
        CNode.prototype.remove = function () {
            KNode.prototype.remove.call(this);
            this._ui.redrawParent();
        }

        CNode.prototype.p2cDragMove = function () {
            // change wires state in order for them to update their display
            var wires = this.getWires();
            if (wires.length > 0) {
                // there is plugged wires
                for (var i=0; i<wires.length; i++) {
                    wires[i].setTarget(this);
                }
            }

            // tell children to do the same
            var children = this.getChildren();
            for (var i=0; i < children.length; i++) {
                children[i].p2cDragMove();
            }
        }

        // Override KNode.removeChild(entity)
        CNode.prototype.removeChild = function (child) {
            KNode.prototype.removeChild.call(this, child);
            this._ui.c2pChildRemoved(child.getUI());
        }

        CNode.prototype.p2cDragStart = function () {
            if (this.getParent()) {
                this.getParent().removeChild(this);
            }
            this._isDragged = true;
            this.getEditor().setDraggedEntity(this);
        }

        CNode.prototype.p2cDragEnd = function () {
            this.getEditor().consumeDraggedEntity();
            this._isDragged = false;
        }

        CNode.prototype.p2cMouseOver = function () {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                if (wire.getOrigin().getEntityType() == KGroup.ENTITY_TYPE) {
                    // connection can be made
                    this._ui.c2pDropPossible();
                } else {
                    // connection cannot be made
                    this._ui.c2pDropImpossible();
                }
            } else if (!this._isDragged) {
                var draggedEntity = this.getEditor().getDraggedEntity();
                if (draggedEntity) {
                    // user is over the shape and he is dragging an entity
                    if (this.isValidChildEntity(draggedEntity)) {
                        this._ui.c2pDropPossible();
                    } else {
                        this._ui.c2pDropImpossible();
                    }

                } else {
                    // user is just overing the shape
                    this._ui.c2pPointerOverShape();
                }
            }
        }

        // Override KNode.addChild(KNode || KComponent)
        CNode.prototype.addChild = function (entity) {
            var success = KNode.prototype.addChild.call(this, entity);
            if (success) {
                // success
                this._ui.c2pAddChild(entity.getUI());
            } else {
                // error, 'entity' is not a KNode or a KComponent
                // or it has already been added to this node children
                // TODO
            }
        }

        return CNode;
    }
);