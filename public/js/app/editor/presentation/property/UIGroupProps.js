define(
    [
        'presentation/property/UIInstanceProps',
        'util/Pooffs',
        'templates/group-props'
    ],
    function (UIInstanceProps, Pooffs, groupPropsTemplate) {
        Pooffs.extends(UIGroupProps, UIInstanceProps);

        function UIGroupProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
        }

        UIGroupProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this);

            var nodes = [];
            if (this._ctrl._instance) {
                var subNodes = this._ctrl._instance.getSubNodes(),
                    ipDefault = '0.0.0.0',
                    portDefault = '8000';

                for (var j=0; j < this._values.size(); j++) {
                    var value = this._values.get(j);
                    switch (value.getAttribute().getName()) {
                        case 'ip':
                            ipDefault = value.getValue();
                            break;

                        case 'port':
                            portDefault = value.getValue();
                            break;
                    }
                }

                for (var i=0; i < subNodes.size(); i++) {
                    var node = subNodes.get(i);
                    nodes.push({
                        name: node.getName(),
                        ip: ipDefault,
                        port: portDefault
                    });
                }
            }

            return html + groupPropsTemplate({ attrs: nodes });
        }

        UIGroupProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

            props['GROUP_NODE_ADDRESSES'] = [];
            if (this._ctrl._instance) {
                var subNodes = this._ctrl._instance.getSubNodes();
                for (var i=0; i < subNodes.size(); i++) {
                    var node = subNodes.get(i);
                    var ip = $('#group-prop-ip-'+node.getName()).val(),
                        port = $('#group-prop-port-'+node.getName()).val();

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