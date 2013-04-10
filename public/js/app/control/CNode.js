define(
    [
        'app/abstraction/KNode',
        'app/presentation/UINode',
        'app/control/AController',
        'app/util/Pooffs'
    ],

    function(KNode, UINode, AController, Pooffs) {

        Pooffs.extends(CNode, KNode);
        Pooffs.extends(CNode, AController);

        function CNode(type) {
            // super(type)
            KNode.prototype.constructor.call(this, type);

            // instantiate UI
            this._ui = new UINode(this);
        }

        return CNode;
    }
);