define(
    function() {
        // private static global variable
        KGroup._COUNT = 0;

        /**
         *
         * @param type
         * @constructor
         */
        function KGroup(type) {
            this._name = type + (KGroup._COUNT++);
            this._type = type;
        }

        KGroup.prototype.getName = function() {
            return this._name;
        }

        KGroup.prototype.getType = function() {
            return this._type;
        }

        return KGroup;
    }
);