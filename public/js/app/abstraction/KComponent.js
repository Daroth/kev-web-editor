define(
    function() {
        // private static global variable
        KComponent._COUNT = 0;

        /**
         *
         * @param type
         * @constructor
         */
        function KComponent(type) {
            this._name = type + (KComponent._COUNT++);
            this._type = type;
        }

        KComponent.prototype.getName = function() {
            return this._name;
        }

        KComponent.prototype.getType = function() {
            return this._type;
        }

        return KComponent;
    }
);