define(
    [
        'app/util/Pooffs',
        'app/abstraction/KEditor',
        'app/abstraction/KGroup',
        'app/abstraction/KComponent',
        'app/abstraction/KChannel',
        'app/abstraction/KNode',
        'app/control/AController',
        'app/presentation/UIEditor',
        'app/factory/CFactory',
        'require'
    ],

    function (Pooffs, KEditor, KGroup, KComponent, KChannel, KNode, AController, UIEditor, CFactory, require) {
        Pooffs.extends(CEditor, KEditor);
        Pooffs.extends(CEditor, AController);

        function CEditor(containerID) {
            KEditor.prototype.constructor.call(this); // KEditor.super();

            this._ui = new UIEditor(this, containerID);
            this._currentWire = null;
            this._draggedEntity = null;
        }

        // Override KEditor.addEntity(KEntity)
        CEditor.prototype.addEntity = function (entity) {
            KEditor.prototype.addEntity.call(this, entity); // super.addEntity(type)
            this._ui.c2pEntityAdded(entity.getUI());
        }

        // Override KEditor.removeEntity(KEntity)
        CEditor.prototype.removeEntity = function (entity) {
            KEditor.prototype.removeEntity.call(this, entity); // super.addEntity(type)
            this._ui.c2pEntityRemoved(entity.getUI());
        }

        CEditor.prototype.p2cEntityDropped = function () {
            if (this._draggedEntity) {
                // really adding the entity to the editor model
                this.addEntity(this._draggedEntity);

                // forget about the draggedEntity, it has already been added
                this._draggedEntity = null;
            }
        }

        CEditor.prototype.p2cEntityDraggedOver = function (libItem, entity_type, type) {
            var factory = require('app/factory/CFactory').getInstance();

            switch (entity_type) {
                case KGroup.ENTITY_TYPE:
                    this._draggedEntity = factory.newGroup(this, type);
                    break;

                case KChannel.ENTITY_TYPE:
                    this._draggedEntity = factory.newChannel(this, type);
                    break;

                case KNode.ENTITY_TYPE:
                    this._draggedEntity = factory.newNode(this, type);
                    break;

                case KComponent.ENTITY_TYPE:
                    this._draggedEntity = factory.newComponent(this, type);
                    break;

                default:
                    console.error("CEditor.addEntity(type): I don't know this entity type: "+entity_type);
                    return;
            }

            this._draggedEntity.getUI().setDOMItem(libItem);
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

        CEditor.prototype.p2cMouseMove = function (position) {
            if (this._currentWire) {
                this._ui.c2pUpdateWire(this._currentWire.getUI(), position);
            }
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

        CEditor.prototype.startWireCreationTask = function (wire) {
            this._currentWire = wire;
            this._ui.c2pWireAdded(wire.getUI());
        }

        CEditor.prototype.abortWireCreationTask = function () {
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