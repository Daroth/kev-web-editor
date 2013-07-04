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
                    attr.setOptional(Util.parseBoolean(dicAttr.getOptional()));

                    // actually add attribute to this dictionary
                    this.addAttribute(attr);

                    if (!attr.getFragmentDependant()) {
                        // add default attribute value to this dictionary if !fragmentDependant
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

        KDictionary.prototype.getValue = function (attrName, nodeName) {
            for (var i=0; i < this._values.length; i++) {
                if (nodeName != undefined && nodeName != null) {
                    if (this._values[i].getAttribute().getName() == attrName
                        && this._values[i].getTargetNode()
                        && this._values[i].getTargetNode().getName() == nodeName) {
                        return this._values[i];
                    }
                } else {
                    if (this._values[i].getAttribute().getName() == attrName) return this._values[i];
                }
            }
            return null;
        }

        KDictionary.prototype.getAttribute = function (name) {
            for (var i=0; i < this._attrs.length; i++) {
                if (this._attrs[i].getName() == name) return this._attrs[i];
            }
            return null;
        }

        KDictionary.prototype.addAttribute = function (attr) {
            this._attrs.push(attr);
        }

        KDictionary.prototype.addValue = function (val) {
            console.log("////////////////////////////////////");
            console.log("BEFORE add======================");
            var tab = this._values.slice(0);
            for (var i in tab) {
                console.log(tab[i]._attribute._name+' = '+tab[i]._value);
            }
            console.log("BEFORE add================END!!!");

            var index = this._values.indexOf(val);
            if (index == -1) {
                // this value has not been added to this._values yet
                if (val.getAttribute().getFragmentDependant()) {
                    // this value is fragment dependant
//                    console.log("this value is frag dep", val.getValue());
                    var kVal = this.getValue(val.getAttribute().getName(), val.getTargetNode().getName());
                    if (kVal) {
                        // there is already a value for this attr name & targetNode => update it
                        kVal.setValue(val.getValue());
//                        console.log("i already have a value for this attribute, updated! "+val.getValue());
                    } else {
                        this._values.push(val);
//                        console.log("first time i saw this one, added! "+val.getValue());
                    }
                } else {
                    // this value is not fragment dependant
//                    console.log('this value is not fragment dependant');
                    var kVal = this.getValue(val.getAttribute().getName());
                    if (kVal) {
//                        console.log('there is already a value for this attr name, update it');
                        // there is already a value for this attr name => update it
                        kVal.setValue(val.getValue());
                    } else {
//                        console.log('no equivalent found in',this._values.slice(0),', add it');
                        this._values.push(val);
                    }
                }
            }
            console.log("after add======================");
            tab = this._values.slice(0);
            for (var i in tab) {
                console.log(tab[i]._attribute._name+' = '+tab[i]._value);
            }
            console.log("after add================END!!!");
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