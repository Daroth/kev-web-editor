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
                    opts += '<option value="'+nodes.get(i).getName()+'"'+selected+'>'+nodes.get(i).getName()+'</option>';
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

            var defaultNodeLink = new UINodeLinkWidget(NODE_LINK_ID_COUNT);
            defaultNodeLink.setActive(true);
            this._nodeLinks.put(NODE_LINK_ID_COUNT, defaultNodeLink);
            NODE_LINK_ID_COUNT++;

            html +=
                '<div class="row-fluid">' +
                    '<div class="span4">Reachable from</div>' +
                        '<select id="'+UINodeProps.INIT_BY_NODES+'" multiple="multiple">' +
                            generateOptions(this._ui) +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="well" style="margin-top: 10px;">' +
                    '<ul id="'+NODE_LINKS_TABS+'" class="nav nav-tabs">' +
                        defaultNodeLink.getTabHTML() +
                        '<li class="pull-right">' +
                            '<div class="btn-group">' +
                                '<button id="'+DEL_NODE_LINK+'" class="btn btn-danger disabled"><i class="icon-trash icon-white"></i></button>' +
                                '<button id="'+ADD_NODE_LINK+'" class="btn btn-info"><i class="icon-plus icon-white"></i></button>' +
                            '</div>' +
                        '</li>' +
                    '</ul>' +

                    '<div id="'+NODE_LINKS_CONTENT+'" class="tab-content">' +
                        defaultNodeLink.getTabContentHTML() +
                    '</div>' +
                '</div>'+
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
                nodeLinkWidget.setType('default'+NODE_LINK_ID_COUNT);
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
                }

                // set default tab (O-indexed tab to active)
                that._nodeLinks.get(0).setActive(true);
                $('#'+DEL_NODE_LINK).addClass('disabled');
            });

            this._nodeLinks.each(function (widgetID, widget) {
                widget.addedToDOM();
            });

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

            this._nodeLinks.each(function (widgetID, widget) {
                props[UINodeProps.NODE_LINKS_PROP].push(widget.serialize());
            });

            var nodes = [];
            $('#'+UINodeProps.INIT_BY_NODES+' option:selected').each(function () {
                nodes.push($(this).val());
            });
            props[UINodeProps.INIT_BY_NODES] =  nodes;

            return props;
        }

        return UINodeProps;
    }
);