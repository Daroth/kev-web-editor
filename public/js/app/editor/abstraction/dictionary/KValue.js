define(
    function () {

        function KValue(attr) {
            this._attribute = attr;
            this._value = null;
            this._targetNode = null;

            // initiate KValue with default values from model
            var entity          = attr.getDictionary().getEntity(),
                dicType         = entity.getEditor().getModel().findTypeDefinitionsByID(entity.getType()).getDictionaryType(),
                dicValues       = dicType.getDefaultValues();

            for (var i=0; i < dicValues.size(); i++) {
                if (dicValues.get(i).getAttribute().getName() == attr.getName()) {
                    this._value = dicValues.get(i).getValue();
                    break;
                }
            }
        }

        KValue.prototype.getAttribute = function () {
            return this._attribute;
        }

        KValue.prototype.getValue = function () {
            return this._value;
        }

        KValue.prototype.setValue = function (val) {
            this._value = val;
        }

        KValue.prototype.getTargetNode = function () {
            return this._targetNode;
        }

        KValue.prototype.setTargetNode = function (node) {
            this._targetNode = node;
        }

        return KValue;
    }
);