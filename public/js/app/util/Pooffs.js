define(
    function() {
        /**
         * POO FFS
         * Because OOP is good.
         * @constructor
         */
        function Pooffs() {}

        Pooffs.extends = function(child, parent) {
            for (var attr in parent.prototype) {
                child.prototype[attr] = parent.prototype[attr];
            }
        }

        return Pooffs;
    }
);