define(
    ["app/entities/KEntity"],

    function(KEntity) {
        KNode.prototype = new KEntity();
        KNode.prototype.constructor = KNode;

        function KNode(name) {
            var headerName = new Kinetic.Text({
                x: 0,
                y: 0,
                text: name,
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            var rect = new Kinetic.Rect({
                x: 0,
                y: 0,
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
                draggable: true
            });

            this.shape.add(rect);
            this.shape.add(headerName);
        }

        return KNode;
    }
);