define(
    [
        'abstraction/KPort',
        'util/Pooffs',
        'require'
    ],

    function (KPort, Pooffs, require) {

        Pooffs.extends(KOutputPort, KPort);

        function KOutputPort (/* KComponent */ component) {
            KPort.prototype.constructor.call(this, component);
        }

        KOutputPort.prototype.createWire = function () {
            var wire = require('factory/CFactory').getInstance().newWire(this);
            return wire;
        }

        return KOutputPort;
    }
);