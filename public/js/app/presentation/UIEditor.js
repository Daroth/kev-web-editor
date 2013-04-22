define(
    [   // dependencies
        'presentation/widget/WireLayer',
        'bootstrap/modal',
        'jquery',
        'jqueryui/droppable',
        'jqueryui/draggable',
        'jqueryui/effect-highlight'
    ],

    function (WireLayer, _bootstrap, $) {
        var NAMESPACE = '.uieditor';


        function UIEditor(ctrl, containerID) {
            this._ctrl = ctrl;
            this._id = containerID;
            this._currentWire = null;
            this._modelLayer = new Kinetic.Layer();
            this._wireLayer = new WireLayer();
            this._libHeaders = new Array();
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

            // unregister listeners before
            $(window).off(NAMESPACE);
            $('.nav-header').off(NAMESPACE);

            // refresh editor size on window resizing
            $(window).on('resize'+NAMESPACE, function() {
                that._stage.setWidth($('#'+that._id).width());
                that._stage.setHeight($('#'+that._id).height());
                that._stage.draw();
                that._wireLayer.update();
            });

            // foldable lib-tree
            $('.nav-header').on('click'+NAMESPACE, function() {
                var icon = $(this).parent().children().first().children().first();
                icon.toggleClass('icon-arrow-right');
                icon.toggleClass('icon-arrow-down');
                $(this).parent().children('.lib-item').toggle('fast');
            });

            // draggable item in lib-tree
            $('.lib-item').draggable({
                helper: function() {
                    // the div dragged is a clone of the selected
                    // div for the drag without the badge if it exists
                    var clone = $(this)
                        .clone()    // clone the element
                        .children() // select all the children
                        .remove()   // remove all the children
                        .end();     // again go back to selected element
                    clone.addClass('dragged');
                    return clone;
                },
                cursor: 'move',
                cursorAt: {
                    top: -5 // offset mouse cursor over the dragged item
                }
            });

            $(".lib-item[data-entity='ComponentType']").tooltip({
                selector: $(this),
                placement: 'bottom',
                title: "You have to drop this element in a Node",
                trigger: 'hover',
                delay: {
                    show: 500,
                    hide: 0
                }
            });

            // drop behavior on #editor
            $('#editor').droppable({
                drop: function(event, ui) {
                    that._ctrl.p2cEntityDropped();
                    var name = ui.draggable.clone() // clone the element
                        .children()                 // select all the children
                        .remove()                   // remove all the children
                        .end()                      // again go back to selected element
                        .text();
                    var badgeCount = that._ctrl.getEntityCount(name);

                    if (ui.draggable.children().size() != 0) {
                        ui.draggable.children().first().text(badgeCount);
                    } else if (badgeCount != 0) {
                        ui.draggable.append("<span class='badge pull-right'>"+badgeCount+"</span>");
                    }
                },
                over: function(event, ui) {
                    var entity = ui.draggable.attr('data-entity');
                    var env = ui.draggable.attr('data-env');
                    var name = ui.draggable.clone() // clone the element
                        .children()                 // select all the children
                        .remove()                   // remove all the children
                        .end()                      // again go back to selected element
                        .text();
                    that._ctrl.p2cEntityDraggedOver(ui.draggable, entity, env, name);
                },
                out: function () {
                    that._ctrl.p2cEntityDraggedOut();
                }
            });
        }

        UIEditor.prototype.c2pEntityAdded = function(entity) {
            if (this._stage.getPointerPosition()) entity.getShape().setPosition(this._stage.getPointerPosition());
            this.addShape(entity.getShape());
            entity.ready();
        }

        UIEditor.prototype.c2pDropImpossible = function (entity) {
            entity.getDOMItem().effect('highlight', {color: '#f00'}, 500);
            entity.getDOMItem().tooltip('show');
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

        UIEditor.prototype.inflateLibTree = function () {
            $('.lib-tree-info').remove();

            var libz = this._ctrl.getLibraries();

            var libTree = "";
            var libItems = "";
            for (var name in libz) {
                if (Object.prototype.hasOwnProperty.call(libz, name)) {
                    var compz = libz[name];
                    for (var compIndex=0; compIndex < compz.length; compIndex++) {
                        var comp = compz[compIndex];
                        libItems += "<li class='lib-item' data-entity='"+comp.type+"' data-env='"+name+"'>"+comp.name+"</li>";
                    }

                    var htmlContent =
                        "<ul class='nav nav-list'>" +
                            "<li class='nav-header cursor-pointer'>" +
                            "<i class='icon-arrow-right icon-white'></i>"+
                            name+
                            "</li>"+
                            libItems+
                            "</ul>";

                    libTree += htmlContent;
                    libItems = htmlContent = "";
                }
            }

            $('#lib-tree-content').html(libTree);

            this._registerCallbacks();
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