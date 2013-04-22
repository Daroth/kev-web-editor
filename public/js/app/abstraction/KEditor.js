define(
    function() {
        function KEditor() {
            this._entities = new Array();
            this._typeCounter = new Array();
            this._libraries = new Array();
        }

        KEditor.prototype.addEntity = function(entity) {
            this._entities.push(entity);

            // update typeCounter
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;
        }

        KEditor.prototype.removeEntity = function(entity) {
            var index = this._entities.indexOf(entity);
            if (index != -1) {
                this._entities.splice(index, 1);

                // update typeCounter
                this._typeCounter[entity.getType()]--;
            }
        }

        KEditor.prototype.addLibrary = function (name, components) {
            this._libraries[name] = components;
        }

        KEditor.prototype.getLibraries = function () {
            return this._libraries;
        }

        KEditor.prototype.clear = function () {
            var entities = this._entities.slice(0); // clone entities array

            for (var i=0; i < entities.length; i++) {
                entities[i].remove();
            }

            this._entities = [];
            this._typeCounter = [];
        }

        KEditor.prototype.getEntities = function () {
            return this._entities;
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