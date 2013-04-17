define(
    [
        'control/CEntity',
        'util/Pooffs'
    ],

    function (CEntity, Pooffs) {
        Pooffs.extends(CNestableEntity, CEntity);

        function CNestableEntity() {
            CEntity.prototype.constructor.call(this);
        }

        CNestableEntity.prototype.p2cMouseOver = function () {}
        CNestableEntity.prototype.p2cMouseOut = function () {}

        CNestableEntity.prototype.p2cDragStart = function () {
            if (this.getParent()) {
                this.getParent().removeChild(this);
            }
            this._isDragged = true;
            this.getEditor().setDraggedEntity(this);
        }

        CNestableEntity.prototype.p2cDragEnd = function () {
            this.getEditor().consumeDraggedEntity();
            this._isDragged = false;
        }

        CNestableEntity.prototype.p2cRemoveEntity = function () {
            if (this.getParent()) {
                this.getParent().removeChild(this);
            }
            CEntity.prototype.p2cRemoveEntity.call(this);
        }

        return CNestableEntity;
    }
);