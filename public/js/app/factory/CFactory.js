define(
    [
        'app/control/CEditor',
        'app/control/CGroup',
        'app/control/CChannel',
        'app/control/CNode',
        'app/control/CComponent',
        'app/control/CWire'
    ],

    function (CEditor, CGroup, CChannel, CNode, CComponent, CWire) {

        function CFactory() {
            if (CFactory.prototype._instance) {
                return CFactory._instance;
            }
            CFactory._instance = this;

            return CFactory._instance;
        }

        CFactory.getInstance = function() {
            if (!CFactory._instance) {
                return new CFactory();
            }
            return CFactory._instance;
        }

        CFactory.prototype.newEditor = function (containerID) {
            return new CEditor(containerID);
        };

        CFactory.prototype.newGroup = function (type) {
            return new CGroup(type);
        };

        CFactory.prototype.newNode = function (type) {
            return new CNode(type);
        };

        CFactory.prototype.newComponent = function (type) {
            return new CComponent(type);
        };

        CFactory.prototype.newChannel = function (type) {
            return new CChannel(type);
        };

        CFactory.prototype.newWire = function (layer) {
            return new CWire(layer);
        };

        return CFactory;
    }
);