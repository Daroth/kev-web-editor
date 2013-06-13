define(
    function (require) {

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

            //            // visit components instances
//            visitComponents(editor, this._factory, model.getCompo());

            // visit subNodes instances
            visitSubNodes(editor, this._factory, model.getGroups());
        }

        // private methods
        function visitNodes(editor, factory, nodes) {
            var entity = null;
            var node = null;
            for (var i=0; i < nodes.size(); i++) {
                node = nodes.get(i);
                entity = factory.newNode(editor, node.getTypeDefinition().getName());
                entity.setName(node.getName());
                editor.addEntity(entity);
                loadMetaData(entity, node);
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

        function visitComponents(editor, factory, compz) {
            var entity = null;
            var comp = null;
            for (var i=0; i < compz.size(); i++) {
                comp = compz.get(i);
                entity = factory.newComponent(editor, comp.getTypeDefinition().getName());
                entity.setName(comp.getName());
                editor.addEntity(entity);
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