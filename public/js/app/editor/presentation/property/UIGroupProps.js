define(
    [
        'presentation/property/UIInstanceProps',
        'util/Pooffs',
        'util/Util',
        'templates/fragment-dependant-props'
    ],
    function (UIInstanceProps, Pooffs, Util, fragDepPropsTemplate) {

        Pooffs.extends(UIGroupProps, UIInstanceProps);

        function UIGroupProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
        }

        UIGroupProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this),
                nodes       = [];

            if (this._ctrl._instance) {
                var subNodes = this._ctrl._instance.getSubNodes(),
                    defaultAttrs = {};

                // retrieving default values from model
                for (var i=0; i < this._values.size(); i++) {
                    if (Util.parseBoolean(this._values.get(i).getAttribute().getFragmentDependant())) {
                        defaultAttrs[this._values.get(i).getAttribute().getName()] = this._values.get(i).getValue();
                    }
                }

                // browsing this group's subnodes
                for (var j=0; j< subNodes.size(); j++) {
                    var attrs = [];

                    for (var i=0; i < this._attrs.size(); i++) {
                        var attr = this._attrs.get(i);
                        if (Util.parseBoolean(attr.getFragmentDependant())) {
                            // fragment dependant attribute
                            var obj = {
                                name: attr.getName(),
                                type: 'raw',
                                value: getDefaultOrSavedValue(
                                    this._ctrl._instance.getDictionary(),
                                    attr.getName(),
                                    subNodes.get(j).getName())
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

                            attrs.push(obj);
                        }
                    }

                    nodes.push({
                        name: subNodes.get(j).getName(),
                        attrs: attrs
                    });
                }

                function getDefaultOrSavedValue(dictionary, attrName, targetNode) {
                    var savedVal = null;

                    if (dictionary) {
                        var values = dictionary.getValues();

                        for (var i=0; i < values.size(); i++) {
                            var dicVal = values.get(i);

                            if (dicVal.getTargetNode() && dicVal.getTargetNode().getName() == targetNode) {
                                savedVal = dicVal.getValue();
                                break;
                            }
                        }
                    }

                    return savedVal || defaultAttrs[attrName];
                }

            }

            return html + fragDepPropsTemplate({ nodes: nodes});
        }

        UIGroupProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

            props['GROUP_NODE_ADDRESSES'] = [];
            if (this._ctrl._instance) {
                var subNodes = this._ctrl._instance.getSubNodes();
                for (var i=0; i < subNodes.size(); i++) {
                    var node = subNodes.get(i);
                    var ip = $('#binding-prop-ip-'+node.getName()).val(),
                        port = $('#binding-prop-port-'+node.getName()).val();

                    props['GROUP_NODE_ADDRESSES'].push({
                        nodeName: node.getName(),
                        ip: ip,
                        port: port
                    });
                }
            }

            return props;
        }

        return UIGroupProps;
    }
);