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
                entity.getUI().getShape().move(100, 100);
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
                entity.getUI().getShape().move(100, 100);
            }
        }

        function visitSubNodes(editor, factory, grps) {
            console.log("visitSubNodes");
            for (var i=0; i < grps.size(); i++) {
                console.log("grp ", grps.get(i));
                var subNodes = grps.get(i).getSubNodes();
                console.log(grps.get(i).getSubNodes().size());
                for (var j=0; j < subNodes.size(); j++) {
                    console.log("SI TU VOIS CA C'COOL");
                    var grp = editor.getEntity(grps.get(i).getName());
                    var node = editor.getEntity(subNodes.get(i).getName());
                    if (grp != null && node != null) {
                        var wire = factory.newWire(grp);
                        wire.setTarget(node);
                        grp.addWire(wire);
                        node.addWire(wire);
                    }
                }
            }
        }

        return InstanceModelVisitor;
    }
);