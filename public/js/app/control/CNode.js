define(
    [
        'app/abstraction/KNode',
        'app/presentation/UINode',
        'app/control/AController',
        'app/control/CEntity',
        'app/util/Pooffs'
    ],

    function(KNode, UINode, AController, CEntity, Pooffs) {

        Pooffs.extends(CNode, KNode);
        Pooffs.extends(CNode, AController);
        Pooffs.extends(CNode, CEntity);

        function CNode(editor, type) {
            // super(type)
            KNode.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UINode(this);
        }

        return CNode;
    }
);