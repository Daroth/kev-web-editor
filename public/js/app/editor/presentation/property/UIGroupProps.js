define(
    [
        'presentation/property/UIInstanceProps',
        'util/Pooffs',
    ],
    function (UIInstanceProps, Pooffs) {

        Pooffs.extends(UIGroupProps, UIInstanceProps);

        function UIGroupProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
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

        UIGroupProps.prototype.getConnectedFragments = function () {
            return this._ctrl._instance.getSubNodes();
        }

        return UIGroupProps;
    }
);