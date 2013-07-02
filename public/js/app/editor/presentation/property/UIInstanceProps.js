define(
    [
        'templates/instance-props',
        'util/Util'
    ],
    function (instancePropsTemplate, Util) {

        // kevoree model constants for attributes type
        UIInstanceProps.ENUM    = 'enum=';
        UIInstanceProps.RAW     = 'raw=';

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
            var html = '';

            // update attributes values if any
            if (this._ctrl._instance) {
                var dicInst = this._ctrl._instance.getDictionary();
                if (dicInst) {
                    this._values = dicInst.getValues();
                }
            }

            var attrs = [];
            for (var i=0; i < this._attrs.size(); i++) {
                var attr = this._attrs.get(i);
                attr['value'] = null;
                for (var j=0; j < this._values.size(); j++) {
                    var value = this._values.get(j);
                    if (attr.getName() == value.getAttribute().getName()) {
                        attr['value'] = value.getValue();
                    }
                }

                // default attr
                var obj = {
                    name: attr.getName(),
                    type: 'raw',
                    value: attr.value
                };

                // if RAW or ENUM, process content a bit
                if (attr.getDatatype().substr(0, UIInstanceProps.ENUM.length) == UIInstanceProps.ENUM) { // attr.getDatatype() starts with "enum="
                    var str = attr.getDatatype().substr(UIInstanceProps.ENUM.length, attr.getDatatype().length);
                    obj.value = str.split(',');
                    obj.type = 'enum';
                    obj.selected = obj.value.indexOf(attr.value);

                } else if (attr.getDatatype().substr(0, UIInstanceProps.RAW.length) == UIInstanceProps.RAW) { // attr.getDatatype() starts with "raw="
                    obj.value = attr.getDatatype().substr(UIInstanceProps.RAW.length, attr.getDatatype().length);
                }

                // add obj to attrs array if attr is not fragment dependant
                if (!Util.parseBoolean(attr.getFragmentDependant())) {
                    attrs.push(obj);
                }
            }

            // give attrs array to jade template and retrieve HTML
            return instancePropsTemplate({
                name: this._ctrl.getName(),
                attrs: attrs
            });

            return html;
        }

        UIInstanceProps.prototype.onHTMLAppended = function () {}

        return UIInstanceProps;
    }
);