define(
    [
        'core/BootstrapHelper',
        'kevoree',
        'util/Logger'
    ],
    function (BootstrapHelper, Kevoree, Logger)  {

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
            var bootHelper = new BootstrapHelper(),
                root = this._factory.createContainerRoot(); // TODO retrieve container root by connecting to p2p server and ask for current model ?

            var socket = new WebSocket('ws://'+url);
            socket.onopen = function () {
                console.log('opened');
            };
            socket.onerror = function () {
                console.log('error');
            }

            bootHelper.initModelInstance(root, "JavascriptNode", nodeName, grpName);

            return false; // TODO because it does not start for now
        }

        return KevoreeJSBootstrap;
    }
);