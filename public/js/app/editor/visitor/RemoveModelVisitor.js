define(
    [
        'kevoree'
    ],

    function (Kevoree) {

        /**
         * Visit editor entities list in order to remove instances from model
         * @constructor
         */
        function RemoveModelVisitor() {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
            this._listener = function () {};
        }

        RemoveModelVisitor.prototype.setModel = function (model) {
            this._model = model;
        }

        RemoveModelVisitor.prototype.setListener = function (callback) {
            if (callback && typeof(callback) == 'function') {
                this._listener = callback;
            } else {
                throw "RemoveModelVisitor setListener's callback is not a function.";
            }
        }

        RemoveModelVisitor.prototype.visitChannel = function (chan) {
            var instance = this._model.findHubsByID(chan._name);
            this._model.removeHubs(instance);
            this._listener.call(this);
        }

        RemoveModelVisitor.prototype.visitNode = function (node) {
            var instance = this._model.findNodesByID(node._name);
            if (node) {
                this._model.removeNodes(instance);
                this._listener.call(this);
            }
        }

        RemoveModelVisitor.prototype.visitComponent = function (comp) {
            var node = this._model.findNodesByID(comp._parent.getName()),
                instance = node.findComponentsByID(comp._name);
            node.removeComponents(instance);
            this._listener.call(this);
        }

        RemoveModelVisitor.prototype.visitGroup = function (grp) {
            var instance = this._model.findGroupsByID(grp._name);
            this._model.removeGroups(instance);
            this._listener.call(this);
        }

        RemoveModelVisitor.prototype.visitOutputPort = function (port) {}

        RemoveModelVisitor.prototype.visitInputPort = function (port) {}

        RemoveModelVisitor.prototype.visitWire = function (wire) {
            this._model.removeMBindings(wire._instance);
            this._listener.call(this);
        }

        RemoveModelVisitor.prototype.visitNodeProperties = function (nodeProps) {
            var nets = nodeProps.getNodeNetworks();
            for (var i=0; i < nets.length; i++) {
                nets[i].accept(this);
            }
            this._listener.call(this);
        }

        RemoveModelVisitor.prototype.visitNodeNetwork = function (net) {
            var nets = this._model.getNodeNetworks();
            for (var i=0; i < nets.size(); i++) {
                if (nets.get(i).getTarget().getName() == net.getTarget().getName()
                    && nets.get(i).getInitBy().getName() == net.getInitBy().getName()) {
                    this._model.removeNodeNetworks(nets.get(i));
                    this._listener.call(this);
                    break;
                }
            }
        }

        RemoveModelVisitor.prototype.visitNodeLink = function (link) {
            var nets = link.getNodeProperties().getNodeNetworks();
            for (var i in nets) {
                if (nets[i]._instance) {
                    nets[i]._instance.removeLink(link._instance);
                    this._listener.call(this);
                }
            }
        }

        RemoveModelVisitor.prototype.visitNetworkProperty = function (prop) {
            var link = prop.getLink();
            if (link._instance) {
                link._instance.removeNetworkProperties(prop._instance);
                this._listener.call(this);
            }
        }

        return RemoveModelVisitor;
    }
);