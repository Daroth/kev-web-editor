define(
    [
        'presentation/UIPort',
        'util/Pooffs'
    ],

    function (UIPort, Pooffs) {
        var STROKE = '#C60808';

        UIOutputPort.NAME = 'output_port';

        Pooffs.extends(UIOutputPort, UIPort);

        function UIOutputPort (ctrl) {
            UIPort.prototype.constructor.call(this, ctrl);

            this._shape.setStroke(STROKE);
            this._shape.setName(UIOutputPort.NAME);
        }

        // Override UIPort.c2pWireCreationStarted(UIWire)
        UIOutputPort.prototype.c2pWireCreationStarted = function (wire) {
            UIPort.prototype.c2pWireCreationStarted.call(this, wire); // super(wire)
            wire.setColor(STROKE);
        }

        return UIOutputPort;
    }
);