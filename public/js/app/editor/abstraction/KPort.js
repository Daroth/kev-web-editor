define(
    [
        'kevoree'
    ],

    function (Kevoree) {
        KPort.ENTITY_TYPE = 'PortType';

        /**
         * This should be considered as an abstract class
         *
         * @constructor
         */
        function KPort (name) {
            this._component = null;
            this._name = name;
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        KPort.prototype.disconnect = function () {
            this._component.disconnectPort(this);
        }

        KPort.prototype.getComponent = function () {
            return this._component;
        }

        KPort.prototype.getEditor = function () {
            return this._component.getEditor();
        }

        KPort.prototype.setComponent = function (comp) {
            this._component = comp;
        }

        KPort.prototype.getName = function () {
            return this._name;
        }

        KPort.prototype.getWires = function () {
            return this._component.getWires();
        }

        KPort.prototype.getEntityType = function () {
            return KPort.ENTITY_TYPE;
        }

        return KPort;
    }
);