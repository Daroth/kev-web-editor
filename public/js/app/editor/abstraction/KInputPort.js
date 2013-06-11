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

        KInputPort.prototype.addBindingInstanceToModel = function (target) {
            var model = this._component.getEditor().getModel(),
                hub = model.findHubsByID(target.getName()),
                binding = this._factory.createMBinding();

            binding.setPort(this._instance);
            binding.setHub(hub);

            model.addMBindings(binding);
        }

        KInputPort.prototype.addInstanceToModel = function (factory) {
            var model = this._component.getEditor().getModel(),
                node = model.findNodesByID(this._component.getParent().getName()),
                comp = node.findComponentsByID(this._component.getName()),
                portRef = comp.getTypeDefinition().findProvidedByID(this._name);

            this._instance = factory.createPort();

            comp.addProvided(this._instance);
            this._instance.setPortTypeRef(portRef);
        }

        return KInputPort;
    }
);