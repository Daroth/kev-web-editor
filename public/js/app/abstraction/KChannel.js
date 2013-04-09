define(
    function() {
        // private static global variable
        KChannel._COUNT = 0;

        /**
         *
         * @param type
         * @constructor
         */
        function KChannel(type) {
            this._name = type + (KChannel._COUNT++);
            this._type = type;
        }

        KChannel.prototype.getName = function() {
            return this._name;
        }

        KChannel.prototype.getType = function() {
            return this._type;
        }

        return KChannel;
    }
);