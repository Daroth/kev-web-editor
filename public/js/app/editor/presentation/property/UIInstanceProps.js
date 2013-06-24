define(
    function () {

        function UIInstanceProps(ui, ctrl) {
            this._ui = ui;
            this._ctrl = ctrl;
            this._attrs = null;
            this._values = null;

            var tDef = ctrl.getEditor().getModel().findTypeDefinitionsByID(ctrl.getType()),
                dicType = tDef.getDictionaryType();

            if (dicType) {
                this._attrs = dicType.getAttributes();
                this._values = dicType.getDefaultValues();
            }

            this._name = $('#prop-popup-name');

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
            props['name'] = this._name.val();

            if (this._attrs) {
                for (var i=0; i < this._attrs.size(); i++) {
                    var attr = this._attrs.get(i);
                    props[attr.getName()] = $('#'+attr.getName()+'-'+this._ctrl.getName()).val();
                }
            }

            return props;
        }

        UIInstanceProps.prototype.show = function () {
            // update attributes values if any
            if (this._ctrl._instance) {
                var dicInst = this._ctrl._instance.getDictionary();
                if (dicInst) {
                    this._values = dicInst.getValues();
                }
            }

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
            this._name.val(this._ctrl.getName());
            $('#prop-popup-content').html(this.getHTML());
            this.onHTMLAppended();
            $('#prop-popup').modal({ show: true });
        }

        UIInstanceProps.prototype.getHTML = function () {
            var html = '';

            if (this._attrs) {
                for (var i=0; i < this._attrs.size(); i++) {
                    html += '<div class="row-fluid">';
                    var attr = this._attrs.get(i);
                    attr['value'] = null;
                    for (var j=0; j < this._values.size(); j++) {
                        var value = this._values.get(j);
                        if (attr.getName() == value.getAttribute().getName()) {
                            attr['value'] = value.getValue();
                        }
                    }
                    html += '<div class="span4">'+attr.getName()+'</div>' +
                                generatePropertyValueField(attr.getName()+'-'+this._ctrl.getName(), attr.getDatatype(), attr.value) +
                            '</div>';
                }
            }

            return html;
        }

        // private method
        function generatePropertyValueField(attrID, datatype, defaultVal) {
            var ENUM    = 'enum=',
                RAW     = 'raw=';
            if (datatype.substr(0, ENUM.length) == ENUM) { // datatype starts with enum=
                var str = datatype.substr(ENUM.length, datatype.length);
                var values = str.split(',');
                var html = '<select id="'+attrID+'" class="span8">';
                for (var i=0; i < values.length; i++) {
                    var selected = ((defaultVal == values[i]) ? 'selected' : '');
                    html += '<option value="' + values[i] + '" ' + selected + '>' + values[i] + '</option>';
                }
                html += '</select>';
                return html;

            } else if (datatype.substr(0, RAW.length) == RAW) { // datatype starts with raw=
                var value = datatype.substr(RAW.length, datatype.length);
                switch (value) {
                    case 'java.lang.Long':
                    case 'java.lang.Integer':
                        return '<input id="'+attrID+'" type="number" class="span8" value="' +defaultVal+'"/>';

                    default:
                        break;
                }

            } else {
                switch (defaultVal) {
                    case 'true':
                    case 'false':
                        var trueSelected = (defaultVal == 'true') ? 'selected' : '',
                            falseSelected = (defaultVal == 'false') ? 'selected' : '';
                        return '' +
                            '<select id="'+attrID+'" class="span8">' +
                                '<option value="true" ' + trueSelected + '>true</option>' +
                                '<option value="false" ' + falseSelected + '>false</option>' +
                            '</select>';
                    default:
                        break;
                }
            }

            return '<input id="'+ attrID+ '" type="text" class="span8" value="'+ defaultVal+ '"/>';
        }

        UIInstanceProps.prototype.onHTMLAppended = function () {

        }

        return UIInstanceProps;
    }
);