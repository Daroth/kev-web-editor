define(
    [
        'abstraction/KNode',
        'abstraction/KGroup',
        'presentation/UINode',
        'control/AController',
        'control/CNestableEntity',
        'util/Pooffs'
    ],

    function(KNode, KGroup, UINode, AController, CNestableEntity, Pooffs) {

        Pooffs.extends(CNode, KNode);
        Pooffs.extends(CNode, AController);
        Pooffs.extends(CNode, CNestableEntity);

        function CNode(editor, type) {
            // CNestableEntity.super(editor, type)
            CNestableEntity.prototype.constructor.call(this, editor, type);

            // KNode.super(type)
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
                var origin = wire.getOrigin();
                if (typeof (origin.getEntityType) == 'function' && origin.getEntityType() == KGroup.ENTITY_TYPE) {
                    var alreadyConnected = false;
                    for (var i=0; i < origin.getWires().length; i++) {
                        var wire = origin.getWires()[i];
                        if (wire.getTarget() && wire.getTarget() == this) alreadyConnected = true;
                    }
                    if (!alreadyConnected) {
                        // we are good to go
                        wire.setTarget(this);
                        this.addWire(wire);
                        this.getEditor().endWireCreationTask();
                        this._ui.c2pWireCreated(wire.getUI());
                    } else {
                        // connection cannot be made
                        this._ui.c2pDropImpossible();
                        this.getEditor().abortWireCreationTask();
                    }
                }
            } else if (!this._isDragged) {
                var draggedEntity = this.getEditor().getDraggedEntity();
                if (draggedEntity) {
                    // user released its mouse over this node
                    if (this.isValidChildEntity(draggedEntity)) {
                        // this entity is valid and can be added to this node
                        // I'm in charge of adding this to the model, not CEditor
                        this.getEditor().consumeDraggedEntity();
                        // actually add the entity to my children
                        this.addChild(draggedEntity);
                    }

                } else {
                    // user is just overing the shape
                    this._ui.c2pMouseOver();
                }
            }
        }

        // Override CNestableEntity.remove()
        CNode.prototype.remove = function () {
            KNode.prototype.remove.call(this);
            CNestableEntity.prototype.remove.call(this);
            this._ui.redrawParent();
        }

        // Override CNestableEntity.p2cMouseOut()
        CNode.prototype.p2cMouseOut = function () {
            this._ui.c2pMouseOut();
        }

        // Override KNode.removeChild(entity)
        CNode.prototype.removeChild = function (child) {
            KNode.prototype.removeChild.call(this, child);
            this._ui.c2pChildRemoved(child.getUI());
        }

        // Override CNestableEntity.p2cMouseOver()
        CNode.prototype.p2cMouseOver = function () {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                var origin = wire.getOrigin();
                if (typeof (origin.getEntityType) == 'function' && origin.getEntityType() == KGroup.ENTITY_TYPE) {
                    // connection could be made if origin is not already connected to this node
                    var alreadyConnected = false;
                    for (var i=0; i < origin.getWires().length; i++) {
                        var wire = origin.getWires()[i];
                        if (wire.getTarget() && wire.getTarget() == this) alreadyConnected = true;
                    }
                    if (!alreadyConnected) {
                        this._ui.c2pDropPossible();
                    } else {
                        // connection cannot be made
                        this._ui.c2pDropImpossible();
                    }
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
                    this._ui.c2pMouseOver();
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
                // TODO well it is not supposed to happen because the controller is supposed to check those things
            }
        }

        return CNode;
    }
);