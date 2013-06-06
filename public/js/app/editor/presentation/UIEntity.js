/*
 * Super class for all UI Entities in Editor
 * Defines the global behavior for this type
 * This should be considered as an Abstract Class
 */
define(
    [
        "jquery",
        "util/StringBuilder",
        "kotlin/kotlin-lib-ecma3",
        "kevoree",
        "bootstrap/multiselect"
    ],

    function($, StringBuilder, Kotlin, Kevoree) {
        /**
         * You shouldn't use this object directly, it should be considered
         * as an abstract object that facilitate the work in sub-classes
         * @param ctrl
         * @constructor
         */
        function UIEntity(ctrl) {
            this._ctrl = ctrl;
            this._isReady = false;
        }

        UIEntity.prototype.getShape = function() {
            return this._shape;
        }

        UIEntity.prototype.setPopup = function() {
            var that = this;
            this._shape.off('dblclick dbltap');
            this._shape.on('dblclick dbltap', function(e) {
                // prevent children from getting the event too
                e.cancelBubble = true;

                $('#prop-popup-delete').off('click'); // get rid of old listeners on '#delete'
                $('#prop-popup-delete').on('click', function() {
                    that._ctrl.p2cRemoveEntity();
                });

                $('#prop-popup-save').off('click');
                $('#prop-popup-save').on('click', function () {
                    var name = $('#prop-popup-name').val();
                    that._ctrl.p2cSaveProperties(name);
                });

                $('#prop-popup-subtitle').html(that._ctrl.getEntityType());
                $('#prop-popup-name').val(that._ctrl.getName());
                $('#prop-popup-content').html(getPropertiesPopupContent(that._ctrl.getEditor().getModel(), that._ctrl.getType(), that));
                $('#node-network-init-by').multiselect({
                    includeSelectAllOption: true,
                    maxHeight: 200
                });
                $('#prop-popup').modal({ show: true });
            });
        }

        /**
         * Returns the absolute position of this entity shape in the stage
         * Sub-classes should override this method and give their own definition
         * of getPosition()
         * @returns {{x: number, y: number}}
         */
        UIEntity.prototype.getPosition = function () {
            return {x: 0, y: 0}; // default position
        }

        UIEntity.prototype.getCtrl = function () {
            return this._ctrl;
        }

        UIEntity.prototype.c2pRemoveEntity = function () {
            if (this._shape.getLayer() !== undefined || this._shape.getLayer() !== null) {
                // retrieve this shape's layer
                var layer = this._shape.getLayer();
                // remove shape from layer
                this._shape.remove();
                // redraw the layer
                layer.draw();
            }
        }

        UIEntity.prototype.setDOMItem = function (item) {
            this._DOMItem = item;
        }

        UIEntity.prototype.getDOMItem = function () {
            return this._DOMItem;
        }

        /**
         * Called when this entity's shape has been added to the stage
         * and so you can use KineticJS methods such as :
         * getLayer(), getStage() etc..
         *
         * TODO change that and give stage to each entity UI ?
         */
        UIEntity.prototype.ready = function() {}

        UIEntity.prototype.isReady = function() {
            return this._isReady;
        }

        UIEntity.prototype.c2pWireCreationStarted = function (wire) {}

        UIEntity.prototype.c2pRefreshWires = function (editor) {
            editor.getWiresLayer().draw();
        }

        UIEntity.prototype.c2pPropertiesUpdated = function () {
            this._shape.getLayer().draw();
        }

        /**
         * Do not rely on that, in KineticJS, groups do not have
         * width & height defined, so you MUST override this method
         * @returns {number} the width of this shape
         */
        UIEntity.prototype.getWidth = function () {
            return this._shape.getWidth();
        }

        /**
         * Do width & height defined, so you MUST override this method
         * @returns {number} the height of this shape
         */
        UIEntity.prototype.getHeight = function () {
            return this._shape.getHeight();
        }

        /**
         * Set this entity's shape draggable or not. If the 'parentsToo' given parameter is true,
         * then its parents draggable state will also be changed. Otherwise, just
         * this shape draggable state will be updated. Same for 'childrenToo', that will change
         * the draggable state of this entity's children if set to true
         * @param isDraggable {boolean}
         * @param parentsToo {boolean}
         * @param childrenToo {boolean}
         */
        UIEntity.prototype.setDraggable = function (isDraggable, parentsToo, childrenToo) {
            // set this entity's shape draggable state
            this._shape.setDraggable(isDraggable);

            // check for parents flag
            if (parentsToo && this._ctrl.getParent && this._ctrl.getParent()) {
                this._ctrl.getParent().getUI().setDraggable(isDraggable, true, false);
            }

            // check for children flag
            if (childrenToo && this._ctrl.getChildren) {
                var children = this._ctrl.getChildren();
                for (var i=0; i < children.length; i++) {
                    children[i].getUI().setDraggable(isDraggable, false, true);
                }
            }
        }

        // private method
        function getPropertiesPopupContent(model, _tDef, ui) {
            var tDef = model.findTypeDefinitionsByID(_tDef),
                dicType = tDef.getDictionaryType(),
                builder = new StringBuilder();

            if (dicType) {
                var attrs = dicType.getAttributes(),
                    values = dicType.getDefaultValues();

                for (var i=0; i < attrs.size(); i++) {
                    builder.append('<div class="row-fluid">');
                    var attr = attrs.get(i);
                    attr['value'] = null;
                    for (var j=0; j < values.size(); j++) {
                        var value = values.get(j);
                        if (attr.getName() == value.getAttribute().getName()) {
                            attr['value'] = value.getValue();
                        }
                    }
                    builder.append('<div class="span4">'+attr.getName()+'</div>')
                        .append('\n')
                        .append(generatePropertyValueField(attr.getDatatype(), attr.value))
                        .append('</div>');
                }
            }

            if (Kotlin.isType(tDef, Kevoree.org.kevoree.impl.NodeTypeImpl)) {
                // if this entity is a node, add some special properties
                builder.append('<div class="row-fluid">')
                    .append('<div class="span4">Reachable from</div>')
                    .append('<select id="node-network-init-by" multiple="multiple">')
                    .append(generateOptions())
                    .append('</select>')
                    .append('</div>');


                function generateOptions() {
                    var nodes = model.getNodes();
                    var opts = new StringBuilder();
                    for (var i=0; i < nodes.size(); i++) {
                        if (nodes.get(i).getName() != ui._ctrl.getName()) {
                            opts.append('<option value="')
                                .append(nodes.get(i).getName())
                                .append('">')
                                .append(nodes.get(i).getName())
                                .append('</option>');
                        }
                    }
                    return opts.toString();
                }

                builder.append('</div>');

                builder.append('<div class="row-fluid" style="margin-top: 10px;">')
                    .append('<div class="span4">Network address</div>')
                    .append('<input type="text" class="span8" placeholder="Network address" />')
                    .append('</div>');

                builder.append('<div class="row-fluid">')
                    .append('<button type="button" class="btn btn-inverse span4 offset1">Push</button>')
                    .append('<button type="button" class="btn btn-inverse span4 offset2">Pull</button>')
                    .append('</div>');

                builder.append('<div class="row-fluid" style="margin-top: 10px;">')
                    .append('<div class="progress progress-info progress-striped active">')
                    .append('<div class="bar" style="width: 0%"></div>')
                    .append('</div>')
                    .append('</div>');
            }

            return builder.toString();
        }

        // private method
        function generatePropertyValueField(datatype, defaultVal) {
            var ENUM    = 'enum=',
                RAW     = 'raw=';
            if (datatype.substr(0, ENUM.length) == ENUM) { // datatype starts with enum=
                var str = datatype.substr(ENUM.length, datatype.length);
                var values = str.split(',');
                var builder = new StringBuilder('<select class="span8">');
                for (var i=0; i < values.length; i++) {
                    builder.append('<option value="')
                        .append(values[i])
                        .append('" ')
                        .append(((defaultVal == values[i]) ? 'selected' : ''))
                        .append('>')
                        .append(values[i])
                        .append('</option>');
                }
                builder.append('</select>');
                return builder.toString();

            } else if (datatype.substr(0, RAW.length) == RAW) { // datatype starts with raw=
                var value = datatype.substr(RAW.length, datatype.length);
                switch (value) {
                    case 'java.lang.Long':
                    case 'java.lang.Integer':
                        return ['<input type="number" class="span8" value="', defaultVal, '"/>'].join('');

                    default:
                        break;
                }

            } else {
                switch (defaultVal) {
                    case 'true':
                    case 'false':
                        var builder = new StringBuilder('<select class="span8">');
                        builder.append('<option value="true" ');
                        if (defaultVal == 'true') builder.append('selected');
                        builder.append('>true</option>');
                        builder.append('<option value="false" ');
                        if (defaultVal == 'false') builder.append('selected');
                        builder.append('>false</option>');
                        return builder.toString();

                    default:
                        break;
                }
            }

            return ['<input type="text" class="span8" value="', defaultVal, '"/>'].join('');
        }

        return UIEntity;
    }
);