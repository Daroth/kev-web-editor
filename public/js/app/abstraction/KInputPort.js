define(
    [
        'abstraction/KPort',
        'util/Pooffs',
        'require'
    ],

    function (KPort, Pooffs, require) {

        Pooffs.extends(KInputPort, KPort);

        function KInputPort (name) {
            KPort.prototype.constructor.call(this, name);
        }

        KInputPort.prototype.createWire = function () {
            var wire = require('factory/CFactory').getInstance().newWire(this);
            this._component.addWire(wire);
            return wire;
        }

        return KInputPort;
    }
);