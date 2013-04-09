define(
    [],

    function() {

        function Properties(stage, layer, entity) {
            var text = new Kinetic.Text({
                text: 'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances.',
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: 'white',
                width: 380,
                padding: 20,
                align: 'center'
            });

            var rect = new Kinetic.Rect({
                stroke: '#FFF',
                strokeWidth: 1,
                fill: '#000',
                width: 380,
                height: text.getHeight(),
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [10, 10],
                shadowOpacity: 0.2,
                cornerRadius: 10
            });

            var shape = new Kinetic.Group({
                x: stage.getWidth()/2,
                y: stage.getHeight()/2,
                draggable: true
            });

            shape.setOffset({
                x: rect.getWidth()/2,
                y: rect.getHeight()/2
            });

            shape.add(rect);
            shape.add(text);

            layer.add(shape);
            shape.moveToTop();
            layer.draw();
        }

        return Properties;
    }
);