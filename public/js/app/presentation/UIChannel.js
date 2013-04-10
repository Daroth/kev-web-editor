define(
    ["app/presentation/UIEntity"],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3;

        // inherit from UIEntity
        UIChannel.prototype = new UIEntity();

        function UIChannel(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

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
                text: ctrl.getType(),
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fill: '#FFF',
                align: 'center',
                width: circle.getWidth()
            });

            text.move(-text.getWidth()/2, -text.getHeight()/2);

            this._shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true
            });

            this._shape.add(circle);
            this._shape.add(text);

            //===========================
            // Event handling
            //===========================
            this._shape.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
                circle.setStrokeWidth(STROKE+1);
                circle.getLayer().draw();
            });

            this._shape.on('mouseout', function() {
                document.body.style.cursor = 'default';
                circle.setStrokeWidth(STROKE);
                circle.getLayer().draw();
            });

            this.setPopup('<p>'+ctrl.getType()+' TODO</p>');
        }

        return UIChannel;
    }
);