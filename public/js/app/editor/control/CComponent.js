define(
    [
        'abstraction/KComponent',
        'presentation/UIComponent',
        'control/AController',
        'control/CNestableEntity',
        'util/Pooffs'
    ],

    function(KComponent, UIComponent, AController, CNestableEntity, Pooffs) {

        Pooffs.extends(CComponent, KComponent);
        Pooffs.extends(CComponent, AController);
        Pooffs.extends(CComponent, CNestableEntity);

        function CComponent(editor, lib, type) {
            // super(type)
            KComponent.prototype.constructor.call(this, editor, lib, type);

            // CNestableEntity.super(editor, type)
            CNestableEntity.prototype.constructor.call(this, editor, lib, type);

            // instantiate UI
            this._ui = new UIComponent(this);
            this._parentCache = null;
        }

        // Override CNestableEntity.p2cDragStart()
        CComponent.prototype.p2cDragStart = function () {
            this._parentCache = this.getParent();
            CNestableEntity.prototype.p2cDragStart.call(this);
        }

        // Override CNestableEntity.remove()
        CComponent.prototype.remove = function () {
            KComponent.prototype.remove.call(this);
            CNestableEntity.prototype.remove.call(this);
            this._ui.redrawParent();
        }

        // Override CNestableEntity.p2cDragEnd
        CComponent.prototype.p2cDragEnd = function () {
            if (!this.getParent()) {
                // if I have no parent when dragend event occurs
                // then user is trying to drop me in the wild without
                // any parent and it's not possible
                this.remove();
                // so we put the component back where it was
                if (this._parentCache) {
                    this._parentCache.addChild(this);
                    this._parentCache = null;
                }
                // forget draggedEntity
                this.getEditor().consumeDraggedEntity();
            }
        }

        return CComponent;
    }
);