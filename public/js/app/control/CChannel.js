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

        function CChannel(editor, lib, type) {
            // KChannel.super(type)
            KChannel.prototype.constructor.call(this, editor, lib, type);

            // CEntity.super(editor, type)
            CEntity.prototype.constructor.call(this, editor, lib, type);

            // instantiate UI
            this._ui = new UIChannel(this);
        }

        CChannel.prototype.p2cMouseOver = function () {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                var origin = wire.getOrigin();
                if (typeof (origin.getEntityType) != 'function') { // TODO -> THIS IS FREAKING UGLY: CHANGETHAT
                                                                   // TODO because this is my way of checking if origin is a Port or a Group...
                    // connection can be made
                    this._ui.c2pDropPossible();
                } else {
                    // connection cannot be made
                    this._ui.c2pDropImpossible();
                }
            } else {
                // user is just hovering the shape
                this._ui.c2pPointerOverShape();
            }
        }

        CChannel.prototype.p2cMouseUp = function () {
            var wire = this.getEditor().getCurrentWire();
            if (wire) {
                // there is a wire task in progress
                var origin = wire.getOrigin();
                if (typeof (origin.getEntityType) != 'function') { // TODO -> THIS IS FREAKING UGLY: CHANGETHAT
                                                                   // TODO because this is my way of checking if origin is a Port or a Group...
                    // we are good to go
                    wire.setTarget(this);
                    this.addWire(wire);
                    this.getEditor().endWireCreationTask();
                    this._ui.c2pWireCreated(wire.getUI());
                } else {
                    // connection cannot be made
                    this._ui.c2pDropImpossible();
                }
            } else {
                // user is just hovering the shape
                this._ui.c2pPointerOverShape();
            }
        }

        CChannel.prototype.p2cDragMove = function () {
            var wires = this.getWires();
            if (wires.length > 0) this.getEditor().getUI().getWiresLayer().draw();
        }

        return CChannel;
    }
);