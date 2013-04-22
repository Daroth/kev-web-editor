define(
    [
        'abstraction/KPort',
        'util/Pooffs',
        'require'
    ],

    function (KPort, Pooffs, require) {

        Pooffs.extends(KOutputPort, KPort);

        function KOutputPort (name) {
            KPort.prototype.constructor.call(this, name);
        }

        KOutputPort.prototype.createWire = function () {
            var wire = require('factory/CFactory').getInstance().newWire(this);
            this._component.addWire(wire);
            return wire;
        }

        return KOutputPort;
    }
);