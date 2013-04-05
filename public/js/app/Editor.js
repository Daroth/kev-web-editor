define(
    [ // dependencies
        'app/entities/KGroup',
        'app/entities/KChannel',
        'app/entities/KComponent',
        'app/entities/KNode'
    ],

    function (KGroup, KChannel, KComponent, KNode) {
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
                x: 0,
                y: 0
            });
            this.stage.add(this.modelLayer);
        }

        Editor.prototype.addGroup = function(name) {
            var group = new KGroup(name);
            this.addShape(group.getShape());
        }

        /**
         * Create a new KComponent and adds it to the modelLayer
         * @param name
         */
        Editor.prototype.addComponent = function(name) {
            var comp = new KComponent(name);
            this.addShape(comp.getShape());
        }

        /**
         * Create a new KNode and adds it to the modelLayer
         * @param name
         */
        Editor.prototype.addNode = function(name) {
            var node = new KNode(name);
            this.addShape(node.getShape());
        }

        /**
         * Create a new KChannel and adds it to the modelLayer
         * @param name
         */
        Editor.prototype.addChannel = function(name) {
            var channel = new KChannel(name);
            this.addShape(channel.getShape());
        }

        /**
         * Add the given Shape (Kinetic Shape type) to the
         * model layer in the stage and redraw the layer
         * @param shape
         */
        Editor.prototype.addShape = function(shape) {
            this.modelLayer.add(shape);
            this.modelLayer.draw();
        }

        Editor.prototype.addJSONShape = function(json) {
            var shape = Kinetic.Node.create(json);
            this.addShape(shape);
        }

        return Editor;
    }
);