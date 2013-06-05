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

        KOutputPort.prototype.addBindingInstanceToModel = function (target) {
            var model = this._component.getEditor().getModel(),
                hub = model.findHubsByID(target.getName()),
                node = model.findNodesByID(this._component.getParent().getName()),
                comp = node.findComponentsByID(this._component.getName()),
                port = comp.findRequiredByID(this._name),
                binding = this._factory.createMBinding();

            binding.setPort(port);
            binding.setHub(hub);

            model.addMBindings(binding);
        }

        return KOutputPort;
    }
);