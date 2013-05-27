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
            this._startNodeBtn = $('#node-start');
            this._stopNodeBtn = $('#node-stop');

            registerCallbacks(this);
        }

        // private method
        function registerCallbacks(ui) {
            ui._startNodeBtn.on('click', function () {
                ui._ctrl.p2cStartNode();
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

        RuntimeUI.prototype.c2pNodeStarted = function () {
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