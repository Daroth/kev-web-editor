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

        CEditor.prototype.p2cAddEntity = function (entity_type, type) {
            var entity = null;
            // circular dependency: CFactory <-> CEditor needs 'require' to get rid
            // of the 'undefined' for CFactory (http://requirejs.org/docs/api.html#circular)
            var factory = require('app/factory/CFactory').getInstance();

            switch (entity_type) {
                case KGroup.ENTITY_TYPE:
                    entity = factory.newGroup(this, type);
                    break;

                case KComponent.ENTITY_TYPE:
                    entity = factory.newComponent(this, type);
                    break;

                case KChannel.ENTITY_TYPE:
                    entity = factory.newChannel(this, type);
                    break;

                case KNode.ENTITY_TYPE:
                    entity = factory.newNode(this, type);
                    break;

                default:
                    console.error("CEditor.addEntity(type): I don't know this entity type: "+entity_type);
                    return;
            }

            this.addEntity(entity);
        }

        return CEditor;
    }
);