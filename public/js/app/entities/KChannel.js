define(
    ["app/entities/KEntity"],

    function(KEntity) {
        KChannel.prototype = new KEntity();
        KChannel.prototype.constructor = KChannel;

        function KChannel(name) {

        }

        return KChannel;
    }
);