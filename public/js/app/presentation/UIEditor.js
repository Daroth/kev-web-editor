define(
    [   // dependencies
        'presentation/widget/WireLayer',
        'util/ModelHelper',
        'bootstrap/modal',
        'jquery',
        'jqueryui/droppable',
        'jqueryui/draggable',
        'jqueryui/effect-highlight',
        'tinysort'
    ],

    function (WireLayer, ModelHelper, _bootstrap, $) {
        var NAMESPACE = '.uieditor',
            libTreeFolded = false,
            displayableItems = [];


        function UIEditor(ctrl, containerID) {
            this._ctrl = ctrl;
            this._id = containerID;
            this._currentWire = null;
            this._modelLayer = new Kinetic.Layer();
            this._wireLayer = new WireLayer();
            this._modelHelper = new ModelHelper();
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
            bgImg.src = "/img/background.jpg";
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
            // refresh editor size on window resizing
            $(window).on('resize'+NAMESPACE, function() {
                that._stage.setWidth($('#'+that._id).width());
                that._stage.setHeight($('#'+that._id).height());
                that._stage.draw();
                that._wireLayer.update();
            });

            // foldable lib-tree
            $('.nav-header').off(NAMESPACE);
            $('.nav-header').on('click'+NAMESPACE, function() {
                var icon = $(this).parent().children().first().children().first();
                if (icon.hasClass('icon-arrow-right')) {
                    // all items are showed, hide them
                    $(this).siblings().hide('fast');
                    icon.removeClass('icon-arrow-right');
                    icon.addClass('icon-arrow-down');
                } else {
                    // all items are hidden, reveal them
                    showLibTreeItems($(this), icon);
                }
            });

            // search field
            $('#lib-tree-search').off(NAMESPACE);
            $('#lib-tree-search').on('keyup'+NAMESPACE, function () {
                $('.lib-item').filter(function () {
                    var itemName = $(this).text().toLowerCase();
                    var searchVal = $('#lib-tree-search').val().toLowerCase();
                    if (itemName.search(searchVal) == -1) {
                        $(this).hide();
                    } else {
                        if (displayableItems[$(this).attr('data-entity')]) {
                            $(this).show();
                        }
                    }
                });
            });

            // convenient handler for checkbox checking while link are clicked
            // in lib-tree-settings menu
            $('[id^=lib-tree-settings-filter-]').off(NAMESPACE);
            $('[id^=lib-tree-settings-filter-]').on('click'+NAMESPACE, function () {
                var cb = $(this).children('.checkbox').first();
                cb.prop('checked', !cb.prop('checked'));
                cb.trigger('click');
                return false;
            });

            // filtering libtree items according to their types
            $('[id^=lib-tree-settings-filter-] .checkbox').off(NAMESPACE);
            $('[id^=lib-tree-settings-filter-] .checkbox').on('click'+NAMESPACE, function () {
                var isChecked = !$(this).prop('checked');
                var entity = $(this).val();
                if (isChecked) {
                    // show 'type'
                    displayableItems[entity] = true;
                    $('.lib-item[data-entity='+entity+']').each(function () {
                        $(this).show('fast');
                    });
                } else {
                    // hide 'type'
                    displayableItems[entity] = false;
                    $('.lib-item[data-entity='+entity+']').each(function () {
                        $(this).hide('fast');
                    });
                }
            });

            $('#lib-tree-settings-toggle-fold').off(NAMESPACE);
            $('#lib-tree-settings-toggle-fold').on('click'+NAMESPACE, function () {
                if (libTreeFolded) {
                    // unfold libtree
                    $('.nav-header').each(function (index) {
                        var icon = $(this).children().first();
                        if (icon.hasClass('icon-arrow-down')) {
                            showLibTreeItems($(this), icon);
                        }
                    });
                    libTreeFolded = false;
                } else {
                    // fold libtree
                    $('.nav-header').each(function (index) {
                        var icon = $(this).children().first();
                        if (icon.hasClass('icon-arrow-right')) {
                            $(this).siblings().hide('fast');
                            icon.removeClass('icon-arrow-right');
                            icon.addClass('icon-arrow-down');
                        }
                    });
                    libTreeFolded = true;
                }
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

            // tooltip on ComponentType
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

        UIEditor.prototype.c2pInflateLibTree = function () {
            $('.lib-tree-info').remove();

            var libz = this._modelHelper.getLibraries(this._ctrl.getModel());

            var libTree = "";
            var libItems = "";
            for (var i=0; i < libz.length; i++) {
                var compz = libz[i].components;
                for (var compIndex=0; compIndex < compz.length; compIndex++) {
                    var comp = compz[compIndex];
                    libItems += "<li class='lib-item' data-entity='"+comp.type+"' data-env='"+libz[i].name+"'>"+comp.name+"</li>";
                    displayableItems[comp.type] = true;
                }

                var htmlContent =
                    "<ul class='nav nav-list'>" +
                        "<li class='nav-header cursor-pointer'>" +
                        "<i class='icon-arrow-right icon-white'></i>"+
                        libz[i].name+
                        "</li>"+
                        libItems+
                        "</ul>";

                libTree += htmlContent;
                libItems = htmlContent = "";
            }

            $('#lib-tree-content').html(libTree);
            $('.nav-list, .lib-item').tsort();

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

        //==========================
        function showLibTreeItems(elem, icon) {
            elem.siblings().each(function () {
                if (displayableItems[$(this).attr('data-entity')]) {
                    $(this).show('fast');
                }
            });
            icon.addClass('icon-arrow-right');
            icon.removeClass('icon-arrow-down');
        }
    }
);