define(
    function() {
        function KEditor() {
            this._entities = new Array();
            this._typeCounter = new Array();
        }

        KEditor.prototype.addEntity = function(entity) {
            this._entities.push(entity);
            if (!this._typeCounter[entity.getType()]) this._typeCounter[entity.getType()] = 0;
            this._typeCounter[entity.getType()]++;
        }

        KEditor.prototype.removeEntity = function(entity) {
            var index = this._entities.indexOf(entity);
            this._entities.splice(index, 1);
        }

        KEditor.prototype.getEntities = function() {
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