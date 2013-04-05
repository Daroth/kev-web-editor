define(
    [ // dependencies
        'app/entities/KGroup',
        'app/entities/KChannel',
        'app/entities/KComponent',
        'app/entities/KNode'
    ],

    function (KGroup, KChannel, KComponent, KNode) {
        // private fields
        var currentPlug = null,
            wireLayer;

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
            this.modelLayer = new Kinetic.Layer();
            this.stage.add(this.modelLayer);

            // init wire layer
            wireLayer = new Kinetic.Layer();
            this.stage.add(wireLayer);

            this.stage.on('mousemove', function(evt) {
                if (currentPlug != null) {
                    drawWire(currentPlug, this.getMousePosition());
                } else {
                    wireLayer.getCanvas().clear();
                }
            });

            this.stage.on('mousedown', function(evt) {
                if (currentPlug == null) {
                    var node = evt.targetNode;
                    if (node.getName() == KGroup.PLUG_NAME) {
                        node.getParent().setDraggable(false);
                        currentPlug = node;
                        currentPlug['x'] = node.getAbsolutePosition().x;
                        currentPlug['y'] = node.getAbsolutePosition().y;
                    }
                }
            });

            this.stage.on('mouseup', function(evt) {
                if (currentPlug != null) {
                    var node = evt.targetNode;
                    console.log(node.getParent().getName());
                    console.log(">>> "+KNode.NAME);
                    currentPlug.getParent().setDraggable(true);
                    if (node.getParent().getName() == KNode.NAME) {
                        drawWire(currentPlug, node.getAbsolutePosition());
                        currentPlug = null;
                        return;
                    }
                }
                currentPlug = null;
                wireLayer.getCanvas().clear();
            });
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

        var drawWire = function(origin, target) {
            var canvas = wireLayer.getCanvas();
            var context = canvas.getContext();

            canvas.clear();

            // draw curve
            // TODO
            context.beginPath();
            context.moveTo(origin.x, origin.y);
            context.lineTo(target.x, target.y);
//            context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
            context.strokeStyle = '#5aa564';
            context.lineWidth = 4;
            context.stroke();
        }

        return Editor;
    }
);