define(
    [ // dependencies
        'app/entities/KGroup',
        'app/entities/KChannel',
        'app/entities/KComponent',
        'app/entities/KNode',
        'app/entities/KWire',
        'app/entities/WireTable'
    ],

    function (KGroup, KChannel, KComponent, KNode, KWire, WireTable) {
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
                    that._currentWire = null;
                    that._wiringTask = false;
                }
            });
        }

        /**
         * Creates a new KGroup and adds it to the modelLayer
         * @param type
         * @param handler
         */
        Editor.prototype.addGroup = function(type, handler) {
            var that = this;

            var group = new KGroup(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(group.getShape());
            group.setWireListener({
                onWireCreationStart: function(position) {
                    // user starts the creation of a wire
                    that._wiringTask = true;
                    that._currentWire = new KWire(that._wireLayer);
                    that._currentWire.setOrigin(position);
                    that._currentWire.setTarget(position);
                    that._wireTable.push(that._currentWire);
                    group.addWire(that._currentWire);
                }
            });

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new KComponent and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addComponent = function(type) {
            var that = this;

            var comp = new KComponent(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(comp.getShape());
            comp.setWireListener();

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new KNode and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addNode = function(type) {
            var that = this;

            var node = new KNode(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(node.getShape());
            node.setWireListener({
                onWireCreationEnd: function(position) {
                    // user ends properly the wire task
                    if (that._wiringTask) {
                        that._currentWire.setTarget(position);
                        that._wireTable.draw();
                        that._wiringTask = false;
                        node.addWire(that._currentWire);
                    }
                }
            });

            if (!this._instanceCounter[type]) this._instanceCounter[type] = 0;
            return ++this._instanceCounter[type];
        }

        /**
         * Creates a new KChannel and adds it to the modelLayer
         * @param type
         */
        Editor.prototype.addChannel = function(type) {
            var that = this;

            var channel = new KChannel(type, {
                onDelete: function() {
                    handler.onDelete(--that._instanceCounter[type]);
                }
            });
            this.addShape(channel.getShape());
            channel.setWireListener();

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

        return Editor;
    }
);