define(
    ["app/entities/KEntity"],

    function(KEntity) {
        KComponent.prototype = new KEntity();
        KComponent.prototype.constructor = KComponent;

        function KComponent(type) {
            this.shape = new Kinetic.Text({
                x: 100,
                y: 100,
                text: "TODO",
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            this.setPopup('<p>TODO</p>');
        }

        return KComponent;
    }
);