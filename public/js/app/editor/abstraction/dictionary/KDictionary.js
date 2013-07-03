define(
    [
        'util/Util'
    ],
    function (Util) {

        var ENUM    = 'enum=';

        function KDictionary(entity) {
            this._entity = entity;
            this._attrs = [];
            this._values = [];

            // create attributes and default values
            var dicType = entity.getEditor().getModel().findTypeDefinitionsByID(entity.getType()).getDictionaryType();

            if (dicType) {
                var dicAttrs = dicType.getAttributes();

                for (var i=0; i < dicAttrs.size(); i++) {
                    var dicAttr = dicAttrs.get(i),
                        factory = require('factory/CFactory').getInstance(),
                        attr = factory.newAttribute(this);

                    // set attribute fields
                    attr.setName(dicAttr.getName());
                    // if ENUM set possible values into attribute's enum
                    if (dicAttr.getDatatype().substr(0, ENUM.length) == ENUM) { // attr.getDatatype() starts with "enum="
                        var str = dicAttr.getDatatype().substr(ENUM.length, dicAttr.getDatatype().length);
                        attr.setEnum(str.split(','));
                    }
                    attr.setFragmentDependant(Util.parseBoolean(dicAttr.getFragmentDependant()));

                    // actually add attribute to this dictionary
                    this.addAttribute(attr);

                    if (!attr.getFragmentDependant()) {
                        // actually add default attribute value to this dictionary if not fragment dependant
                        this.addValue(factory.newValue(attr));
                    }
                }
            }
        }

        KDictionary.prototype.getEntity = function () {
            return this._entity;
        }

        KDictionary.prototype.getAttributes = function () {
            return this._attrs;
        }

        KDictionary.prototype.getValues = function () {
            return this._values;
        }

        KDictionary.prototype.getValue = function (attrName) {
            for (var i=0; i < this._values.length; i++) {
                if (this._values[i].getAttribute().getName() == attrName) return this._values[i];
            }
            return null;
        }

        KDictionary.prototype.addAttribute = function (attr) {
            this._attrs.push(attr);
        }

        KDictionary.prototype.addValue = function (val) {
            for (var i=0; i < this._values.length; i++) {
                if (this._values[i].getAttribute().getName() == val.getAttribute().getName()) {
                    if (this._values[i].getTargetNode().getName() == val.getTargetNode().getName()) {
                        // prevent kValues to be duplicated if they are referencing the same
                        // attribute name && targetNode name
                        this._values.splice(i, 1);
                    }
                }
            }
            this._values.push(val);
        }

        KDictionary.prototype.removeAttribute = function (attr) {
            var index = this._attrs.indexOf(attr);
            if (index != -1) this._attrs.splice(index, 1);
        }

        KDictionary.prototype.removeValue = function (val) {
            var index = this._values.indexOf(val);
            if (index != -1) this._values.splice(index, 1);
        }

        KDictionary.prototype.accept = function (visitor) {
            visitor.visitDictionary(this);
        }

        return KDictionary;
    }
);