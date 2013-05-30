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
         * @param p2pIP
         * @returns {boolean} true if successful start; false otherwise
         */
        KevoreeJSBootstrap.prototype.start = function (nodeName, grpName, p2pIP) {
            // TODO
            var bootHelper = new BootstrapHelper(),
                root = this._factory.createContainerRoot(); // TODO retrieve container root by connecting to p2p server and ask for current model ?
            bootHelper.initModelInstance(root, "JavascriptNode", nodeName, grpName);

            return false; // TODO because it does not start for now
        }

        return KevoreeJSBootstrap;
    }
);