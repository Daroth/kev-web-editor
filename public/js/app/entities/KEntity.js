/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 */
define(
    ["jquery"],

    function($) {
        function KEntity() {}

        KEntity.prototype.getShape = function() {
            return this.shape;
        }

        KEntity.prototype.setPopup = function(content) {
            this.shape.off('dblclick');
            this.shape.on('dblclick', function() {
                $('#popup-content').html(content);
                $('#popup').modal({
                    show: true
                });
            });
        }

        return KEntity;
    }
);