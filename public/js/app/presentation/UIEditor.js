define(
    [   // dependencies
        'jquery',
        'app/presentation/widget/WireLayer'
    ],

    function ($, WireLayer) {

        function UIEditor(ctrl, containerID) {
            this._ctrl = ctrl;
            this._id = containerID;
            this._currentWire = null;
            this._wires = new Array();
            this._modelLayer = new Kinetic.Layer();
            this._wireLayer = new WireLayer();
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
                    height: bgImg.height,
                    name: "datBackground"
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
            this._stage.add(this._wireLayer.getKineticLayer());

            //===========================
            // Event handlers
            //===========================
            var that = this;

            this._stage.on('mousemove', function() {
                that._ctrl.p2cMouseMove(this.getPointerPosition());
            });

            this._stage.on('mouseup', function() {
                that._ctrl.p2cMouseUp(this.getPointerPosition());
            });

            this._registerCallbacks();
        }

        UIEditor.prototype._registerCallbacks = function () {
            var that = this;

            // refresh editor size on window resizing
            $(window).resize(function() {
                that._stage.setWidth($('#'+that._id).width());
                that._stage.setHeight($('#'+that._id).height());
                that._stage.draw();
            });

            // foldable lib-tree
            $('.nav-header').click(function() {
                var icon = $(this).parent().children().first().children().first();
                icon.toggleClass('icon-arrow-right');
                icon.toggleClass('icon-arrow-down');
                $(this).parent().children('.lib-item').toggle('fast');
            });

            // draggable item in lib-tree
            $('.lib-item').draggable({
                helper: function() {
                    // the div dragged is a clone of the selected
                    // div for the drag
                    var clone = $(this).clone();
                    clone.addClass('dragged');
                    return clone;
                },
                cursor: 'move',
                cursorAt: {
                    top: -5 // offset mouse cursor over the dragged item
                }
            });

            $(".lib-item[data-entity='component']").hover(function () {
                $(this).tooltip({
                    selector: $(this),
                    placement: 'bottom',
                    title: "You have to drag'n'drop component in Node in order to add them to the model"
                });
                $(this).tooltip('show');
            });

            $('.lib-item').click(function() {
                triggerEvent($(this));
            });

            // drop behavior on #editor
            $('#editor').droppable({
                drop: function(event, ui) {
                    triggerEvent(ui.draggable);
                },
                over: function(event, ui) {
                    console.log("over");
                    that._ctrl.p2cEntityDraggedOver(ui.draggable.attr('data-entity'));
                },
                out: function (event, ui) {
                    that._ctrl.p2cEntityDraggedOut();
                }
            });

            var triggerEvent = function(libItem) {
                var entity = libItem.attr('data-entity');
                var type = libItem.clone()      // clone the element
                    .children()                 // select all the children
                    .remove()                   // remove all the children
                    .end()                      // again go back to selected element
                    .text();                    // get the text of element

                that._ctrl.p2cAddEntity(libItem, entity, type);
                var badgeCount = that._ctrl.getEntityCount(type);

                if (libItem.children().size() != 0) {
                    libItem.children().first().text(badgeCount);
                } else {
                    libItem.append("<span class='badge pull-right'>"+badgeCount+"</span>");
                }
            }
        }

        UIEditor.prototype.c2pEntityAdded = function(entity) {
            if (this._stage.getPointerPosition()) entity.getShape().setPosition(this._stage.getPointerPosition());
            this.addShape(entity.getShape());
            entity.ready();
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
                this._wires.splice(this._wires.indexOf(wires[i]), 1);
            }
        }

        UIEditor.prototype.c2pUpdateWire = function (wire, position) {
            wire.setTargetPoint(position);
            this._wireLayer.draw();
        }

        UIEditor.prototype.getWiresLayer = function () {
            return this._wireLayer;
        }

        UIEditor.prototype.c2pEntityUpdated = function (entity) {
            this._stage.draw();
            this._wireLayer.draw();
        }

        UIEditor.prototype.c2pWireAdded = function (wire) {
            this._wireLayer.add(wire);
        }

        /**
         * Add the given Shape to the
         * model layer in the stage and redraw the layer
         * @param shape
         */
        UIEditor.prototype.addShape = function (shape) {
            this._modelLayer.add(shape);
            this._modelLayer.draw();
        }

        UIEditor.prototype.getStage = function () {
            return this._stage;
        }

        UIEditor.prototype.draw = function () {
            this._stage.draw();
            this._wireLayer.draw();
        }

        return UIEditor;
    }
);