define(
    [
        'kevoree'
    ],

    function (Kevoree) {

        function RemoveModelVisitor() {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
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

        RemoveModelVisitor.prototype.visitOutputPort = function (port) {
            // TODO ?
        }

        RemoveModelVisitor.prototype.visitInputPort = function (port) {
            // TODO ?
        }

        return RemoveModelVisitor;
    }
);