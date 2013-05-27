define(
    [
        'jquery',
        'jqueryui/effect-highlight',
        'bootstrap/tab'
    ],

    function ($) {
        function RuntimeUI(ctrl) {
            this._ctrl = ctrl;
            this._tabCounter = $('#tabs-content .tab-pane').size();
            this._header = $('#header');
            this._tabsContainer = $('#tabs-container');
            this._tabs = $('#tabs');
            this._tabsPane = $('#tabs-container .tab-pane');
            this._startNodeBtn = $('#node-start');
            this._stopNodeBtn = $('#node-stop');
            this._nodeName = $('#node-name');

            configUI(this);
            registerCallbacks(this);
        }

        // private method
        function configUI(ui) {
            function resize() {
                var fullHeight = $('body').outerHeight(true),
                    headerHeight = ui._header.outerHeight(true),
                    tabsContainerPaddingTop = ui._tabsContainer.css('padding-top'),
                    tabsHeight = ui._tabs.outerHeight(true);

                var computedPadding = parseInt(tabsContainerPaddingTop.substr(0, tabsContainerPaddingTop.length-2));
                tabsContainerPaddingTop = (computedPadding == 0) ? 20 : computedPadding;
                ui._tabsPane.height((fullHeight - headerHeight - tabsHeight - tabsContainerPaddingTop)+'px');
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
                ui._ctrl.p2cStartNode(ui._nodeName.val());
            });

            ui._stopNodeBtn.on('click', function () {
                ui._ctrl.p2cStopNode();
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
                    '<p>' + content + '</p>' +
                    '</div>');

            $("a[href='#"+tabID+"']").effect('highlight', {color: '#fff'}, 500);
        }

        RuntimeUI.prototype.c2pNodeStarted = function (nodeName) {
            this._nodeName.val(nodeName);
            this._startNodeBtn.addClass('disabled');
            this._stopNodeBtn.removeClass('disabled');
        }

        RuntimeUI.prototype.c2pNodeStopped = function () {
            this._startNodeBtn.removeClass('disabled');
            this._stopNodeBtn.addClass('disabled');
        }

        return RuntimeUI;
    }
);