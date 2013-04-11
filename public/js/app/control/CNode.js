define(
    [
        'app/abstraction/KNode',
        'app/abstraction/KGroup',
        'app/presentation/UINode',
        'app/control/AController',
        'app/control/CEntity',
        'app/util/Pooffs'
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
                }
            } else {
                var draggedEntity = this.getEditor().getDraggedEntity();
                if (draggedEntity) {
                    // user is over the shape and he drops an entity
                    if (this.isValidChildEntity(draggedEntity)) {
                        // this entity is valid and can be added to this node
                        this.getEditor().consumeDraggedEntity(); // I'm in charge of adding this to the model
                        this.addChild(draggedEntity);
                    } else {
                        // this entity is not valid and can't be added to this node
                        console.log("this is not possible mate, I cannot add a "+draggedEntity.getEntityType()+" to a Node sorry");
                        return;
                    }

                } else {
                    // user is just overing the shape
                    this._ui.c2pPointerOverShape();
                }
            }
        }

        CNode.prototype.p2cDragMove = function () {
            var wires = this.getWires();
            if (wires.length > 0) {
                // there is plugged wires
                for (var i=0; i<wires.length; i++) {
                    wires[i].setTarget(this);
                }
            }
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
            } else {
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
                console.log("SUCCESS");
                this._ui.c2pAddChild(entity.getUI());
            } else {
                console.log("fuck me");
                // error, 'entity' is not a KNode or a KComponent
                // TODO
            }
        }

        return CNode;
    }
);