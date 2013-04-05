define(
    ["app/entities/KEntity"],

    function(KEntity) {
        KComponent.prototype = new KEntity();
        KComponent.prototype.constructor = KComponent;

        function KComponent(name) {

        }

        return KComponent;
    }
);