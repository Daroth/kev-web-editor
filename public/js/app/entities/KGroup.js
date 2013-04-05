define(
    ["app/entities/KEntity"],

    function(KEntity) {
        // CONSTANTS
        var STROKE = 4;

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
                fill: '#f1c30f'
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

            plug.on('dragstart', function(parent, evtType, event) {
                console.log(parent);
                console.log(evtType);
                console.log(event);
            });

            plug.on('dragstop', function() {

            });

            //===========================
            // Private utility functions
            //===========================
            var drawCurve = function() {
                var canvas = this.shape.getLayer.getCanvas();
                var context = canvas.getContext();

                canvas.clear();

                // draw bezier
                context.beginPath();
                context.moveTo(bezier.start.attrs.x, bezier.start.attrs.y);
                context.bezierCurveTo(bezier.control1.attrs.x, bezier.control1.attrs.y, bezier.control2.attrs.x, bezier.control2.attrs.y, bezier.end.attrs.x, bezier.end.attrs.y);
                context.strokeStyle = 'blue';
                context.lineWidth = 4;
                context.stroke();
            }
        }

        return KGroup;
    }
);