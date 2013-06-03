define(
    [
        'kevoree',
        'util/Logger'
    ],
    function (Kevoree, Logger)  {

        function KevoreeJSBootstrap() {
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        /**
         *
         * @param nodeName
         * @param grpName
         * @param url well formed url (kevoree.org:9898/foo) without protocol
         * @returns {boolean} true if successful start; false otherwise
         */
        KevoreeJSBootstrap.prototype.start = function (nodeName, grpName, url) {
            // TODO

            console.log("foo");
            var socket = new WebSocket('ws://'+url);
            socket.onopen = function () {
                console.log('opened');
                this.send('am I connected ?');
            };
            socket.onerror = function () {
                console.log('error');
            }

            socket.onmessage = function (msg) {
                var strModel = msg.data;
                console.log('message received: ' + strModel);

                var loader = new Kevoree.org.kevoree.loader.JSONModelLoader(),
                    model = loader.loadModelFromString(strModel);
                return initModelInstance(model, "WebNode", nodeName, grpName, this._factory);
            }

            return false; // TODO because it does not start for now
        }

        function initModelInstance(model, nodeDefType, nodeName, grpDefType, factory) {
            var nodeFound = model.findNodesByID(nodeName);
            if (nodeFound == null) {

                var td = model.findTypeDefinitionsByID(nodeDefType);
                if (td != null) {
                    Logger.warn("Init default node instance for name " + nodeName)
                    var node = factory.createContainerNode();
                    node.setName(nodeName);
                    node.setTypeDefinition(td);
                    model.addNodes(node);

                    var gtd = model.findTypeDefinitionsByID(grpDefType);
                    if (gtd != null) {
                        var group = factory.createGroup();
                        group.setTypeDefinition(gtd);
                        group.setName("sync");
                        group.addSubNodes(node);
                        model.addGroups(group);

                        return true;

                    } else {
                        Logger.err("Default group type not found in model for typeDef " + grpDefType);
                    }

                } else {
                    Logger.err("Default node type not found in model for typeDef \"" + nodeDefType + "\"");
                }
            } else {
                Logger.debug("Model already initialized with a node instance using \"" + nodeName + "\"");
            }

            return false;
        }

        return KevoreeJSBootstrap;
    }
);