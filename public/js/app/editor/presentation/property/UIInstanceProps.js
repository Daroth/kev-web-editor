define(
    [
        'util/StringBuilder'
    ],

    function (StringBuilder) {

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
            var builder = new StringBuilder();

            if (this._attrs) {
                for (var i=0; i < this._attrs.size(); i++) {
                    builder.append('<div class="row-fluid">');
                    var attr = this._attrs.get(i);
                    attr['value'] = null;
                    for (var j=0; j < this._values.size(); j++) {
                        var value = this._values.get(j);
                        if (attr.getName() == value.getAttribute().getName()) {
                            attr['value'] = value.getValue();
                        }
                    }
                    builder.append('<div class="span4">'+attr.getName()+'</div>')
                        .append('\n')
                        .append(generatePropertyValueField(attr.getName()+'-'+this._ctrl.getName(), attr.getDatatype(), attr.value))
                        .append('</div>');
                }
            }


            return builder.toString();
        }

        // private method
        function generatePropertyValueField(attrID, datatype, defaultVal) {
            var ENUM    = 'enum=',
                RAW     = 'raw=';
            if (datatype.substr(0, ENUM.length) == ENUM) { // datatype starts with enum=
                var str = datatype.substr(ENUM.length, datatype.length);
                var values = str.split(',');
                var builder = new StringBuilder('<select id="'+attrID+'" class="span8">');
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
                        return ['<input id="'+attrID+'" type="number" class="span8" value="', defaultVal, '"/>'].join('');

                    default:
                        break;
                }

            } else {
                switch (defaultVal) {
                    case 'true':
                    case 'false':
                        var builder = new StringBuilder('<select id="'+attrID+'" class="span8">');
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

            return ['<input id="', attrID, '" type="text" class="span8" value="', defaultVal, '"/>'].join('');
        }

        UIInstanceProps.prototype.onHTMLAppended = function () {

        }

        return UIInstanceProps;
    }
);