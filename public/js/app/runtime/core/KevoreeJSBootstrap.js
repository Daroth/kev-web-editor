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

        KevoreeJSBootstrap.prototype.start = function (nodeName, grpName, p2pIP) {
            // TODO
            var bootHelper = new BootstrapHelper(),
                root = this._factory.createContainerRoot(); // TODO retrieve container root by connecting to p2p server and ask for current model ?
            bootHelper.initModelInstance(root, "JavascriptNode", nodeName, grpName);
        }

        return KevoreeJSBootstrap;
    }
);