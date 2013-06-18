define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps',
        'presentation/property/UINodeLinkWidget',
        'bootstrap/multiselect'
    ],
    function (Pooffs, UIInstanceProps, UINodeLinkWidget, _bootstrap) {
        var NAMESPACE           = ".ui-node-props",
            PUSH_ACTION         = "node-push-action",
            PULL_ACTION         = "node-pull-action",
            GROUP_ACTION        = "node-group-action",
            PROGRESS_BAR        = "node-progress-bar",
            NODE_LINKS_TABS     = 'node-links-tabs',
            NODE_LINKS_CONTENT  = 'node-links-content',
            ADD_NODE_LINK       = 'add-node-link',
            DEL_NODE_LINK       = 'del-node-link',
            NODE_LINK_TYPE      = 'node-link-type',
            NETWORK_PROPS       = 'node-network-props',
            ADD_NETWORK_PROP    = 'add-node-network-property',
            DEL_NETWORK_PROP    = 'del-node-network-property',
            NETWORK_PROP_LIST   = 'node-network-prop-list';

        UINodeProps.INIT_BY_NODES   = "node-network-init-by";
        UINodeProps.NODE_NETWORK_IP = "node-network-ip";

        var NODE_LINK_ID_COUNT = 0,
            NODE_PROP_ID_COUNT = 0;

        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
            this._nodeLinks = [];
        }

        UINodeProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this), // super.getHTML()
                model = this._ctrl.getEditor().getModel();

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
            NODE_LINK_ID_COUNT++;
            this._nodeLinks.push(defaultNodeLink);

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
                                '<button id="'+DEL_NODE_LINK+'" class="btn"><i class="icon-trash"></i></button>' +
                                '<button id="'+ADD_NODE_LINK+'" class="btn"><i class="icon-plus"></i></button>' +
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
                that._nodeLinks.push(nodeLinkWidget);

                NODE_LINK_ID_COUNT++;
            });

            $('#'+DEL_NODE_LINK).off(NAMESPACE);
            $('#'+DEL_NODE_LINK).on('click'+NAMESPACE, function () {
//                var split = $('#'+NODE_LINKS_TABS+' li.active > a').attr('href').split('-');
//                var index = that._nodeLinks.indexOf(split[split.length-1]);
//                if (index != -1) that._nodeLinks.splice(index, 1);
//                $('#node-link-'+split[split.length-1]).remove();
//                $('#'+NODE_LINKS_TABS+' li.active').remove();
            });

            for (var i=0; i < this._nodeLinks.length; i++) {
                this._nodeLinks[i].addedToDOM();
            }
        }

        UINodeProps.prototype.getPropertiesValues = function () {
            var props = UIInstanceProps.prototype.getPropertiesValues.call(this);

            props[UINodeProps.NODE_NETWORK_IP] = $('#'+UINodeProps.NODE_NETWORK_IP).val();
//            props[GROUP_ACTION] = $('#'+GROUP_ACTION+' option:selected').val();

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