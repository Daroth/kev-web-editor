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

        function CComponent(editor, type) {
            // super(type)
            KComponent.prototype.constructor.call(this, editor, type);

            // CNestableEntity.super(editor, type)
            CNestableEntity.prototype.constructor.call(this, editor, type);

            // KComponent.super(editor, type, ins, outs)
            KComponent.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIComponent(this);
            this._parentCache = null;
        }

        // Override CNestableEntity.p2cDragStart()
        CComponent.prototype.p2cDragStart = function () {
            this._parentCache = this.getParent();
            CNestableEntity.prototype.p2cDragStart.call(this);
        }

        // Override CNestableEntity.p2cMouseOver()
        CComponent.prototype.p2cMouseOver = function () {
            this._ui.c2pMouseOver();
        }

        // Override CNestableEntity.p2cMouseOut()
        CComponent.prototype.p2cMouseOut = function () {
            this._ui.c2pMouseOut();
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
            }

            if (this._parentCache) {
                this._parentCache.addChild(this);
                this._parentCache = null;
            }
        }

        return CComponent;
    }
);