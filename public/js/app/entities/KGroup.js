define(
    ["app/entities/KEntity"],

    function(KEntity) {
        // PRIVATE CONSTANTS
        var STROKE = 4;

        // PUBLIC CONSTANTS
        KGroup.PLUG_NAME = 'grpPlug';

        // inherit from KEntity
        KGroup.prototype = new KEntity();
        KGroup.prototype.constructor = KGroup;

        function KGroup(type) {
            var circle = new Kinetic.Circle({
                radius: 55,
                fill: 'green',
                stroke: 'black',
                strokeWidth: STROKE,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            var plugRadius = 10;
            var plug = new Kinetic.Circle({
                y: (circle.getRadius() / 2) + plugRadius,
                radius: plugRadius,
                fill: '#f1c30f',
                name: KGroup.PLUG_NAME
            });

            var text = new Kinetic.Text({
                text: type,
                fontSize: 13,
                fontFamily: 'Helvetica',
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
            this.shape.add(plug);
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

//            var thisShape = this.shape;
//            plug.on('mousedown', function() {
//                console.log("mousedown");
//                thisShape.setDraggable(false);
//            });
//
//            plug.on('mouseup', function() {
//                console.log("mouseip");
//                thisShape.setDraggable(true);
//                drawCurve({
//                    x: plug.getAbsolutePosition().x,
//                    y: plug.getAbsolutePosition().y
//                }, {
//                    x: 650,
//                    y: 450
//                });
//            });

            //===========================
            // Private utility functions
            //===========================
            var shape = this.shape;
            var drawCurve = function(origin, target) {
                var canvas = this.wireLayer.getCanvas();
                var context = canvas.getContext();

                canvas.clear();

                // draw curve
                // TODO
                context.beginPath();
                context.moveTo(origin.x, origin.y);
                var middle = {
                  x: target.x - origin.x,
                  y: (target.y - origin.x) + 300
                };
                context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
                context.strokeStyle = 'blue';
                context.lineWidth = 4;
                context.stroke();
            }

            this.setPopup('<p>TODO</p>');
        }

        return KGroup;
    }
);