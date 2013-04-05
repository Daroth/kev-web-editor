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

        /**
         * Creates a new KGroup and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addGroup = function(type) {
            var group = new KGroup(type);
            this.addShape(group.getShape());
        }

        /**
         * Creates a new KComponent and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addComponent = function(type) {
            var comp = new KComponent(type);
            this.addShape(comp.getShape());
        }

        /**
         * Creates a new KNode and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addNode = function(type) {
            var node = new KNode(type);
            this.addShape(node.getShape());
        }

        /**
         * Creates a new KChannel and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addChannel = function(type) {
            var channel = new KChannel(type);
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