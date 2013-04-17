define(
    function () {

        /**
         * This should be considered as an abstract class
         *
         * @param component
         * @constructor
         */
        function KPort (/* KComponent */ component) {
            this._component = component;

            this._channel = null;
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

        return KPort;
    }
);