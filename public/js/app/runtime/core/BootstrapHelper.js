define(
    [
        'kevoree',
        'util/Logger'
    ],
    function (Kevoree, Logger) {

        function BootstrapHelper() {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        BootstrapHelper.prototype.initModelInstance = function (model, nodeDefType, nodeName, grpDefType) {
            var nodeFound = model.findNodesByID(nodeName);
            if (nodeFound == null) {

                var td = model.findTypeDefinitionsByID(nodeDefType);
                if (td != null) {
                    Logger.warn("Init default node instance for name " + nodeName)
                    var node = this._factory.createContainerNode();
                    node.setName(nodeName);
                    node.setTypeDefinition(td);
                    model.addNodes(node);

                    var gtd = model.findTypeDefinitionsByID(grpDefType);
                    if (gtd != null) {
                        var group = this._factory.createGroup();
                        group.setTypeDefinition(gtd);
                        group.setName("sync");
                        group.addSubNodes(node);
                        model.addGroups(group);

                    } else {
                        Logger.err("Default group type not found in model for name " + grpDefType);
                    }

                } else {
                    Logger.err("Default node type not found in model for name \"" + nodeDefType + "\"");
                }
            } else {
                Logger.debug("Model already initialized for node name \"" + nodeName + "\"");
            }
        }

        return BootstrapHelper;
    }
);