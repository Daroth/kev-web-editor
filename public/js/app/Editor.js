define(
    ['app/entities/Group'],

    function (Group) {
        function Editor(containerID) {
            this.id = containerID;
        }

        Editor.prototype.create = function(width, height) {
            // init stage
            this.stage = new Kinetic.Stage({
                container: this.id,
                width: width,
                height: height
            });

            // init background layer
            var bgLayer = new Kinetic.Layer();
            var bgImg = new Image();
            bgImg.onload = function() {
                var background = new Kinetic.Image({
                    x: 0,
                    y: 0,
                    image: bgImg,
                    width: bgImg.width,
                    height: bgImg.height
                });
                bgLayer.add(background);
                bgLayer.setZIndex(0);
                bgLayer.draw();
            }
            bgImg.src = "img/background.jpg";
            this.stage.add(bgLayer);

            // init model layer (it handles all model components)
            this.modelLayer = new Kinetic.Layer({
                x: 150,
                y: 0
            });
            this.stage.add(this.modelLayer);

            // init lib panel layer
//            var libLayer = new Kinetic.Layer();
//            this.libGroup = new Kinetic.Group();
//            // add background
//            this.libGroup.add(new Kinetic.Image({
//                x:0,
//                y:0,
//                fill: '#3E3E3E',
//                width: 150,
//                height: height
//            }));
//            libLayer.add(this.libGroup);
//            this.stage.add(libLayer);
        }

        Editor.prototype.addGroup = function(name) {
            var group = new Group(name);
            this.addShape(group.getShape());
        }

        Editor.prototype.addLib = function(name, type) {
            var picto = getLibPicto(type);
            var text = getLibText(name);

            var group = new Kinetic.Group({
                draggable: true
            });

            group.add(picto);
            group.add(text);
            group.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
            });
            group.on('mouseout', function() {
                document.body.style.cursor = 'default';
            });

            this.libGroup.add(group);
            this.libGroup.draw();
        }

        Editor.prototype.addComponent = function(name) {
            console.log("Editor.prototype.addComponent not implemented yet");
        }

        Editor.prototype.addNode = function(name) {
            var headerName = new Kinetic.Text({
                x: 100,
                y: 100,
                text: name,
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            var rect = new Kinetic.Rect({
                x: 100,
                y: 100,
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

            var nodeGroup = new Kinetic.Group({
                draggable: true
            });
            nodeGroup.add(rect);
            nodeGroup.add(headerName);
            this.addShape(nodeGroup);
        }

        Editor.prototype.addChannel = function(name) {
            console.log("Editor.prototype.addChannel not implemented yet");
        }

        Editor.prototype.addShape = function(shape) {
            this.modelLayer.add(shape);
            this.modelLayer.draw();
        }

        Editor.prototype.addJSONShape = function(json) {
            var shape = Kinetic.Node.create(json);
            this.addShape(shape);
        }

//====================
// Utility functions
//====================
        function getLibPicto(type) {
            // TODO maybe change this ugly switch for something nicer
            switch (type) {
                case 'component':
                    return new Kinetic.Rect({
                        x: 15,
                        y: 15,
                        fill: '#0d0d0d',
                        width: 15,
                        height: 15
                    });

                case 'node':
                    return new Kinetic.Rect({
                        x: 15,
                        y: 15,
                        fill: '#5b5b5b',
                        width: 15,
                        height: 15
                    });

                case 'group':
                    return new Kinetic.Rect({
                        x: 15,
                        y: 15,
                        fill: '#399342',
                        width: 15,
                        height: 15
                    });

                case 'channel':
                    return new Kinetic.Rect({
                        x: 15,
                        y: 15,
                        fill: '#d57129',
                        width: 15,
                        height: 15
                    });
            }
        }

        function getLibText(name) {
            var text = new Kinetic.Text({
                x: 30,
                y: 5,
                text: name,
                fontSize: 15,
                fontFamily: 'Helvetica',
                fontStyle: 'bold',
                fill: '#FFF',
                padding: 10,
                align: 'left'
            });
            return text;
        }

        return Editor;
    }
);