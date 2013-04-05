define(
    ["app/entities/KEntity"],

    function(KEntity) {
        // CONSTANTS
        var STROKE = 3;

        // inherit from KEntity
        KChannel.prototype = new KEntity();
        KChannel.prototype.constructor = KChannel;

        function KChannel(type) {
            var circle = new Kinetic.Circle({
                radius: 55,
                fill: '#de7c37',
                stroke: 'white',
                strokeWidth: STROKE,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            var text = new Kinetic.Text({
                text: type,
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fill: '#FFF',
                align: 'center',
                width: circle.getWidth()
            });

            text.move(-text.getWidth()/2, -text.getHeight()/2);

            this.shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true
            });

            this.shape.add(circle);
            this.shape.add(text);

            //===========================
            // Event handling
            //===========================
            this.shape.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
                circle.setStrokeWidth(STROKE+1);
                circle.getLayer().draw();
            });

            this.shape.on('mouseout', function() {
                document.body.style.cursor = 'default';
                circle.setStrokeWidth(STROKE);
                circle.getLayer().draw();
            });
        }

        return KChannel;
    }
);