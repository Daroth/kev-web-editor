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
            chan.getDictionary().accept(this);

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
            node.getDictionary().accept(this);

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
            comp.getDictionary().accept(this);

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
            grp.getDictionary().accept(this);

            if (grp._wires.length > 0) {
                for (var i=0; i < grp._wires.length; i++) {
                    grp._wires[i].accept(this);
                }
            }
            this._model.addGroups(grp._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitWire = function (wire) {
            switch (wire.getOrigin().getEntityType()) {
                case KGroup.ENTITY_TYPE:
                    var node = this._model.findNodesByID(wire.getTarget().getName()),
                        grp = this._model.findGroupsByID(wire.getOrigin().getName());

                    var update = (wire._instance) ? true : false;
                    if (node && grp && !update) grp.addSubNodes(node);
                    break;

                case KInputPort.ENTITY_TYPE:
                case KOutputPort.ENTITY_TYPE:
                    var hub = this._model.findHubsByID(wire.getTarget().getName());

                    var update = (wire._instance) ? true : false;
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
            port._instance = port._instance || this._factory.createPort();

            if (!update) comp.addProvided(port._instance);
            port._instance.setPortTypeRef(portRef);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNodeProperties = function (nodeProps) {
            var nets = nodeProps.getNodeNetworks(),
                links = nodeProps.getLinks();

            for (var i=0; i < nets.length; i++) {
                nets[i].accept(this);
            }

            for (var i=0; i < links.length; i++) {
                links[i].accept(this);
            }
        }

        UpdateModelVisitor.prototype.visitNodeNetwork = function (net) {
            var target = this._model.findNodesByID(net._target.getName()),
                initBy = this._model.findNodesByID(net._initBy.getName());

            var update = (net._instance) ? true : false;
            net._instance = net._instance || this._factory.createNodeNetwork();

            net._instance.setTarget(target);
            net._instance.setInitBy(initBy);

            if (!update) this._model.addNodeNetworks(net._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNodeLink = function (link) {
            var update = (link._instance) ? true : false;

            // create or re-use instance
            link._instance = link._instance || this._factory.createNodeLink();

            // update content
            link._instance.setEstimatedRate(link.getEstimatedRate());
            link._instance.setNetworkType(link.getNetworkType());

            var props = link.getNetworkProperties();
            for (var i=0; i < props.length; i++) {
                props[i].accept(this);
            }

            if (!update) {
                // this is the first time this link is created
                // so add it to all node networks for the related node
                var nets = link.getNodeProperties().getNodeNetworks();
                for (var i in nets) {
                    nets[i]._instance.addLink(link._instance);
                }
            }

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitNetworkProperty = function (prop) {
            if (prop.getKey() != null && prop.getValue() != null) {
                var nodeLink = prop.getLink()._instance;

                var update = (prop._instance) ? true : false;
                prop._instance = prop._instance || this._factory.createNetworkProperty();

                prop._instance.setName(prop.getKey());
                prop._instance.setValue(prop.getValue());

                if (!update) nodeLink.addNetworkProperties(prop._instance);
            }
            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitDictionary = function (dict) {
            dict._instance = dict._instance || this._factory.createDictionary();
            dict._instance.removeAllValues();

            for (var i=0; i < dict.getValues().length; i++) {
                dict.getValues()[i].accept(this);
            }

            dict.getEntity()._instance.setDictionary(dict._instance);

            this._listener.call(this);
        }

        UpdateModelVisitor.prototype.visitValue = function (val) {
            var tDef = val.getAttribute().getDictionary().getEntity().getType(),
                dicType = this._model.findTypeDefinitionsByID(tDef).getDictionaryType(),
                value = this._factory.createDictionaryValue();

            value.setAttribute(dicType.findAttributesByID(val.getAttribute().getName()));
            value.setValue(val.getValue());
            var node = null;
            if (val.getAttribute().getFragmentDependant()) {
                node = this._model.findNodesByID(val.getTargetNode().getName());
            }
            value.setTargetNode(node);

            val.getAttribute().getDictionary()._instance.addValues(value);

            this._listener.call(this);
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