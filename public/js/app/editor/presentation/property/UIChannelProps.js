define(
    [
        'presentation/property/UIInstanceProps',
        'util/Pooffs',
        'util/Util',
        'kotlin/kotlin-maps'
    ],
    function (UIInstanceProps, Pooffs, Util, Kotlin) {
        Pooffs.extends(UIChannelProps, UIInstanceProps);

        function UIChannelProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
        }

        UIChannelProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

            props['CHAN_COMP_ADDRESSES'] = [];
            if (this._ctrl._instance) {

            }

            return props;
        }

        UIChannelProps.prototype.getConnectedFragments = function () {
            var nodes = new Kotlin.ArrayList(),
                alreadyAddedNode = {},
                model = this._ctrl.getEditor().getModel();

            var wires = this._ctrl.getWires();
            for (var i=0; i < wires.length; i++) {
                var nodeName = wires[i].getOrigin().getComponent().getParent().getName();
                if (!alreadyAddedNode[nodeName]) {
                    var instance = model.findNodesByID(nodeName);
                    if (instance != null) {
                        nodes.add(instance);
                        alreadyAddedNode[nodeName] = nodeName;
                    }
                }
            }

            return nodes;
        }

        return UIChannelProps;
    }
);