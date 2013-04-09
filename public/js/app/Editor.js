define(
    [ // dependencies
        'app/presentation/UIGroup',
        'app/presentation/UIChannel',
        'app/presentation/UIComponent',
        'app/presentation/UINode',
        'app/presentation/UIWire',
        'app/factory/CFactory',
        'app/util/WireTable'
    ],

    function (UIGroup, UIChannel, UIComponent, UINode, UIWire, CFactory, WireTable) {
        function Editor(containerID) {
            this._id = containerID;
            this._instanceCounter = new Array();
            this._currentWire = null;
            this._wiringTask = false;
            this._modelLayer = new Kinetic.Layer();
            this._wireLayer = new Kinetic.Layer();
            this._wireTable = new WireTable(this._wireLayer);
        }

        Editor.prototype.create = function(width, height) {
            // init stage
            this._stage = new Kinetic.Stage({
                container: this._id,
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
            this._stage.add(bgLayer);

            // add model layer to stage (layer for entities)
            this._stage.add(this._modelLayer);

            // add wire layer to stage
            this._stage.add(this._wireLayer);

            //===========================
            // Event handlers
            //===========================
            var that = this;

            this._stage.on('mousemove', function() {
                if (that._wiringTask) {
                    that._currentWire.setTarget(that._stage.getMousePosition());
                    that._wireTable.draw();
                }
            });

            this._stage.on('mouseup', function() {
                if (that._wiringTask) {
                    // if we end up here, it means that the wiringTask ends up badly
                    that._wireTable.pop();
                    that._currentWire = null;
                    that._wiringTask = false;
                }
            });
        }

        /**
         * Creates a new UIGroup and adds it to the modelLayer
         * @param type
         * @param handler
         */
        Editor.prototype.addGroup = function(type, handler) {
            var that = this;

            var group = CFactory.instance.newGroup(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });

            this.addShape(group.getUI().getShape());
            group.getUI().setWireListener({
                onWireCreationStart: function(position) {
                    // user starts the creation of a wire
                    that._wiringTask = true;
                    that._currentWire = new UIWire(that._wireLayer);
                    that._currentWire.setOrigin(position);
                    that._currentWire.setTarget(position);
                    that._wireTable.push(that._currentWire);
                    group.getUI().addWire(that._currentWire);
                }
            });

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new UIComponent and adds it to the modelLayer
         * @param type
         * @param handler
         */
        Editor.prototype.addComponent = function(type, handler) {
            var that = this;

            var comp = CFactory.instance.newComponent(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(comp.getUI().getShape());
            comp.getUI().setWireListener();

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new UINode and adds it to the modelLayer
         * @param type
         * @param handler
         */
        Editor.prototype.addNode = function(type, handler) {
            var that = this;

            var node = CFactory.instance.newNode(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(node.getUI().getShape());
            node.getUI().setWireListener({
                onWireCreationEnd: function(position) {
                    // user ends properly the wire task
                    if (that._wiringTask) {
                        that._currentWire.setTarget(position);
                        that._wireTable.draw();
                        that._wiringTask = false;
                        node.getUI().addWire(that._currentWire);
                    }
                }
            });

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new UIChannel and adds it to the modelLayer
         * @param type
         * @param handler
         */
        Editor.prototype.addChannel = function(type, handler) {
            var that = this;

            var channel = CFactory.instance.newChannel(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(channel.getUI().getShape());
            channel.getUI().setWireListener();

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Add the given Shape to the
         * model layer in the stage and redraw the layer
         * @param shape
         */
        Editor.prototype.addShape = function(shape) {
            this._modelLayer.add(shape);
            this._modelLayer.draw();
        }

        Editor.prototype.getStage = function() {
            return this._stage;
        }

        return Editor;
    }
);