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

                var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                var model = loader.loadModelFromString(strModel);
                bootHelper.initModelInstance(model, "WebNode", nodeName, grpName);
            }

            return false; // TODO because it does not start for now
        }

        return KevoreeJSBootstrap;
    }
);