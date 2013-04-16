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

            // instantiate UI
            this._ui = new UIComponent(this);
        }

        // Override CNestableEntity.p2cMouseOver()
        CComponent.prototype.p2cMouseOver = function () {
            this._ui.c2pMouseOver();
        }

        // Override CNestableEntity.p2cMouseOut()
        CComponent.prototype.p2cMouseOut = function () {
            this._ui.c2pMouseOut();
        }

        // Override CNestableEntity.p2cDragMove()
        CComponent.prototype.p2cDragMove = function () {
            CNestableEntity.prototype.p2cDragMove.call(this); // super();

            // tell inputs/outputs to do the same
            // TODO
        }

        return CComponent;
    }
);