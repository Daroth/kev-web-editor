define(
    [
        'app/abstraction/KGroup',
        'app/presentation/UIGroup'
    ],

    function(KGroup, UIGroup) {
        CGroup.prototype = new KGroup();
        CGroup.prototype.constructor = CGroup;

        function CGroup(type, handler) {
            // super(type)
            KGroup.prototype.constructor.call(this, type);

            // instantiate UI
            this._handler = handler;
            this._ui = new UIGroup(this);
        }

        CGroup.prototype.getUI = function() {
            return this._ui;
        }

        CGroup.prototype.getHandler = function() {
            return this._handler;
        }

        return CGroup;
    }
);