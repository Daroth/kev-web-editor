define(
    [
        'app/control/CGroup',
        'app/control/CChannel',
        'app/control/CNode',
        'app/control/CComponent'
    ],

    function(CGroup, CChannel, CNode, CComponent) {

        function CFactory() {}

        CFactory.instance = new CFactory();

        CFactory.prototype.newGroup = function(type, handler) {
            return new CGroup(type, handler);
        }

        CFactory.prototype.newNode = function(type, handler) {
            return new CNode(type, handler);
        }

        CFactory.prototype.newComponent = function(type, handler) {
            return new CComponent(type, handler);
        }

        CFactory.prototype.newChannel = function(type, handler) {
            return new CChannel(type, handler);
        }

        return CFactory;
    }
);