define(
    [
        'presentation/UIPort',
        'util/Pooffs'
    ],

    function (UIPort, Pooffs) {

        var STROKE = '#ECCA40';

        UIInputPort.NAME = 'input_port';

        Pooffs.extends(UIInputPort, UIPort);

        function UIInputPort (ctrl) {
            UIPort.prototype.constructor.call(this, ctrl);

            this._shape.setStroke(STROKE);
            this._shape.setName(UIInputPort.NAME);
        }

        // Override UIPort.c2pWireCreationStarted(UIWire)
        UIInputPort.prototype.c2pWireCreationStarted = function (wire) {
            UIPort.prototype.c2pWireCreationStarted.call(this, wire); // super(wire)
            wire.setColor(STROKE);
        }

        return UIInputPort;
    }
);