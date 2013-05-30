define(
    [
        'util/Logger',
        'jquery',
        'jqueryui/effect-highlight',
        'bootstrap/tab'
    ],

    function (Logger, $) {
        function RuntimeUI(ctrl) {
            this._ctrl = ctrl;
            this._header = $('#header');
            this._tabsContainer = $('#tabs-container');
            this._tabs = $('#tabs');
            this._tabsPane = $('#tabs-container .tab-pane');
            this._tabCounter = this._tabsPane.size();
            this._startNodeBtn = $('#node-start');
            this._stopNodeBtn = $('#node-stop');
            this._nodeName = $('#node-name');
            this._grpSelect = $('#node-grp');
            this._grpIpSpecified = false;

            configUI(this);
            registerCallbacks(this);
        }

        // private method
        function configUI(ui) {
            // refresh tabs related variables
            ui._tabsPane = $('#tabs-container .tab-pane');
            ui._tabs = $('#tabs');
            ui._tabCounter = ui._tabsPane.size();

            function resize() {
                var fullHeight = $('body').outerHeight(true),
                    headerHeight = ui._header.outerHeight(true),
                    tabsContainerPaddingTop = ui._tabsContainer.css('padding-top'),
                    tabsHeight = ui._tabs.outerHeight(true);

                var computedPadding = parseInt(tabsContainerPaddingTop.substr(0, tabsContainerPaddingTop.length-2));
                tabsContainerPaddingTop = (computedPadding == 0) ? 50 : computedPadding;
                ui._tabsPane.each(function () {
                    $(this).height((fullHeight - headerHeight - tabsHeight - tabsContainerPaddingTop)+'px');
                });
            }
            $(document).ready(resize);
            $(window).resize(resize);
        }

        // private method
        function registerCallbacks(ui) {
            ui._nodeName.on('keyup', function (e) {
                if(e.keyCode == 13) {
                    ui._ctrl.p2cStartNode(ui._nodeName.val());
                }
            });

            ui._startNodeBtn.on('click', function () {
                ui._ctrl.p2cStartNode(ui._nodeName.val(), ui._grpSelect.find('option:selected').val());
            });

            ui._stopNodeBtn.on('click', function () {
                ui._ctrl.p2cStopNode();
            });

            $("#specify-grp-ip").click(function () {
                var that = $(this);
                $('#node-grp-ip').parent().toggle({
                    duration: 'fast',
                    complete: function () {
                        if (ui._grpIpSpecified) that.find('.icon-plus').removeClass('icon-plus').addClass('icon-minus');
                        else that.find('.icon-minus').removeClass('icon-minus').addClass('icon-plus');
                    }
                });
                ui._grpIpSpecified = !ui._grpIpSpecified;
            });
        }

        RuntimeUI.prototype.addTab = function (name, content) {
            this._tabCounter += 1;
            var tabID = 'appended-tab-' + (this._tabCounter);

            $('#tabs').append(
                '<li>' +
                    '<a href="#'+tabID+'" data-toggle="tab">'+name+'</a>' +
                '</li>');

            $('#tabs-content').append(
                '<div id="'+tabID+'" class="tab-pane in">' +
                    '<p>Your browser does not support Shadow DOM. You should consider using a real one (like Google Chrome or Firefox)</p>' +
                '</div>'
            );

            // using Shadow DOM to encapsulate component's view (own scope for CSS and script)
            var tabRoot = document.getElementById(tabID).createShadowRoot();
            tabRoot.innerHTML = content

            $("a[href='#"+tabID+"']").effect('highlight', {color: '#fff'}, 500);
            configUI(this);
        }

        RuntimeUI.prototype.c2pNodeStarted = function (nodeName, grpId) {
            this._nodeName.val(nodeName);
            this._startNodeBtn.addClass('disabled');
            this._stopNodeBtn.removeClass('disabled');
            Logger.log("Starting "+nodeName+" with "+this._grpSelect.find('option[value="'+grpId+'"]').text());
        }

        RuntimeUI.prototype.c2pNodeStopped = function () {
            this._startNodeBtn.removeClass('disabled');
            this._stopNodeBtn.addClass('disabled');
            Logger.log("Node stopped");
        }

        return RuntimeUI;
    }
);