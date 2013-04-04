define(
    "app/entities/Group",

    function () {
        function Group(name) {
            // create the group shape
            this.circle = new Kinetic.Circle({
                x: 100,
                y: 100,
                radius: 55,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 4,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                draggable: true,
                opacity: 0.6
            });
        }

        Group.prototype.getShape = function() {
            return this.circle;
        }

        return Group;
    }
);