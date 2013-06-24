define(
    function (require) {

        /**
         * Visit model in order to load instances in the editor
         * @constructor
         */
        function InstanceModelVisitor() {
            this._factory = require('factory/CFactory').getInstance();
        }

        InstanceModelVisitor.prototype.visitEditor = function (editor) {
            var model = editor.getModel();

            // visit node instances
            visitNodes(editor, this._factory, model.getNodes());

            // visit group instances
            visitGroups(editor, this._factory, model.getGroups());

            // visit channel instances
            visitChannels(editor, this._factory, model.getHubs());

            // visit components instances
            visitComponents(editor, this._factory, model.getNodes());

            // visit bindings instances
            visitBindings(editor, this._factory, model.getMBindings());

            // visit subNodes instances
            visitSubNodes(editor, this._factory, model.getGroups());
        }

        // private methods
        function visitNodes(editor, factory, nodes) {
            for (var i=0; i < nodes.size(); i++) {
                var node = nodes.get(i);
                var entity = factory.newNode(editor, node.getTypeDefinition().getName());
                entity.setName(node.getName());

                // check if this node has already been added to editor
                if (!editor.hasEntity(entity)) {
                    // this is a new node for the editor
                    if (!node.getHost()) {
                        // this node has no parent, add it to editor
                        editor.addEntity(entity);
                        loadMetaData(entity, node);
                    }

                    if (node.getHost()) {
                        // this node has a parent
                        var parent = editor.getEntity(node.getHost().getName());
                        parent.addChild(entity);
                    }
                }
            }
        }

        function visitGroups(editor, factory, grps) {
            var entity = null;
            var grp = null;
            for (var i=0; i < grps.size(); i++) {
                grp = grps.get(i);
                entity = factory.newGroup(editor, grp.getTypeDefinition().getName());
                entity.setName(grp.getName());
                editor.addEntity(entity);
                loadMetaData(entity, grp);
            }
        }

        function visitComponents(editor, factory, nodes) {
            var entity = null;
            var node = null;
            for (var i=0; i < nodes.size(); i++) {
                node = nodes.get(i);
                var entityNode = editor.getEntity(node.getName());
                if (entityNode != null) {
                    var compz = node.getComponents();
                    for (var j=0; j < compz.size(); j++) {
                        var comp = compz.get(j);
                        entity = factory.newComponent(editor, comp.getTypeDefinition().getName());
                        entity.setName(comp.getName());
                        entityNode.addChild(entity);
                    }
                }
            }
        }

        function visitChannels(editor, factory, chans) {
            var entity = null;
            var chan = null;
            for (var i=0; i < chans.size(); i++) {
                chan = chans.get(i);
                entity = factory.newChannel(editor, chan.getTypeDefinition().getName());
                entity.setName(chan.getName());
                editor.addEntity(entity);
                loadMetaData(entity, chan);
            }
        }

        function visitSubNodes(editor, factory, grps) {
            for (var i=0; i < grps.size(); i++) {
                var subNodes = grps.get(i).getSubNodes();
                for (var j=0; j < subNodes.$size; j++) {
                    var grp = editor.getEntity(grps.get(i).getName());
                    var node = editor.getEntity(subNodes.get(j).getName());
                    if (grp != null && node != null) {
                        var wire = factory.newWire(grp);
                        wire.setTarget(node);
                        grp.addWire(wire);
                        node.addWire(wire);
                    }
                }
            }
        }

        function visitBindings(editor, factory, bindings) {
            for (var i=0; i < bindings.size(); i++) {
                var port = bindings.get(i).getPort(),
                    hub = bindings.get(i).getHub();

                if (port && hub) {
                    var comp = editor.getEntity(port.eContainer().getName()),
                        chan = editor.getEntity(hub.getName());
                    if (comp && chan) {
                        for (var j=0; j < port.eContainer().getProvided().size(); j++) {
                            var provided = port.eContainer().getProvided().get(j);
                            if (port.getPortTypeRef() == provided.getPortTypeRef()) {
                                var portEntity = comp.getPort(port.getPortTypeRef().getName());
                                if (portEntity != null) {
                                    addPortToEditor(portEntity, comp, chan);
                                }
                            }
                        }

                        for (var j=0; j < port.eContainer().getRequired().size(); j++) {
                            var required = port.eContainer().getRequired().get(j);
                            if (port.getPortTypeRef() == required.getPortTypeRef()) {
                                var portEntity = comp.getPort(port.getPortTypeRef().getName());
                                if (portEntity != null) {
                                    addPortToEditor(portEntity, comp, chan);
                                }
                            }
                        }
                    }

                    function addPortToEditor(port, component, chan) {
                        port.setComponent(component);
                        var wire = port.createWire();
                        wire.setTarget(chan);
                        component.addWire(wire);
                        chan.addWire(wire);
                    }
                }
            }
        }

        function loadMetaData(entity, instance) {
            var metaData = instance.getMetaData(),
                x = 100,
                y = 100;

            if (metaData != null) {
                var commaSplitted = metaData.split(',');
                for (var i=0; i < commaSplitted.length; i++) {
                    if (commaSplitted[i].substr(0, 'x='.length) == 'x=') {
                        x = parseInt(commaSplitted[i].substr('x='.length, commaSplitted[i].length-1));
                    }

                    if (commaSplitted[i].substr(0, 'y='.length) == 'y=') {
                        y = parseInt(commaSplitted[i].substr('y='.length, commaSplitted[i].length-1));
                    }
                }
            }

            entity.getUI().getShape().setAbsolutePosition(x, y);
        }

        return InstanceModelVisitor;
    }
);