define(
    [
        'abstraction/KChannel',
        'abstraction/KComponent',
        'presentation/UIChannel',
        'control/AController',
        'control/CEntity',
        'util/Pooffs'
    ],

    function(KChannel, KComponent, UIChannel, AController, CEntity, Pooffs) {
        Pooffs.extends(CChannel, KChannel);
        Pooffs.extends(CChannel, AController);
        Pooffs.extends(CChannel, CEntity);

        function CChannel(editor, type) {
            // KChannel.super(type)
            KChannel.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIChannel(this);
        }

        CChannel.prototype.p2cMouseOver = function () {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                if (wire.getOrigin().getEntityType() == KComponent.ENTITY_TYPE) {
                    // connection can be made
                    this._ui.c2pDropPossible();
                } else {
                    // connection cannot be made
                    this._ui.c2pDropImpossible();
                }
            } else {
                // user is just overing the shape
                this._ui.c2pPointerOverShape();
            }
        }

        return CChannel;
    }
);