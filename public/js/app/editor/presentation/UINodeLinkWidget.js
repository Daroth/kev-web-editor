define(
    [
        'jquery',
        'abstraction/KNodeLink',
        'util/Delay',
        'templates/instance-props'
    ],
    function ($, KNodeLink, Delay, instancePropsTpl) {

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
            NET_PROP_ERR_TAG        = 'network-prop-err-',
            DEL_NET_PROP_TAG        = 'network-prop-del-',
            ADD_NET_PROP_TAG        = 'network-prop-add-',
            HTML5_ATTR_TAG          = 'data-node-link',
            NET_PROP_ROW_CLASS      = 'network-prop-row',
            RATE_MAX                = 100,
            RATE_MIN                = 0;

        function UINodeLinkWidget(id) {
            this._id = id;
            this._type = 'type';
            this._rate = 100;
            this._propsIDCounter = 0;
            this._propsIDs = [];
            this._tabHTML = '';
            this._contentHTML = '';
            this._active = false;
            this._DOMready = false;
            this._nodeLink = new KNodeLink();

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

        UINodeLinkWidget.prototype.getType = function () {
            return this._type;
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
                var matcher = value.match(/\S+/g);
                if (matcher) {
                    widget._type = matcher[0];
                }
                widget._ui[NODE_LINK_TAB_VAL_TAG].text(widget._type);
            });

            // remove network property
            widget._ui[DEL_NET_PROP_TAG].off(NAMESPACE);
            widget._ui[DEL_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                var rowElem = widget._ui[NET_PROP_LIST_TAG].find('.ui-selected');
                rowElem.each(function () {
                    var keyID = $(this).find('input[id*='+NET_PROP_KEY_TAG+']').attr('id');
                    widget._nodeLink.remove(keyID);
                });

                // clear view
                rowElem.remove();
                $(this).addClass('disabled');
            });

            // add network property
            widget._ui[ADD_NET_PROP_TAG].off(NAMESPACE);
            widget._ui[ADD_NET_PROP_TAG].on('click'+NAMESPACE, function () {
                widget._ui[NET_PROP_LIST_TAG].append(generateNetworkPropRow(widget));
                registerListenersForProps();
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

            function registerListenersForProps() {
                var props = widget._nodeLink;
                for (var i=0; i < widget._propsIDs.length; i++) {
                    // closure to ensure idPair is the right one for each jquery keyup callback
                    (function (idPair) {
                        var keyInput = $('#'+idPair.key),
                            valueInput = $('#'+idPair.value),
                            errorDiv = $('#'+idPair.error);

                        keyInput.off(NAMESPACE);
                        keyInput.on('keyup'+NAMESPACE, function () {
                            var keyValue = keyInput.val();
                            // clear error fields
                            keyInput.closest('.control-group').removeClass('error');
                            errorDiv.hide();

                            Delay(function delayedKeyupValidation() {
                                if (props.containsKeyID(idPair.key)) {
                                    // we already have a value set for this key input field
                                    // check if another key field as this value
                                    if (props.containsKey(keyValue, idPair.key)) {
                                        // someone else already has this key (other than me = idPair.key)
                                        // so this is not possible, display error message
                                        displayError(keyValue);
                                    } else {
                                        // we are good to go, this key is available
                                        updateModel(keyValue);
                                    }
                                } else {
                                    if (props.containsKey(keyValue)) {
                                        // someone else already has this key
                                        displayError(keyValue);
                                    } else {
                                        // we are good to go, this key is available
                                        updateModel(keyValue);
                                    }
                                }
                            }, 1000);
                        });

                        valueInput.off(NAMESPACE);
                        valueInput.on('keyup'+NAMESPACE, function () {
                            props.setValue(idPair.key, $(this).val());
                        });

                        function displayError(value) {
                            keyInput.closest('.control-group').addClass('error');
                            errorDiv.find('.text-error').html('"'+value+'" is already used');
                            errorDiv.show('fast');
                        }

                        function updateModel(value) {
                            if (value.length != 0) { // do not save an empty key
                                props.setKey(idPair.key, value);
                            }
                        }
                    })(getPropIDPair(widget._id, widget._propsIDs[i]));
                }
            }
            registerListenersForProps();
        }

        return UINodeLinkWidget;
    }
);