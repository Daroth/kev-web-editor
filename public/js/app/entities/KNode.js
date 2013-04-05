define(
    ["app/entities/KEntity"],

    function(KEntity) {
        // PUBLIC CONSTANTS
        KNode.NAME = 'node';

        KNode.prototype = new KEntity();
        KNode.prototype.constructor = KNode;

        function KNode(type) {
            var headerName = new Kinetic.Text({
                text: type,
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            var rect = new Kinetic.Rect({
                stroke: '#FFF',
                strokeWidth: 3,
                width: headerName.getWidth(),
                height: headerName.getHeight(),
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                cornerRadius: 10
            });

            this.shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true,
                name: KNode.NAME
            });

            this.shape.add(rect);
            this.shape.add(headerName);

            this.setPopup('<p>TODO</p>');
        }

        return KNode;
    }
);