define(
    [
        'util/ModelHelper',
        'visitor/UpdateModelVisitor',
        'visitor/RemoveModelVisitor',
        'kevoree'
    ],

    function(ModelHelper, UpdateModelVisitor, RemoveModelVisitor, Kevoree) {

        function KEditor() {
            this._entities = [];
            this._typeCounter = [];
            this._model = null;
            this._updateVisitor = new UpdateModelVisitor();
            this._removeVisitor = new RemoveModelVisitor();
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        KEditor.prototype.addEntity = function(entity) {
            this._entities.push(entity);
            console.log("Editor.addEntity ", entity);

            // update typeCounter
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;

            // update model
            if (this._model) {
                entity.accept(this._updateVisitor);
//                entity.addInstanceToModel(this._factory);
            }
        }

        KEditor.prototype.removeEntity = function(entity) {
            var index = this._entities.indexOf(entity);
            if (index != -1) {
                this._entities.splice(index, 1);
                console.log("Editor.removedEntity ", entity);

                // update typeCounter
                this._typeCounter[entity.getType()]--;

                // update model
                if (this._model) {
                    entity.accept(this._removeVisitor);
//                    entity.removeInstanceFromModel();
                }
            }
        }

        KEditor.prototype.addNestableEntity = function (entity) {
            // update typeCounter
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;

            // update model
            if (this._model) {
                entity.accept(this._updateVisitor);
//                entity.addInstanceToModel(this._factory);
            }

            console.log("Editor.addNestableEntity ", entity);
        }

        KEditor.prototype.removeNestableEntity = function (entity) {
            // update typeCounter
            this._typeCounter[entity.getType()]--;

            // update model
            if (this._model) {
                entity.accept(this._removeVisitor);
//                entity.removeInstanceFromModel();
            }

            console.log("Editor.removeNestableEntity ", entity);
        }

        KEditor.prototype.clear = function () {
            this.clearInstances();
            this._model = null; // and forget model
        }

        KEditor.prototype.clearInstances = function () {
            var entities = this._entities.slice(0); // clone entities array

            for (var i=0; i < entities.length; i++) {
                entities[i].remove();
            }

            this._entities.length = 0;
            this._typeCounter.length = 0;
        }

        KEditor.prototype.hasEntity = function (entity) {
            for (var i=0; i < this._entities.length; i++) {
                if (this._entities[i].getName() == entity.getName()) return true;
            }
            return false;
        }

        KEditor.prototype.setModel = function (model) {
            this.clear(); // clear editor before a new model is set
            this._model = model;
            this._updateVisitor.setModel(model);
            this._removeVisitor.setModel(model);
        }

        KEditor.prototype.getModel = function () {
            return this._model;
        }

        /**
         * Returns the current count of that precise type in the model
         * @param type specific type of entity
         */
        KEditor.prototype.getEntityCount = function(type) {
            return this._typeCounter[type] || 0;
        }

        return KEditor;
    }
);