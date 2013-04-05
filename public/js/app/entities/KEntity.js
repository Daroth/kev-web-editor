/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 */
define(
    function() {
        function KEntity() {}

        KEntity.prototype.getShape = function() {
            return this.shape;
        }

        return KEntity;
    }
);