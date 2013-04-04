define(
    "app/entities/Group",

    function () {
        function Group(name) {
            var circle = new Kinetic.Circle({
                radius: 55,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 4,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            var text = new Kinetic.Text({
                text: name,
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
            this.shape.add(text);


        }

        Group.prototype.getShape = function() {
            return this.shape;
        }

        return Group;
    }
);