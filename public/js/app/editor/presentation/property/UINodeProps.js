define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps',
        'presentation/property/UINodeLinkWidget',
        'kotlin/kotlin-maps',
        'bootstrap/multiselect'
    ],
    function (Pooffs, UIInstanceProps, UINodeLinkWidget, Kotlin, _bootstrap) {
        var NAMESPACE           = ".ui-node-props",
            PUSH_ACTION         = "node-push-action",
            PULL_ACTION         = "node-pull-action",
            GROUP_ACTION        = "node-group-action",
            PROGRESS_BAR        = "node-progress-bar",
            NODE_LINKS_TABS     = 'node-links-tabs',
            NODE_LINKS_CONTENT  = 'node-links-content',
            INIT_BY_NODE        = 'init-by-node',
            ADD_NODE_LINK       = 'add-node-link',
            DEL_NODE_LINK       = 'del-node-link';

        UINodeProps.INIT_BY_NODES   = "node-network-init-by";
        UINodeProps.NODE_NETWORK_IP = "node-network-ip";
        UINodeProps.NODE_LINKS_PROP = "node-links-propz";

        var NODE_LINK_ID_COUNT = 0;

        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
            this._nodeLinks = new Kotlin.HashTable();
        }

        UINodeProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this), // super.getHTML()
                model = this._ctrl.getEditor().getModel();

            // reset nodeLinks
            this._nodeLinks.clear();
            NODE_LINK_ID_COUNT = 0;

            function generateOptions(ui) {
                var nodes = model.getNodes();
                var opts = '';
                var selected = '';
                for (var i=0; i < nodes.size(); i++) {
                    if (nodes.get(i).getName() == ui._ctrl.getName()) selected = ' selected';
                    opts += '<option value="'+nodes.get(i).getName()+'"'+selected+' class="'+INIT_BY_NODE+'">'+nodes.get(i).getName()+'</option>';
                    selected = '';
                }
                return opts;
            }

            function getThisNodeGroups(ui) {
                var grps = model.getGroups();
                var ret = [];
                for (var i=0; i < grps.size(); i++) {
                    var nodes = grps.get(i).getSubNodes();
                    for (var j=0; j < nodes.size(); j++) {
                        if (nodes.get(j).getName() == ui._ctrl.getName()) {
                            ret.push(grps.get(i));
                        }
                    }
                }

                return ret;
            }

            function generateNodeGroupOptions(ui) {
                var grps = getThisNodeGroups(ui);
                var html = '';
                for (var i=0; i < grps.length; i++) {
                    html += '<option value="'+grps[i].getName()+'">'+grps[i].getName()+'</option>';
                }
                return html;
            }

            var nodeNetworks = model.getNodeNetworks(),
                linkInstances = [];
            for (var i=0; i < nodeNetworks.size(); i++) {
                var nodeNet = nodeNetworks.get(i);
                if (nodeNet.getTarget().getName() == this._ctrl.getName()) {
                    for (var j=0; j < nodeNet.getLink().size(); j++) {
                        var nodeLinkWidget = new UINodeLinkWidget(NODE_LINK_ID_COUNT);
                        nodeLinkWidget.setType(nodeNet.getLink().get(j).getNetworkType());
                        if (j==0) nodeLinkWidget.setActive(true);
                        this._nodeLinks.put(NODE_LINK_ID_COUNT, nodeLinkWidget);
                        NODE_LINK_ID_COUNT++;
                        linkInstances.push(nodeLinkWidget);
                        console.log("j'ai trouvé "+nodeLinkWidget.getType()+" dans le model pour les node links du noeud "+this._ctrl.getName());
                    }
                    // when you get one nodeLinks list, you can stop
                    // because they will all be the same
                    // (as I did it, for each initBy nodes you get the same nodeLinks props)
                    break;
                }
            }
            console.log('after read model linkInstances.length = '+linkInstances.length);

            function generateNodeLinks(nodeLinks) {
                if (linkInstances.length == 0) {
                    var defaultWidget = new UINodeLinkWidget(NODE_LINK_ID_COUNT);
                    defaultWidget.setActive(true);
                    nodeLinks.put(NODE_LINK_ID_COUNT, defaultWidget);
                    NODE_LINK_ID_COUNT++;
                    linkInstances.push(defaultWidget);
                }

                function generateNodeLinksTabs() {
                    var html = '';
                    for (var i=0; i < linkInstances.length; i++) {
                        html += linkInstances[i].getTabHTML();
                    }
                    return html;
                }

                function generateNodeLinksContents() {
                    var html = '';
                    for (var i=0; i < linkInstances.length; i++) {
                        html += linkInstances[i].getTabContentHTML();
                    }
                    return html;
                }

                return '' +
                    '<div class="well" style="margin-top: 10px;">' +
                        '<ul id="'+NODE_LINKS_TABS+'" class="nav nav-tabs">' +
                            generateNodeLinksTabs() +
                            '<li class="pull-right">' +
                                '<div class="btn-group">' +
                                    '<button id="'+DEL_NODE_LINK+'" class="btn btn-danger disabled"><i class="icon-trash icon-white"></i></button>' +
                                    '<button id="'+ADD_NODE_LINK+'" class="btn btn-info"><i class="icon-plus icon-white"></i></button>' +
                                '</div>' +
                            '</li>' +
                        '</ul>' +

                        '<div id="'+NODE_LINKS_CONTENT+'" class="tab-content">' +
                            generateNodeLinksContents() +
                        '</div>' +
                    '</div>';
            }

            html +=
                '<div class="row-fluid">' +
                    '<div class="span4">Reachable from</div>' +
                        '<select id="'+UINodeProps.INIT_BY_NODES+'" multiple="multiple">' +
                            generateOptions(this._ui) +
                        '</select>' +
                    '</div>' +
                '</div>' +
                generateNodeLinks(this._nodeLinks) +
                '<div class="row-fluid">' +
                    '<button id="'+PUSH_ACTION+'" type="button" class="btn btn-inverse span4">Push</button>' +
                    '<div class="span4">' +
                        '<select id="'+GROUP_ACTION+'" class="row-fluid">' +
                            generateNodeGroupOptions(this._ui) +
                        '</select>' +
                    '</div>' +
                    '<button id="'+PULL_ACTION+'" type="button" class="btn btn-inverse span4">Pull</button>' +
                    '</div>' +
                    '<div id="'+PROGRESS_BAR+'" class="progress progress-info progress-striped active row-fluid hide" style="margin-top: 10px;">' +
                        '<div class="bar" style="width: 100%"></div>' +
                    '</div>' +
                '</div>';

            return html;
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
                var nodeLinkWidget = new UINodeLinkWidget(NODE_LINK_ID_COUNT);
                nodeLinkWidget.setType('type'+NODE_LINK_ID_COUNT);
                $('#'+NODE_LINKS_TABS).append(nodeLinkWidget.getTabHTML());
                $('#'+NODE_LINKS_CONTENT).append(nodeLinkWidget.getTabContentHTML());
                nodeLinkWidget.addedToDOM();
                that._nodeLinks.put(NODE_LINK_ID_COUNT, nodeLinkWidget);

                NODE_LINK_ID_COUNT++;

                registerListenerForTabs();
            });

            $('#'+DEL_NODE_LINK).off(NAMESPACE);
            $('#'+DEL_NODE_LINK).on('click'+NAMESPACE, function () {
                var $widget = $('#'+NODE_LINKS_TABS+' li.active'),
                    widgetID = parseInt($widget.attr(UINodeLinkWidget.HTML5_ID_TAG)),
                    widget = that._nodeLinks.get(widgetID);

                // remove current active tab if != 0 (default)
                if (widgetID != 0) {
                    that._nodeLinks.remove(widgetID);
                    widget.removeFromDOM();
                    var model = that._ctrl.getEditor().getModel(),
                        nns = model.getNodeNetworks();
                    for (var i=0; i < nns.size(); i++) {
                        var nn = nns.get(i);
                        if (nn.getTarget().getName() == that._ctrl.getName()) {
                            var nls = nn.getLink();
                            for (var j=0; j < nls.size(); j++) {
                                var nl = nls.get(j);
                                if (nl.getNetworkType() == widget.getType()) {
                                    nn.removeLink(nl);
                                    console.log("je viens de remove "+nl.getNetworkType()+" des nodelinks de "+ that._ctrl.getName());
                                }
                            }
                        }
                    }
                }

                // set default tab (O-indexed tab to active)
                that._nodeLinks.get(0).setActive(true);
                $('#'+DEL_NODE_LINK).addClass('disabled');
            });

            this._nodeLinks.each(function (widgetID, widget) {
                widget.addedToDOM();
            });

            registerListenerForTabs();
            function registerListenerForTabs() {
                $('#'+NODE_LINKS_TABS+' a[data-toggle="tab"]').off(NAMESPACE);
                $('#'+NODE_LINKS_TABS+' a[data-toggle="tab"]').on('shown'+NAMESPACE, function () {
                    var widgetID = parseInt($(this).parent().attr(UINodeLinkWidget.HTML5_ID_TAG));
                    if (widgetID == 0) {
                        $('#'+DEL_NODE_LINK).addClass('disabled');
                    } else {
                        $('#'+DEL_NODE_LINK).removeClass('disabled');
                    }
                });
            }
        }

        UINodeProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

//            props[UINodeProps.NODE_NETWORK_IP] = $('#'+UINodeProps.NODE_NETWORK_IP).val();
//            props[GROUP_ACTION] = $('#'+GROUP_ACTION+' option:selected').val();

            props[UINodeProps.NODE_LINKS_PROP] = [];

            console.log("BEFORE SAVE nodeLinks.size() = "+this._nodeLinks.size());
            this._nodeLinks.each(function (widgetID, widget) {
                props[UINodeProps.NODE_LINKS_PROP].push(widget.serialize());
            });

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