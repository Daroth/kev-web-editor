define(
    [
        'app/abstraction/KNode',
        'app/presentation/UINode'
    ],

    function(KNode, UINode) {
        CNode.prototype = new KNode();
        CNode.prototype.constructor = CNode;

        function CNode(type, handler) {
            // super(type)
            KNode.prototype.constructor.call(this, type);

            // instantiate UI
            this._handler = handler;
            this._ui = new UINode(this);
        }

        CNode.prototype.getUI = function() {
            return this._ui;
        }

        CNode.prototype.getHandler = function() {
            return this._handler;
        }

        return CNode;
    }
);