define(
    [
        'kevoree'
    ],

    function (Kevoree) {

        function UpdateModelVisitor() {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
            this._listener = function () {};
        }

        UpdateModelVisitor.prototype.setModel = function (model) {
            this._model = model;
        }

        UpdateModelVisitor.prototype.setListener = function (callback) {
            if (callback && typeof(callback) == 'function') {
                this._listener = callback;
            } else {
                throw "UpdateModelVisitor setListener's callback is not a function.";
            }
        }

        UpdateModelVisitor.prototype.visitChannel = function (chan) {
            chan._instance = this._factory.createChannel();

            chan._instance.setName(chan._name);
            chan._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(chan._type));

            this._model.addHubs(chan._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNode = function (node) {
            node._instance = this._factory.createContainerNode();

            node._instance.setName(node._name);
            node._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(node._type));

            this._model.addNodes(node._instance);

            if (node._parent) {
                var node = this._model.findNodesByID(node._parent.getName());
                node.addHosts(node._instance);
            }

            if (node._children.length > 0) {
                for (var i=0; i< node._children.length; i++) {
                    node._children[i].accept(this);
                }
            }

            if (node._wires.length > 0) {
                for (var i=0; i < node._wires.length; i++) {
                    node._wires[i].getOrigin().accept(this);
                }
            }

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitComponent = function (comp) {
            comp._instance = this._factory.createComponentInstance();

            comp._instance.setName(comp._name);
            comp._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(comp._type));

            var node = this._model.findNodesByID(comp._parent.getName());
            node.addComponents(comp._instance);

            for (var i=0; i < comp._inputs.length; i++) {
                comp._inputs[i].accept(this);
            }

            for (var i=0; i < comp._outputs.length; i++) {
                comp._outputs[i].accept(this);
            }

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitGroup = function (grp) {
            grp._instance = this._factory.createGroup();

            grp._instance.setName(grp._name);
            grp._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(grp._type));

            if (grp._wires.length > 0) {
                for (var i=0; i < grp._wires.length; i++) {
                    grp._wires[i].accept(this);
                }
            }
            this._model.addGroups(grp._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitWire = function (wire) {
            var node = this._model.findNodesByID(wire.getTarget().getName()),
                grp = this._model.findGroupsByID(wire.getOrigin().getName());
            if (node && grp) grp.addSubNodes(node);
        }

        UpdateModelVisitor.prototype.visitOutputPort = function (port) {
            var node = this._model.findNodesByID(port._component.getParent().getName()),
                comp = node.findComponentsByID(port._component.getName()),
                portRef = comp.getTypeDefinition().findRequiredByID(port._name);

            port._instance = this._factory.createPort();

            comp.addRequired(port._instance);
            port._instance.setPortTypeRef(portRef);
        }

        UpdateModelVisitor.prototype.visitInputPort = function (port) {
            var node = this._model.findNodesByID(port._component.getParent().getName()),
                comp = node.findComponentsByID(port._component.getName()),
                portRef = comp.getTypeDefinition().findProvidedByID(port._name);

            port._instance = this._factory.createPort();

            comp.addProvided(port._instance);
            port._instance.setPortTypeRef(portRef);
        }



        return UpdateModelVisitor;
    }
);