define(['jquery'], function ($) {

        var NAMESPACE               = '.node-link-widget',
            NODE_LINK_TAG           = 'node-link-',
            NODE_LINK_TYPE_TAG      = 'node-link-type-',
            NODE_LINK_RATE_TAG      = 'node-link-rate-',
            NODE_LINK_TAB_ROOT_TAG  = 'node-link-tab-root-',
            NODE_LINK_TAB_VAL_TAG   = 'node-link-tab-val-',
            NODE_LINK_TAB_TAG       = 'node-link-tab-',
            NET_PROP_TABLE_TAG      = 'network-prop-table-',
            NET_PROP_LIST_TAG       = 'network-prop-list-',
            NET_PROP_KEY_TAG        = 'network-prop-key-',
            NET_PROP_VAL_TAG        = 'network-prop-val-',
            DEL_NET_PROP_TAG        = 'network-prop-del-',
            ADD_NET_PROP_TAG        = 'network-prop-add-',
            HTML5_ATTR_TAG          = 'data-node-link',
            NET_PROP_ROW_CLASS      = 'network-prop-row',
            RATE_MAX                = 100,
            RATE_MIN                = 0;

        function UINodeLinkWidget(id) {
            this._id = id;
            this._type = 'default';
            this._rate = 100;
            this._propsIDCounter = 0;
            this._propsIDs = [];
            this._tabHTML = '';
            this._contentHTML = '';
            this._active = false;
            this._DOMready = false;

            // create HTML associated with this widget
            createView(this);
        }

        UINodeLinkWidget.HTML5_ID_TAG = HTML5_ATTR_TAG;

        UINodeLinkWidget.prototype.getTabHTML = function () {
            return this._tabHTML;
        }

        UINodeLinkWidget.prototype.getTabContentHTML = function () {
            return this._contentHTML;
        }

        UINodeLinkWidget.prototype.setType = function (type) {
            this._type = type;

            // update view
            if (this._DOMready) {
                this._ui[NODE_LINK_TAB_VAL_TAG].val(type);
            } else {
                createView(this);
            }
        }

        UINodeLinkWidget.prototype.setActive = function (isActive) {
            this._active = isActive;

            // update view
            if (this._DOMready) {
                this._ui[NODE_LINK_TAB_ROOT_TAG].addClass('active');
                this._ui[NODE_LINK_TAG].addClass('active');
            } else {
                createView(this);
            }
        }

        UINodeLinkWidget.prototype.addedToDOM = function () {
            // cache jquery selectors
            this._ui = [];
            this._ui[NODE_LINK_TAB_TAG]     = $('#' + NODE_LINK_TAB_TAG + this._id);
            this._ui[NODE_LINK_TAB_VAL_TAG] = $('#' + NODE_LINK_TAB_VAL_TAG + this._id);
            this._ui[NODE_LINK_TAB_ROOT_TAG]= $('#' + NODE_LINK_TAB_ROOT_TAG + this._id);
            this._ui[NODE_LINK_TAG]         = $('#' + NODE_LINK_TAG + this._id);
            this._ui[NODE_LINK_TYPE_TAG]    = $('#' + NODE_LINK_TYPE_TAG + this._id);
            this._ui[NODE_LINK_RATE_TAG]    = $('#' + NODE_LINK_RATE_TAG + this._id);
            this._ui[NET_PROP_TABLE_TAG]    = $('#' + NET_PROP_TABLE_TAG + this._id);
            this._ui[NET_PROP_LIST_TAG]     = $('#' + NET_PROP_LIST_TAG + this._id);
            this._ui[DEL_NET_PROP_TAG]      = $('#' + DEL_NET_PROP_TAG + this._id);
            this._ui[ADD_NET_PROP_TAG]      = $('#' + ADD_NET_PROP_TAG + this._id);

            // register listeners
            registerStaticListeners(this);

            this._DOMready = true;
        }

        UINodeLinkWidget.prototype.removeFromDOM = function () {
            this._ui[NODE_LINK_TAB_ROOT_TAG].remove();
            this._ui[NODE_LINK_TAG].remove();

            this._DOMready = false;
        }

        UINodeLinkWidget.prototype.serialize = function () {
            var propz = [];

            for (var i=0; i < this._propsIDs.length; i++) {
                var idPair = getPropIDPair(this._id, this._propsIDs[i]);
                propz.push({
                    key: $('#'+idPair.key).val(),
                    value: $('#'+idPair.value).val()
                });
            }

            return {
                type: this._type,
                rate: this._rate,
                props: propz
            };
        }

        // private method
        function createView(ui) {
            // clear old IDs
            ui._propsIDs.length = 0;

            // create tab html
            ui._tabHTML = generateTabHTML(ui);

            // create content html
            ui._contentHTML = generateContentHTML(ui);
        }

        function registerStaticListeners(widget) {
            // selectable table
            widget._ui[NET_PROP_LIST_TAG].selectable({
                filter: '.'+NET_PROP_ROW_CLASS,
                selecting: function() {
                    widget._ui[DEL_NET_PROP_TAG].removeClass('disabled');
                },
                unselecting: function () {
                    var size = widget._ui[NET_PROP_LIST_TAG].find('.ui-selected').size();
                    if (size == 0) {
                        widget._ui[DEL_NET_PROP_TAG].addClass('disabled');
                    }
                }
            });

            // change tab name dynamically
            widget._ui[NODE_LINK_TYPE_TAG].off(NAMESPACE);
            widget._ui[NODE_LINK_TYPE_TAG].on('keyup'+NAMESPACE, function (e) {
                var value = widget._ui[NODE_LINK_TYPE_TAG].val();
                console.log('on event type', value);
                var matcher = value.match(/\S+/g);
                if (matcher) {
                    widget._type = matcher[0];
                }
                widget._ui[NODE_LINK_TAB_VAL_TAG].text(widget._type);
            });

            // remove network property
            widget._ui[DEL_NET_PROP_TAG].off(NAMESPACE);
            widget._ui[DEL_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                widget._ui[NET_PROP_LIST_TAG].find('.ui-selected').remove();
                $(this).addClass('disabled');
            });

            // add network property
            widget._ui[ADD_NET_PROP_TAG].off(NAMESPACE);
            widget._ui[ADD_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                widget._ui[NET_PROP_LIST_TAG].append(generateNetworkPropRow(widget));
            });

            widget._ui[NODE_LINK_RATE_TAG].off(NAMESPACE);
            widget._ui[NODE_LINK_RATE_TAG].on('input', function () {
                var val = parseInt($(this).val());

                if (isNaN(val)) {
                    val = widget._rate;

                } else if (val > RATE_MAX) {
                    val = RATE_MAX;

                } else if (val < RATE_MIN) {
                    val = RATE_MIN;
                }

                widget._rate = val;
                $(this).val(widget._rate);
            });
        }

        function generateTabHTML(ui) {
            return '' +
                '<li id="'+NODE_LINK_TAB_ROOT_TAG+ui._id+'" class="'+getActiveStatus(ui)+'" '+HTML5_ATTR_TAG+'="'+ui._id+'">' +
                    '<a id="'+NODE_LINK_TAB_VAL_TAG+ui._id+'" href="#node-link-'+ui._id+'" data-toggle="tab">'+ui._type+'</a>' +
                '</li>'
        }

        function generateContentHTML(ui) {
            return '' +
            '<div class="tab-pane '+getActiveStatus(ui)+'" id="'+NODE_LINK_TAG+ui._id+'" '+HTML5_ATTR_TAG+'="'+ui._id+'">' +
                '<div class="row-fluid">' +
                    '<div class="input-prepend span4">' +
                        '<span class="add-on add-on-gray">Type</span>' +
                        '<input id="'+NODE_LINK_TYPE_TAG+ui._id+'" type="text" class="input-medium" placeholder="LAN, Wifi..." value="'+ui._type+'" />' +
                    '</div>' +
                    '<div class="input-prepend offset4 span3">' +
                        '<span class="add-on add-on-gray">Rate</span>' +
                        '<input id="'+NODE_LINK_RATE_TAG+ui._id+'" type="number" class="input-small" placeholder="100" min="0" max="100" value="'+ui._rate+'" />' +
                    '</div>' +
                '</div>' +
                '<div class="row-fluid">' +
                    '<div class="well" style="padding-top: 0; margin-bottom: 0">' +
                        '<h5>' +
                            '<span class="span4">Network properties</span>' +
                            '<div class="btn-group span2 offset6">' +
                                '<button id="'+DEL_NET_PROP_TAG+ui._id+'" class="btn btn-danger btn-mini disabled"><i class="icon-trash icon-white"></i></button>' +
                                '<button id="'+ADD_NET_PROP_TAG+ui._id+'" class="btn btn-info btn-mini"><i class="icon-plus icon-white"></i></button>' +
                            '</div>' +
                        '</h5>' +
                        '<div id="'+NET_PROP_LIST_TAG+ui._id+'" class="row-fluid">' +
                            generateNetworkPropRow(ui) +
                        '</table>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }

        // private method
        function generateNetworkPropRow(ui, key, value) {
            var htmlKey = (key && key.length > 0) ? ' value="'+key+'"': '',
                htmlVal = (value && value.length > 0) ? ' value="'+value+'"': '',
                idPair = createNewNetPropPair(ui);

            return  '<div class="row-fluid '+NET_PROP_ROW_CLASS+'">' +
                        '<div class="span3"><input id="'+idPair.key+'" type="text" placeholder="IP" '+htmlKey+' /></div>' +
                        '<div class="span7 offset2"><input id="'+idPair.value+'" type="text" placeholder="192.168.1.1"  '+htmlVal+' /></div>' +
                    '</div>';
        }

        function createNewNetPropPair(ui) {
            var propID = ui._propsIDCounter;
            ui._propsIDCounter++;
            ui._propsIDs.push(propID);

            return getPropIDPair(ui._id, propID);
        }

        function getPropIDPair(nodeLinkID, propID) {
            return {
                key: NET_PROP_KEY_TAG+nodeLinkID+'-'+propID,
                value: NET_PROP_VAL_TAG+nodeLinkID+'-'+propID
            };
        }

        function getActiveStatus(ui) {
            return (ui._active) ? 'active' : '';
        }

        return UINodeLinkWidget;
    }
);