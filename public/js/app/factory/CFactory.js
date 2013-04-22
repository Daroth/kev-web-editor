define(
    [
        'control/CEditor',
        'control/CGroup',
        'control/CChannel',
        'control/CNode',
        'control/CComponent',
        'control/CWire',
        'control/CInputPort',
        'control/COutputPort'
    ],

    function (CEditor, CGroup, CChannel, CNode, CComponent, CWire, CInputPort, COutputPort) {

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

        CFactory.prototype.newGroup = function (editor, type) {
            return new CGroup(editor, type);
        };

        CFactory.prototype.newNode = function (editor, type) {
            return new CNode(editor, type);
        };

        CFactory.prototype.newComponent = function (editor, type, inputs, outputs) {
            return new CComponent(editor, type, inputs, outputs);
        };

        CFactory.prototype.newChannel = function (editor, type) {
            return new CChannel(editor, type);
        };

        CFactory.prototype.newWire = function (origin) {
            return new CWire(origin);
        };

        CFactory.prototype.newInputPort = function (name) {
            return new CInputPort(name);
        };

        CFactory.prototype.newOutputPort = function (name) {
            return new COutputPort(name);
        };

        return CFactory;
    }
);