define(
    [
        'jquery',
        'util/Pooffs',
        'presentation/property/UIInstanceProps',
        'templates/node-network',
        'bootstrap/multiselect'
    ],
    function ($, Pooffs, UIInstanceProps, nodeNetworkTemplate, _bootstrap) {

        var NAMESPACE       = ".ui-node-props",
            PUSH_ACTION     = "node-push-action",
            PULL_ACTION     = "node-pull-action",
            NODE_LINKS_TABS = 'node-links-tabs',
            INIT_BY_NODE    = 'initby-node',
            ADD_NODE_LINK   = 'node-link-add',
            DEL_NODE_LINK   = 'node-link-delete',
            HTML5_ATTR_TAG  = 'data-node-link-id';

        UINodeProps.INIT_BY_NODES   = "initby-nodes";
        UINodeProps.NODE_NETWORK_IP = "node-network-ip";
        UINodeProps.NODE_LINKS_PROP = "node-links-properties";

        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
        }

        // Override getHTML()
        UINodeProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this), // super.getHTML()
                model = this._ctrl.getEditor().getModel(),
                that = this;

            var templateParams = {
                initBy: getInitByNodes(),
                nodeLinks: getNodeLinks(),
                groups: getThisNodeGroups(this._ctrl.getName())
            }

            function getInitByNodes() {
                var initByNodes = [],
                    nodes = model.getNodes(),
                    nets = that._ctrl.getNodeNetworks();

                // check if ctrl already has nodeNetwork for those nodes
                for (var i=0; i < nodes.size(); i++) {
                    var hasNetwork = false;

                    for (var j=0; j < nets.length; j++) {
                        if (nets[j].getInitBy().getName() == nodes.get(i).getName()) {
                            hasNetwork = true;
                        }
                    }

                    initByNodes.push({
                        selected: hasNetwork,
                        name: nodes.get(i).getName()
                    });
                }

                return initByNodes;
            }

            function getNodeLinks() {
                var nodeLinks = [];

                var nets = that._ctrl.getNodeNetworks();
                for (var i=0; i < nets.length; i++) {
                    var links = nets[i].getLinks();

                    for (var j=0; j < links.length; j++) {
                        if (j==0) links[j].getUI().setActive(true); // activate first tab by default
                        nodeLinks.push({
                            tabHTML: links[j].getUI().getTabHTML(),
                            contentHTML: links[j].getUI().getContentHTML()
                        });
                    }
                }

                return nodeLinks;
            }

            function getThisNodeGroups(name) {
                var grps = model.getGroups();
                var ret = [];
                for (var i=0; i < grps.size(); i++) {
                    var nodes = grps.get(i).getSubNodes();
                    for (var j=0; j < nodes.size(); j++) {
                        if (nodes.get(j).getName() == name) {
                            ret.push(grps.get(i).getName());
                        }
                    }
                }
                return ret;
            }

            return html + nodeNetworkTemplate(templateParams);
        }

        UINodeProps.prototype.onHTMLAppended = function () {
            var that = this;

            $('#'+UINodeProps.INIT_BY_NODES).multiselect({
                includeSelectAllOption: true,
                maxHeight: 200
            });

            var pushBtn = $('#'+PUSH_ACTION),
                pullBtn = $('#'+PULL_ACTION);

            pushBtn.off(NAMESPACE);
            pushBtn.on('click'+NAMESPACE, function () {
                that._ctrl.p2cPushModel();
            });

            pullBtn.off(NAMESPACE);
            pullBtn.on('click'+NAMESPACE, function () {
                that._ctrl.p2cPullModel();
            });

            $('#'+ADD_NODE_LINK).off(NAMESPACE);
            $('#'+ADD_NODE_LINK).on('click'+NAMESPACE, function () {
                that._ctrl.p2cAddNodeLink();
                that.refreshHTML();
            });

            $('#'+DEL_NODE_LINK).off(NAMESPACE);
            $('#'+DEL_NODE_LINK).on('click'+NAMESPACE, function () {
                var tab = $('#'+NODE_LINKS_TABS+' li.active'),
                    tabID = parseInt(tab.attr(HTML5_ATTR_TAG));

                that._ctrl.p2cDeleteNodeLink(tabID);
                that.refreshHTML();
            });

            registerListenerForTabs();
            function registerListenerForTabs() {
                $('#'+NODE_LINKS_TABS+' a[data-toggle="tab"]').off(NAMESPACE);
                $('#'+NODE_LINKS_TABS+' a[data-toggle="tab"]').on('shown'+NAMESPACE, function () {
                    var widgetID = parseInt($(this).parent().attr(HTML5_ATTR_TAG));
                    if (widgetID == 0) {
                        $('#'+DEL_NODE_LINK).addClass('disabled');
                    } else {
                        $('#'+DEL_NODE_LINK).removeClass('disabled');
                    }
                });
            }

            // tell nodeLinks that they were added to DOM
            var nets = this._ctrl.getNodeNetworks();
            for (var i=0; i < nets.length; i++) {
                var links = nets[i].getLinks();
                for (var j=0; j < links.length; j++) {
                    links[j].getUI().onHTMLAppended();
                }
            }
        }

        UINodeProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

            var nodes = [];
            $('#'+UINodeProps.INIT_BY_NODES+' option.'+INIT_BY_NODE+':selected').each(function () {
                nodes.push($(this).val());
            });
            props[UINodeProps.INIT_BY_NODES] =  nodes;

            return props;
        }

        return UINodeProps;
    }
);