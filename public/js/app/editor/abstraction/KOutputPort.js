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
                binding = this._factory.createMBinding();

            binding.setPort(this._instance);
            binding.setHub(hub);

            model.addMBindings(binding);
        }

        KOutputPort.prototype.addInstanceToModel = function (factory) {
            var model = this._component.getEditor().getModel(),
                node = model.findNodesByID(this._component.getParent().getName()),
                comp = node.findComponentsByID(this._component.getName()),
                portRef = comp.getTypeDefinition().findRequiredByID(this._name);

            this._instance = factory.createPort();

            comp.addRequired(this._instance);
            this._instance.setPortTypeRef(portRef);
        }

        return KOutputPort;
    }
);