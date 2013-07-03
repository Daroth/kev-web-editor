define(
    function () {
        function KAttribute(dict) {
            this._dictionary = dict;
            this._name = null;
            this._enum = [];
            this._fragmentDependant = false;
        }

        KAttribute.prototype.getDictionary = function () {
            return this._dictionary;
        }

        KAttribute.prototype.getName = function () {
            return this._name;
        }

        KAttribute.prototype.getEnum = function () {
            return this._enum;
        }

        KAttribute.prototype.getFragmentDependant = function () {
            return this._fragmentDependant;
        }

        KAttribute.prototype.setName = function (name) {
            this._name = name;
        }

        KAttribute.prototype.setEnum = function (_enum) {
            this._enum = _enum;
        }

        KAttribute.prototype.setFragmentDependant = function (isDependant) {
            this._fragmentDependant = isDependant;
        }

        KAttribute.prototype.accept = function (visitor) {
            visitor.visitAttribute(this);
        }

        return KAttribute;
    }
);