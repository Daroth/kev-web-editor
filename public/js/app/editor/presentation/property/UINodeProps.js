define(
    [
        'jquery',
        'util/Pooffs',
        'presentation/property/UIInstanceProps',
        'templates/node-network',
        'util/Delay',
        'bootstrap/multiselect'
    ],
    function ($, Pooffs, UIInstanceProps, nodeNetworkTemplate, Delay, _bootstrap) {
        var NAMESPACE           = ".ui-node-props",
            PUSH_ACTION         = "node-push-action",
            PULL_ACTION         = "node-pull-action",
            NODE_LINKS_TABS     = 'node-links-tabs',
            INIT_BY_NODE        = 'initby-node',
            ADD_NODE_LINK       = 'node-link-add',
            DEL_NODE_LINK       = 'node-link-delete',
            NODE_LINK_TAG           = 'node-link-',
            NODE_LINK_TYPE_TAG      = 'node-link-type-',
            NODE_LINK_RATE_TAG      = 'node-link-rate-',
            NODE_LINK_TAB_ROOT_TAG  = 'node-link-tab-root-',
            NODE_LINK_TAB_VAL_TAG   = 'node-link-tab-val-',
            NODE_LINK_TAB_TAG       = 'node-link-tab-',
            NET_PROP_LIST_TAG       = 'network-property-list-',
            NET_PROP_KEY_TAG        = 'network-property-key-',
            NET_PROP_VAL_TAG        = 'network-property-val-',
            NET_PROP_ERR_TAG        = 'network-property-err-',
            DEL_NET_PROP_TAG        = 'network-property-delete-',
            ADD_NET_PROP_TAG        = 'network-property-add-',
            HTML5_ATTR_TAG          = 'data-node-link-id',
            NET_PROP_ROW_CLASS      = 'network-property-row',
            RATE_MAX                = 100,
            RATE_MIN                = 0;

        UINodeProps.INIT_BY_NODES   = "initby-nodes";
        UINodeProps.NODE_NETWORK_IP = "node-network-ip";
        UINodeProps.NODE_LINKS_PROP = "node-links-properties";

        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
            this._ctrl = ctrl;
        }

        UINodeProps.prototype.getHTML = function () {
            console.log("getHTML");
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
                console.log("nets", nets);

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
                        var /* KNodeLink */ link = links[j];
                        nodeLinks.push({
                            id: link._id,
                            type: link.getNetworkType(),
                            isActive: (j==0) ? true : false,
                            minRate: RATE_MIN,
                            maxRate: RATE_MAX,
                            rate: link.getEstimatedRate(),
                            props: getNetworkProperties(link)
                        });
                    }
                }

                return nodeLinks;

                function getNetworkProperties(/* KNodeLink */ link) {
                    var ret = [],
                        props = link.getNetworkProperties();

                    for (var i=0; i < props.length; i++) {
                        ret.push({
                            id: props[i]._id,
                            key: props[i].getKey(),
                            value: props[i].getValue()
                        });
                    }

                    return ret;
                }
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
                console.log("ADD TAB");
                that._ctrl.p2cAddNodeLink();
                that.refreshHTML();
            });

            $('#'+DEL_NODE_LINK).off(NAMESPACE);
            $('#'+DEL_NODE_LINK).on('click'+NAMESPACE, function () {
                console.log("DELETE TAB");
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

            // cache jquery selectors
            var nodeLinkID = 0;
            var jqySelectors = [];
            jqySelectors[NODE_LINK_TAB_TAG]     = $('#' + NODE_LINK_TAB_TAG + nodeLinkID);
            jqySelectors[NODE_LINK_TAB_VAL_TAG] = $('#' + NODE_LINK_TAB_VAL_TAG + nodeLinkID);
            jqySelectors[NODE_LINK_TAB_ROOT_TAG]= $('#' + NODE_LINK_TAB_ROOT_TAG + nodeLinkID);
            jqySelectors[NODE_LINK_TAG]         = $('#' + NODE_LINK_TAG + nodeLinkID);
            jqySelectors[NODE_LINK_TYPE_TAG]    = $('#' + NODE_LINK_TYPE_TAG + nodeLinkID);
            jqySelectors[NODE_LINK_RATE_TAG]    = $('#' + NODE_LINK_RATE_TAG + nodeLinkID);
            jqySelectors[NET_PROP_LIST_TAG]     = $('#' + NET_PROP_LIST_TAG + nodeLinkID);
            jqySelectors[DEL_NET_PROP_TAG]      = $('#' + DEL_NET_PROP_TAG + nodeLinkID);
            jqySelectors[ADD_NET_PROP_TAG]      = $('#' + ADD_NET_PROP_TAG + nodeLinkID);

            // register listeners
            registerNodeNetworkListeners(jqySelectors);
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

        function registerNodeNetworkListeners(jqy) {
            // selectable table
            jqy[NET_PROP_LIST_TAG].selectable({
                filter: '.'+NET_PROP_ROW_CLASS,
                selecting: function() {
                    jqy[DEL_NET_PROP_TAG].removeClass('disabled');
                },
                unselecting: function () {
                    var size = jqy[NET_PROP_LIST_TAG].find('.ui-selected').size();
                    if (size == 0) {
                        jqy[DEL_NET_PROP_TAG].addClass('disabled');
                    }
                }
            });

            // change tab name dynamically
            jqy[NODE_LINK_TYPE_TAG].off(NAMESPACE);
            jqy[NODE_LINK_TYPE_TAG].on('keyup'+NAMESPACE, function () {
                var value = jqy[NODE_LINK_TYPE_TAG].val();
                var matcher = value.match(/\S+/g);
                if (matcher) {
                    //widget._type = matcher[0];
                }
                jqy[NODE_LINK_TAB_VAL_TAG].text(matcher[0]);
            });

            // remove network property
            jqy[DEL_NET_PROP_TAG].off(NAMESPACE);
            jqy[DEL_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                var rowElem = jqy[NET_PROP_LIST_TAG].find('.ui-selected');
                rowElem.each(function () {
                    var keyID = $(this).find('input[id*='+NET_PROP_KEY_TAG+']').attr('id');
                    console.log("remove key id "+keyID);
                });

                // clear view
                rowElem.remove();
                $(this).addClass('disabled');
            });

            // add network property
            jqy[ADD_NET_PROP_TAG].off(NAMESPACE);
            jqy[ADD_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                console.log("ADD NET PROP");
                registerListenersForProps();
            });

            jqy[NODE_LINK_RATE_TAG].off(NAMESPACE);
            jqy[NODE_LINK_RATE_TAG].on('input', function () {
                var val = parseInt($(this).val());

                if (isNaN(val)) {
                    // TODO use current value as default
                    val = 100;

                } else if (val > RATE_MAX) {
                    val = RATE_MAX;

                } else if (val < RATE_MIN) {
                    val = RATE_MIN;
                }

                //widget._rate = val;
                //$(this).val(widget._rate);
            });

            function registerListenersForProps() {
//                for (var i=0; i < that.length; i++) {
//                    // closure to ensure idPair is the right one for each jquery keyup callback
//                    (function (idPair) {
//                        var keyInput = $('#'+idPair.key),
//                            valueInput = $('#'+idPair.value),
//                            errorDiv = $('#'+idPair.error);
//
//                        keyInput.off(NAMESPACE);
//                        keyInput.on('keyup'+NAMESPACE, function () {
//                            var keyValue = keyInput.val();
//                            // clear error fields
//                            keyInput.closest('.control-group').removeClass('error');
//                            errorDiv.hide();
//
//                            Delay(function delayedKeyupValidation() {
//                                if (props.containsKeyID(idPair.key)) {
//                                    // we already have a value set for this key input field
//                                    // check if another key field as this value
//                                    if (props.containsKey(keyValue, idPair.key)) {
//                                        // someone else already has this key (other than me = idPair.key)
//                                        // so this is not possible, display error message
//                                        displayError(keyValue);
//                                    } else {
//                                        // we are good to go, this key is available
//                                        updateModel(keyValue);
//                                    }
//                                } else {
//                                    if (props.containsKey(keyValue)) {
//                                        // someone else already has this key
//                                        displayError(keyValue);
//                                    } else {
//                                        // we are good to go, this key is available
//                                        updateModel(keyValue);
//                                    }
//                                }
//                            }, 1000);
//                        });
//
//                        valueInput.off(NAMESPACE);
//                        valueInput.on('keyup'+NAMESPACE, function () {
//                            props.setValue(idPair.key, $(this).val());
//                        });
//
//                        function displayError(value) {
//                            keyInput.closest('.control-group').addClass('error');
//                            errorDiv.find('.text-error').html('"'+value+'" is already used');
//                            errorDiv.show('fast');
//                        }
//
//                        function updateModel(value) {
//                            if (value.length != 0) { // do not save an empty key
//                                props.setKey(idPair.key, value);
//                            }
//                        }
//                    })(getPropIDPair(widget._id, widget._propsIDs[i]));
//                }
            }
            registerListenersForProps();
        }

        return UINodeProps;
    }
);