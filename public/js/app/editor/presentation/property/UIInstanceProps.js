define(
    [
        'util/StringBuilder'
    ],

    function (StringBuilder) {

        function UIInstanceProps(ui, ctrl) {
            this._ui = ui;
            this._ctrl = ctrl;
        }

        UIInstanceProps.prototype.getHTML = function () {
            var model = this._ctrl.getEditor().getModel(),
                tDef = model.findTypeDefinitionsByID(this._ctrl.getType()),
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

        return UIInstanceProps;
    }
);