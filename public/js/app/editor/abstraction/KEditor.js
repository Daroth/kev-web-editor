define(
    [
        'util/ModelHelper',
        'kevoree'
    ],

    function(ModelHelper, Kevoree) {

        function KEditor() {
            this._entities = new Array();
            this._typeCounter = new Array();
            this._model = null;
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        KEditor.prototype.addEntity = function(entity) {
            this._entities.push(entity);

            // update typeCounter
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;

            // update model
            if (this._model) entity.addInstanceToModel(this._factory);
        }

        KEditor.prototype.removeEntity = function(entity) {
            var index = this._entities.indexOf(entity);
            if (index != -1) {
                this._entities.splice(index, 1);

                // update typeCounter
                this._typeCounter[entity.getType()]--;

                // update model
                if (this._model) entity.removeInstanceFromModel();
            }
        }

        KEditor.prototype.addNestableEntity = function (entity) {
            // update typeCounter
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;

            // update model
            if (this._model) entity.addInstanceToModel(this._factory);
        }

        KEditor.prototype.removeNestableEntity = function (entity) {
            // update typeCounter
            this._typeCounter[entity.getType()]--;

            // update model
            if (this._model) entity.removeInstanceFromModel();
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

            this._entities = [];
            this._typeCounter = [];
        }

        KEditor.prototype.hasEntity = function (entity) {
            for (var i=0; i < this._entities.length; i++) {
                if (this._entities[i].getName() == entity.getName()) return true;
            }
            return false;
        }

        KEditor.prototype.getEntities = function () {
            return this._entities;
        }

        KEditor.prototype.setModel = function (model) {
            this._model = model;
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