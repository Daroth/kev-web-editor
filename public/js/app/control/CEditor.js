define(
    [
        'util/Pooffs',
        'abstraction/KEditor',
        'abstraction/KGroup',
        'abstraction/KComponent',
        'abstraction/KChannel',
        'abstraction/KNode',
        'control/AController',
        'presentation/UIEditor',
        'factory/CFactory',
        'util/ModelHelper',
        'require'
    ],

    function (Pooffs, KEditor, KGroup, KComponent, KChannel, KNode, AController, UIEditor, CFactory, ModelHelper, require) {
        Pooffs.extends(CEditor, KEditor);
        Pooffs.extends(CEditor, AController);

        function CEditor(containerID) {
            KEditor.prototype.constructor.call(this); // KEditor.super();

            this._ui = new UIEditor(this, containerID);
            this._currentWire = null;
            this._draggedEntity = null;
            this._modelHelper = new ModelHelper();
            this._libTreeDisplayed = true;
            this._foldedLibTree = false;
        }

        // Override KEditor.addEntity(KEntity)
        CEditor.prototype.addEntity = function (entity) {
            KEditor.prototype.addEntity.call(this, entity); // super.addEntity(type)
            this._ui.c2pEntityAdded(entity.getUI())
        }

        // Override KEditor.removeEntity(KEntity)
        CEditor.prototype.removeEntity = function (entity) {
            KEditor.prototype.removeEntity.call(this, entity); // super.addEntity(type)
            this._ui.c2pEntityRemoved(entity.getUI());
        }

        CEditor.prototype.p2cEntityDropped = function () {
            if (this._draggedEntity && this._draggedEntity.getEntityType() != KComponent.ENTITY_TYPE) {
                // really adding the entity to the editor model
                this.addEntity(this._draggedEntity);

                // forget about the draggedEntity, it has already been added
                this._draggedEntity = null;

            } else if (this._draggedEntity) {
                this._ui.c2pDropImpossible(this._draggedEntity.getUI());
                this._draggedEntity = null;
            }
        }

        CEditor.prototype.p2cEntityDraggedOver = function (libItem, entity_type, env, name) {
            if (!this._draggedEntity) {
                var factory = require('factory/CFactory').getInstance();
                var component = this._modelHelper.getComponent(this.getModel(), env, name);

                switch (entity_type) {
                    case KGroup.ENTITY_TYPE:
                        this._draggedEntity = factory.newGroup(this, name);
                        break;

                    case KChannel.ENTITY_TYPE:
                        this._draggedEntity = factory.newChannel(this, name);
                        break;

                    case KNode.ENTITY_TYPE:
                        this._draggedEntity = factory.newNode(this, name);
                        break;

                    case KComponent.ENTITY_TYPE:
                        this._draggedEntity = factory.newComponent(this, name);
                        break;

                    default:
                        console.error("CEditor.addEntity(type): I don't know this entity type: "+entity_type);
                        return;
                }

                this._draggedEntity.getUI().setDOMItem(libItem);
            }
        }

        CEditor.prototype.p2cEntityDraggedOut = function () {
            this._draggedEntity = null;
        }

        // Override KEditor.update(entity)
        CEditor.prototype.update = function (entity) {
            this._ui.c2pEntityUpdated(entity.getUI());
        }

        CEditor.prototype.p2cMouseUp = function (position) {
            if (this._currentWire) {
                this.abortWireCreationTask();
            }

            if (this._draggedEntity && this._draggedEntity.getUI().isReady()) {
                this._draggedEntity = null;
            }
        }

        CEditor.prototype.p2cDblTap = function () {
            this._ui.c2pZoomDefault();
        }

        CEditor.prototype.p2cMouseMove = function (position) {
            if (this._currentWire) {
                this._ui.c2pUpdateWire(this._currentWire.getUI(), position);
            }
        }

        CEditor.prototype.p2cZoomIn = function () {
            this._ui.c2pZoomIn();
        }

        CEditor.prototype.p2cZoomDefault = function () {
            this._ui.c2pZoomDefault();
        }

        CEditor.prototype.p2cZoomOut = function () {
            this._ui.c2pZoomOut();
        }

        CEditor.prototype.p2cToggleLibTree = function () {
            if (this._libTreeDisplayed) {
                this._ui.c2pHideLibTree();
            } else {
                this._ui.c2pShowLibTree();
            }
            this._libTreeDisplayed = !this._libTreeDisplayed;
        }

        CEditor.prototype.p2cFoldAllLibTree = function () {
            if (this.getModel()) {
                if (this._foldedLibTree) {
                    this._ui.c2pUnfoldAllLibTree();
                } else {
                    this._ui.c2pFoldAllLibTree();
                }
                this._foldedLibTree = !this._foldedLibTree;
            }
        }

        // Override KEditor.setModel(model)
        CEditor.prototype.setModel = function (model) {
            KEditor.prototype.setModel.call(this, model);
            this._ui.c2pInflateLibTree();
        }

        CEditor.prototype.getDraggedEntity = function () {
            return this._draggedEntity;
        }

        CEditor.prototype.setDraggedEntity = function (entity) {
            this._draggedEntity = entity;
        }

        CEditor.prototype.getCurrentWire = function () {
            return this._currentWire;
        }

        // Override KEditor.clear()
        CEditor.prototype.clear = function () {
            KEditor.prototype.clear.call(this);
            this._ui.c2pClear();
        }

        // Override KEditor.clearInstances()
        CEditor.prototype.clearInstances = function () {
            // TODO here you maybe should check the saved state of the model ?
            KEditor.prototype.clearInstances.call(this);
        }

        CEditor.prototype.startWireCreationTask = function (wire) {
            this._currentWire = wire;
            this._ui.c2pWireAdded(wire.getUI());
        }

        CEditor.prototype.abortWireCreationTask = function () {
            this._currentWire.getOrigin().getUI().setDraggable(true, true, true);
            this._currentWire.disconnect();
            this._currentWire = null;
        }

        CEditor.prototype.endWireCreationTask = function () {
            this._currentWire = null;
        }

        CEditor.prototype.consumeDraggedEntity = function () {
            this._draggedEntity = null;
        }

        return CEditor;
    }
);