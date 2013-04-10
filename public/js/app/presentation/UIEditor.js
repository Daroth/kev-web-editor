define(
    [   // dependencies
        'require',
        'app/presentation/UIGroup',
        'app/presentation/UIChannel',
        'app/presentation/UIComponent',
        'app/presentation/UINode',
        'app/presentation/UIWire',
        'app/util/WireTable'
    ],

    function (require, UIGroup, UIChannel, UIComponent, UINode, UIWire, WireTable) {

        function UIEditor(ctrl, containerID) {
            this._ctrl = ctrl;
            this._id = containerID;
            this._currentWire = null;
            this._wiringTask = false;
            this._modelLayer = new Kinetic.Layer();
            this._wireLayer = new Kinetic.Layer();
            this._wireTable = new WireTable(this._wireLayer);
        }

        UIEditor.prototype.create = function(width, height) {
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
                    that._currentWire.getUI().setTargetPoint(that._stage.getMousePosition());
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

        UIEditor.prototype.c2pEntityAdded = function(entity) {
            var that = this;

            this.addShape(entity.getShape());

            entity.setWireListener({
                onWireCreationStart: function(position) {
                    // user starts the creation of a wire
                    that._currentWire = require('app/factory/CFactory').getInstance().newWire(that._wireLayer);
                    that._currentWire.setOrigin(entity.getCtrl());
                    that._currentWire.getUI().setTargetPoint(position);
                    that._wireTable.push(that._currentWire);
                    entity.getCtrl().addWire(that._currentWire);
                    that._wiringTask = true;
                },

                onWireCreationEnd: function(position) {
                    // user ends properly the wire task
                    if (that._wiringTask) {
                        that._currentWire.setTarget(entity.getCtrl());
                        that._wireTable.draw();
                        that._wiringTask = false;
                        entity.getCtrl().addWire(that._currentWire);
                    }
                }
            });
        }

        /**
         * Called by the controller of this UI when it has allowed
         * the entity (given in parameter) to be removed.
         * When this method is called, the editor does not contain
         * this entity anymore
         * @param entity the removed entity
         */
        UIEditor.prototype.c2pEntityRemoved = function(entity) {
            var badgeCount = this._ctrl.getEntityCount(entity.getCtrl().getType());

            if (badgeCount == 0) {
                entity.getDOMItem().find('.badge').remove();
            } else {
                entity.getDOMItem().children().first().text(badgeCount);
            }

            var wires = entity.getCtrl().getWires();
            for (var i=0; i < wires.length; i++) {
                this._wireTable.remove(wires[i]);
            }
            this._wireTable.draw();
        }

        /**
         * Add the given Shape to the
         * model layer in the stage and redraw the layer
         * @param shape
         */
        UIEditor.prototype.addShape = function(shape) {
            this._modelLayer.add(shape);
            this._modelLayer.draw();
        }

        UIEditor.prototype.getStage = function() {
            return this._stage;
        }

        UIEditor.prototype.draw = function () {
            this._stage.draw();
            this._wireTable.draw();
        }

        return UIEditor;
    }
);