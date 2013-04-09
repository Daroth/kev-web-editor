define(
    [
        'app/abstraction/KComponent',
        'app/presentation/UIComponent'
    ],

    function(KComponent, UIComponent) {
        CComponent.prototype = new KComponent();
        CComponent.prototype.constructor = CComponent;

        function CComponent(type, handler) {
            // super(type)
            KComponent.prototype.constructor.call(this, type);

            // instantiate UI
            this._handler = handler;
            this._ui = new UIComponent(this);
        }

        CComponent.prototype.getUI = function() {
            return this._ui;
        }

        CComponent.prototype.getHandler = function() {
            return this._handler;
        }

        return CComponent;
    }
);