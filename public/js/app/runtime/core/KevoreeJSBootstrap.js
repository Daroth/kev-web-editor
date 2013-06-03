define(
    [
        'kevoree',
        'util/Logger'
    ],
    function (Kevoree, Logger)  {

        function KevoreeJSBootstrap() {
            this._started = false;
            this._factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();
        }

        /**
         *
         * @param nodeName
         * @param grpName
         * @param url well formed url (kevoree.org:9898/foo) without protocol
         * @param callback param will be a boolean (true: start succeed, false otherwise)
         */
        KevoreeJSBootstrap.prototype.start = function (nodeName, grpName, url, callback) {
            function callbackReturn() {
                if (callback && typeof callback === 'function') {
                    callback.call(undefined, this._started);
                    return;
                }
            }

            if (this._started) callbackReturn();

            var socket = new WebSocket('ws://'+url);
            socket.onerror = function () {
                callbackReturn();
            }

            socket.onclose = function (e) {
                var msg = '';
                switch (e.code) {
                    case 1000:
                        msg = 'WebSocket to '+socket.url+' closed.';
                        console.log(msg);
                        Logger.log(msg);
                        break;
                    default:
                        msg = 'WebSocket to '+socket.url+' closed. Reason code '+e.code+' (<a href="https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIWebSocketChannel#Status_codes" target="_blank">codes</a>)';
                        console.warn(msg);
                        Logger.warn(msg);
                        break;
                }
            }

            socket.onmessage = function (msg) {
                try {
                    var loader = new Kevoree.org.kevoree.loader.JSONModelLoader(),
                        strModel = msg.data,
                        model = loader.loadModelFromString(strModel); // msg.data = stringify model
                    this._started = initModelInstance(model, "WebNode", nodeName, grpName, this._factory);

                } catch (err) {
                    console.error(err.message);
                    Logger.err(err.message);

                } finally {
                    callbackReturn();
                    socket.close();
                }
            }
        }

        KevoreeJSBootstrap.prototype.stop = function () {
            if (!this._started) return;
            // TODO really stop bean
            this._started = false;
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