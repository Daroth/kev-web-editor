define(
    [
        'templates/dictionary'
    ],

    function (dictionaryTemplate) {
        function UIDictionary(ctrl) {
            this._ctrl = ctrl;
        }

        UIDictionary.prototype.getHTML = function () {
            var attrs = this._ctrl.getAttributes(),
                values = this._ctrl.getValues();

            return dictionaryTemplate({
                name: this._ctrl.getEntity().getName(),
                attrsHTML: getAttributesHTML(attrs, false),
                nodes: getFragDepAttributesHTML(values)
            });
        }

        UIDictionary.prototype.onHTMLAppended = function () {}

        UIDictionary.prototype.getAttributeValues = function () {
            var values = [],
                attrs = this._ctrl.getAttributes();

            // TODO

            return values;
        }

        function getAttributesHTML(attrs, fragmentDependant) {
            var html = '';

            for (var i=0; i < attrs.length; i++) {
                if (attrs[i].getFragmentDependant() == fragmentDependant) {
                    html += attrs[i].getUI().getHTML();
                }
            }

            return html;
        }

        function getFragDepAttributesHTML(values) {
            var nodes = [],
                tmpNodes = {};

            for (var i=0; i < values.length; i++) {
                if (values[i].getAttribute().getFragmentDependant()) {
                    var html = tmpNodes[values[i].getTargetNode().getName()] || '';
                    html += values[i].getUI().getHTML();
                    tmpNodes[values[i].getTargetNode().getName()] = html;
                }
            }

            for (var name in tmpNodes) {
                nodes.push({
                    name: name,
                    fragDepAttrsHTML: tmpNodes[name]
                });
            }

            return nodes;
        }

        return UIDictionary;
    }
);