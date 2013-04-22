define(
    function () {

        /**
         * This should be considered as an abstract class
         *
         * @constructor
         */
        function KPort (name) {
            this._component = null;
            this._channel = null;
            this._name = name;
        }

        KPort.prototype.connect = function (/* KChannel */ channel) {
            this._channel = channel;
        }

        KPort.prototype.disconnect = function () {
            this._component.disconnectPort(this);
            this._channel = null;
        }

        KPort.prototype.getChannel = function () {
            return this._channel;
        }

        KPort.prototype.getComponent = function () {
            return this._component;
        }

        KPort.prototype.setComponent = function (comp) {
            this._component = comp;
        }

        KPort.prototype.getName = function () {
            return this._name;
        }

        return KPort;
    }
);