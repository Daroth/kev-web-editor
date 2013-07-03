define(
    [
        'templates/instance-props',
        'templates/fragment-dependant-props',
        'util/Util',
        'kotlin/kotlin-maps'
    ],
    function (instancePropsTemplate, fragDepPropsTemplate, Util, Kotlin) {

        // kevoree model constants for attributes type
        var ENUM    = 'enum=',
            RAW     = 'raw=';

        function UIInstanceProps(ctrl) {
            this._ctrl = ctrl;
            this._attrs = [];
            this._values = [];

            var tDef = ctrl.getEditor().getModel().findTypeDefinitionsByID(ctrl.getType()),
                dicType = tDef.getDictionaryType();

            if (dicType) {
                this._attrs = dicType.getAttributes();
                this._values = dicType.getDefaultValues();
            }

            $('#prop-popup').on('hidden', function () {
                $('#prop-popup-content').empty(); // clear props content when hide
            });
        }

        UIInstanceProps.prototype.onDeleteInstance = function () {
            this._ctrl.p2cRemoveEntity();
        }

        UIInstanceProps.prototype.onSaveProperties = function () {
            this._ctrl.p2cSaveProperties(this.getPropertiesValues());
        }

        UIInstanceProps.prototype.getPropertiesValues = function () {
            var props = {};
            props['name'] = $('#instance-prop-name').val();

            for (var i=0; i < this._attrs.size(); i++) {
                var attr = this._attrs.get(i);
                if (!Util.parseBoolean(attr.getFragmentDependant())) {
                    props[attr.getName()] = $('#instance-prop-'+attr.getName()).val();
                }
            }

            return props;
        }

        UIInstanceProps.prototype.show = function () {
            var that = this;
            $('#prop-popup-delete').off('click'); // get rid of old listeners on '#delete'
            $('#prop-popup-delete').on('click', function() {
                that.onDeleteInstance();
            });

            $('#prop-popup-save').off('click');
            $('#prop-popup-save').on('click', function () {
                that.onSaveProperties();
            });

            $('#prop-popup-subtitle').html(this._ctrl.getEntityType());
            $('#instance-prop-name').val(this._ctrl.getName());
            $('#prop-popup-content').html(this.getHTML());
            this.onHTMLAppended();
            $('#prop-popup').modal({ show: true });
        }

        UIInstanceProps.prototype.getHTML = function () {
            var defaultValues = [];
            // retrieving default values from model
            for (var i=0; i < this._values.size(); i++) {
                defaultValues[this._values.get(i).getAttribute().getName()] = this._values.get(i).getValue();
            }

            console.log("defaultValues: ", defaultValues);

            var attrsTemplateHTML = instancePropsTemplate({
                name: this._ctrl.getName(),
                attrs: getAttributesParams(this._ctrl._instance.getDictionary(), this._attrs, defaultValues)
            });

            var fragDepAttrsTemplateHTML = fragDepPropsTemplate({
                nodes: getFragDepAttributesParams(
                    this._ctrl._instance.getDictionary(),
                    this.getConnectedFragments(),
                    defaultValues,
                    this._attrs
                )
            });

            return attrsTemplateHTML + fragDepAttrsTemplateHTML;
        }

        UIInstanceProps.prototype.onHTMLAppended = function () {}

        UIInstanceProps.prototype.getConnectedFragments = function () {
            return new Kotlin.ArrayList();
        }

        function getAttributesParams(dictionary, dicAttrs, defaultValues) {
            var attrs = [];

            for (var i=0; i < dicAttrs.size(); i++) {
                var attr = dicAttrs.get(i);
                if (!Util.parseBoolean(attr.getFragmentDependant())) {
                    // default attr
                    var obj = {
                        name: attr.getName(),
                        type: 'raw',
                        value: getDefaultOrSavedValue(dictionary, defaultValues, attr.getName(), null, false)
                    };

                    // if RAW or ENUM, process content a bit
                    if (attr.getDatatype().substr(0, ENUM.length) == ENUM) { // attr.getDatatype() starts with "enum="
                        var str = attr.getDatatype().substr(ENUM.length, attr.getDatatype().length);
                        var valueToSelect = obj.value;
                        obj.value = str.split(',');
                        obj.type = 'enum';
                        obj.selected = obj.value.indexOf(valueToSelect);

                    } else if (attr.getDatatype().substr(0, RAW.length) == RAW) { // attr.getDatatype() starts with "raw="
                        obj.value = attr.getDatatype().substr(RAW.length, attr.getDatatype().length);
                    }

                    attrs.push(obj);
                }
            }

            return attrs;
        }

        function getFragDepAttributesParams(dictionary, subNodes, defaultValues, dicAttrs) {
            var nodes = [];

            // browsing this instance's subnodes
            for (var j=0; j< subNodes.size(); j++) {
                var attrs = [];

                for (var i=0; i < dicAttrs.size(); i++) {
                    var attr = dicAttrs.get(i);
                    if (Util.parseBoolean(attr.getFragmentDependant())) {
                        // fragment dependant attribute
                        var obj = {
                            name: attr.getName(),
                            type: 'raw',
                            value: getDefaultOrSavedValue(dictionary, defaultValues, attr.getName(), subNodes.get(j).getName(), true)
                        };

                        // if RAW or ENUM, process content a bit
                        if (attr.getDatatype().substr(0, ENUM.length) == ENUM) { // attr.getDatatype() starts with "enum="
                            var str = attr.getDatatype().substr(ENUM.length, attr.getDatatype().length);
                            obj.value = str.split(',');
                            obj.type = 'enum';
                            obj.selected = obj.value.indexOf(attr.value);

                        } else if (attr.getDatatype().substr(0, RAW.length) == RAW) { // attr.getDatatype() starts with "raw="
                            obj.value = attr.getDatatype().substr(RAW.length, attr.getDatatype().length);
                        }

                        attrs.push(obj);
                    }
                }

                nodes.push({
                    name: subNodes.get(j).getName(),
                    attrs: attrs
                });
            }

            return nodes;
        }

        function getDefaultOrSavedValue(dictionary, defaultValues, attrName, targetNode, fragmentDependant) {
            var savedVal = null;

            if (dictionary) {
                var values = dictionary.getValues();

                for (var i=0; i < values.size(); i++) {
                    var dicVal = values.get(i);

                    if (dicVal.getAttribute().getName() == attrName) {
                        if (fragmentDependant) {
                            if (dicVal.getTargetNode() && dicVal.getTargetNode().getName() == targetNode) {
                                savedVal = dicVal.getValue();
                                break;
                            }
                        } else {
                            savedVal = dicVal.getValue();
                            break;
                        }
                    }
                }
            }

            return savedVal || defaultValues[attrName];
        }

        return UIInstanceProps;
    }
);