define(
    [
        'control/CEntity',
        'util/Pooffs'
    ],

    function (CEntity, Pooffs) {
        Pooffs.extends(CNestableEntity, CEntity);

        function CNestableEntity(editor, lib, type) {
            // CEntity.super(editor, lib, type)
            CEntity.prototype.constructor.call(this, editor, lib, type);
        }

        CNestableEntity.prototype.p2cMouseOver = function () {}
        CNestableEntity.prototype.p2cMouseOut = function () {}

        CNestableEntity.prototype.p2cDragStart = function () {
            var parent = this.getParent();
            if (parent) {
                parent.removeChild(this);
                parent.getUI().c2pChildDragStarted(this.getUI());
            }
            this._isDragged = true;
            this.getEditor().setDraggedEntity(this);
        }

        CNestableEntity.prototype.p2cDragEnd = function () {
            if (this.getEditor().getDraggedEntity()) {
                this.getEditor().consumeDraggedEntity();
                if (!this.getParent()) {
                    if (this.getEditor().hasEntity(this)) {
                        this.getEditor().removeEntity(this);
                    }
                    this._ui.getShape().remove();
                    this.getEditor().addEntity(this);
                }
            }
            this._isDragged = false;
        }

        return CNestableEntity;
    }
);