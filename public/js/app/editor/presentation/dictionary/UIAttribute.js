define(
    [
        'templates/attribute'
    ],
    function (attributeTemplate) {

        function UIAttribute(ctrl) {
            this._ctrl = ctrl;
        }

        UIAttribute.prototype.getHTML = function () {
            var kValue = this._ctrl.getDictionary().getValue(this._ctrl.getName()),
                value = (kValue) ? kValue.getValue() : null;

            return attributeTemplate({
                name: this._ctrl.getName(),
                value: value,
                type: (this._ctrl.getEnum().length > 0) ? 'enum' : 'raw',
                possibleValues: this._ctrl.getEnum(),
                selected: this._ctrl.getEnum().indexOf(value)
            });
        }

        return UIAttribute;
    }
);