define(
    function() {
        // private static global variable
        KNode._COUNT = 0;

        /**
         *
         * @param type
         * @constructor
         */
        function KNode(type) {
            this._name = type + (KNode._COUNT++);
            this._type = type;
        }

        KNode.prototype.getName = function() {
            return this._name;
        }

        KNode.prototype.getType = function() {
            return this._type;
        }

        return KNode;
    }
);