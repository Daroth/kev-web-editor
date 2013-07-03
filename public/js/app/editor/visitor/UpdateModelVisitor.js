define(
    [
        'kevoree',
        'abstraction/KGroup',
        'abstraction/KInputPort',
        'abstraction/KOutputPort'
    ],

    function (Kevoree, KGroup, KInputPort, KOutputPort) {

        /*
         * Visit the editor entities list in order to add/update instances
         * in the model
         * @constructor
         */
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
            chan._instance = chan._instance || this._factory.createChannel();

            chan._instance.setName(chan._name);
            chan._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(chan._type));
            saveMetaData(chan);

            this._model.addHubs(chan._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNode = function (node) {
            node._instance = node._instance || this._factory.createContainerNode();
            node._props._instance = node._instance; // we need to give node's instance to its node property
                                                    // in order for node's properties to get displayed properly

            node._instance.setName(node._name);
            node._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(node._type));
            saveMetaData(node);

            this._model.addNodes(node._instance);

            if (node._parent) {
                var parent = this._model.findNodesByID(node._parent.getName());
                parent.addHosts(node._instance);
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
            comp._instance = comp._instance || this._factory.createComponentInstance();

            comp._instance.setName(comp._name);
            comp._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(comp._type));
            saveMetaData(comp);

            var node = this._model.findNodesByID(comp._parent.getName());
            node.addComponents(comp._instance);

            for (var i=0; i < comp._inputs.length; i++) {
                comp._inputs[i].accept(this);
            }

            for (var i=0; i < comp._outputs.length; i++) {
                comp._outputs[i].accept(this);
            }

            for (var i=0; i < comp._wires.length; i++) {
                comp._wires[i].accept(this);
            }

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitGroup = function (grp) {
            grp._instance = grp._instance || this._factory.createGroup();

            grp._instance.setName(grp._name);
            grp._instance.setTypeDefinition(this._model.findTypeDefinitionsByID(grp._type));
            saveMetaData(grp);

            if (grp._wires.length > 0) {
                for (var i=0; i < grp._wires.length; i++) {
                    grp._wires[i].accept(this);
                }
            }
            this._model.addGroups(grp._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitWire = function (wire) {
//            console.log("visit wire", wire);
            switch (wire.getOrigin().getEntityType()) {
                case KGroup.ENTITY_TYPE:
                    var node = this._model.findNodesByID(wire.getTarget().getName()),
                        grp = this._model.findGroupsByID(wire.getOrigin().getName());
                    if (node && grp) grp.addSubNodes(node);
                    break;

                case KInputPort.ENTITY_TYPE:
                case KOutputPort.ENTITY_TYPE:
                    var hub = this._model.findHubsByID(wire.getTarget().getName());

                    var update = (wire._instance) ? true : false;
//                    console.log("visitWire "+wire.getName()+" > update ? "+update);
                    wire._instance = wire._instance || this._factory.createMBinding();

                    wire._instance.setPort(wire.getOrigin()._instance);
                    wire._instance.setHub(hub);

                    if (!update) this._model.addMBindings(wire._instance);
                    break;
            }

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitOutputPort = function (port) {
            var node = this._model.findNodesByID(port._component.getParent().getName()),
                comp = node.findComponentsByID(port._component.getName()),
                portRef = comp.getTypeDefinition().findRequiredByID(port.getName());

            var update = (port._instance) ? true : false;
//            console.log("visitOutputPort "+port.getName()+" > update ? "+update);
            port._instance = port._instance || this._factory.createPort();

            if (!update) comp.addRequired(port._instance);
            port._instance.setPortTypeRef(portRef);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitInputPort = function (port) {
            var node = this._model.findNodesByID(port._component.getParent().getName()),
                comp = node.findComponentsByID(port._component.getName()),
                portRef = comp.getTypeDefinition().findProvidedByID(port.getName());

            var update = (port._instance) ? true : false;
//            console.log("visitInputPort "+port.getName()+" > update ? "+update);
            port._instance = port._instance || this._factory.createPort();

            if (!update) comp.addProvided(port._instance);
            port._instance.setPortTypeRef(portRef);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNodeNetwork = function (net) {
            var target = this._model.findNodesByID(net._target.getName()),
                initBy = this._model.findNodesByID(net._initBy.getName());

            var update = (net._instance) ? true : false;
            net._instance = net._instance || this._factory.createNodeNetwork();

            net._instance.setTarget(target);
            net._instance.setInitBy(initBy);

            for (var i=0; i < net.getLinks().length; i++) {
                var nodeLink = net.getLinks()[i];
                nodeLink.accept(this);
            }

            if (!update) this._model.addNodeNetwork(net._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNodeLink = function (link) {
            var nodeNetwork = link.getNodeNetwork()._instance,
                rate = link.getEstimatedRate(),
                type = link.getType();

            var update = (link._instance) ? true : false;
            link._instance = link._instance || this._factory.createNodeLink();

            link._instance.setEstimatedRate(rate);
            link._instance.setNetworkType(type);

            if (!update) nodeNetwork.addLink(link._instance);
            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNetworkProperty = function (prop) {
            var nodeLink = prop.getNodeLink()._instance;

            var update = (prop._instance) ? true : false;
            prop._instance = prop._instance || this._factory.createNetworkProperty();

            prop._instance.setName(prop.getKey());
            prop._instance.setValue(prop.getValue());

            if (!update) nodeLink.addNetworkProperties(prop._instance);
            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitAttribute = function (att) {
            var dicInst = att.getEntity()._instance.getDictionary();
            att._instance = att._instance || this._factory.createDictionaryValue();
        }

        // private method
        function saveMetaData(entity) {
            if (typeof(entity.getUI) === 'function' && entity.getUI()) {
                if (entity.getUI().getShape()) {
                    var pos = entity.getUI().getShape().getAbsolutePosition();
                    entity._instance.setMetaData('x='+parseInt(pos.x)+',y='+parseInt(pos.y));
                }
            }
        }

        return UpdateModelVisitor;
    }
);