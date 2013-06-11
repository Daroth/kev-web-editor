define(
    [
        'util/Pooffs',
        'util/StringBuilder',
        'presentation/property/UIInstanceProps',
        'bootstrap/multiselect'
    ],
    function (Pooffs, StringBuilder, UIInstanceProps, _bootstrap) {
        var NAMESPACE       = "ui-node-props",
            PUSH_ACTION     = "node-push-action",
            PULL_ACTION     = "node-pull-action",
            GROUP_ACTION    = "node-group-action",
            PROGRESS_BAR    = "node-progress-bar";

        UINodeProps.INIT_BY_NODES   = "node-network-init-by";
        UINodeProps.NODE_NETWORK_IP = "node-network-ip";

        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
        }

        UINodeProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this), // super.getHTML()
                builder = new StringBuilder(html),
                model = this._ctrl.getEditor().getModel();

            function generateOptions(ui) {
                var nodes = model.getNodes();
                var opts = new StringBuilder();
                var selected = '';
                for (var i=0; i < nodes.size(); i++) {
                    if (nodes.get(i).getName() == ui._ctrl.getName()) selected = ' selected';
                    opts.append('<option value="'+nodes.get(i).getName()+'"'+selected+'>')
                        .append(nodes.get(i).getName())
                        .append('</option>');
                    selected = '';
                }
                return opts.toString();
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

            // if this entity is a node, add some special properties
            builder.append('<div class="row-fluid">')
                .append('<div class="span4">Reachable from</div>')
                .append('<select id="'+UINodeProps.INIT_BY_NODES+'" multiple="multiple">')
                .append(generateOptions(this._ui))
                .append('</select>')
                .append('</div>');

            builder.append('</div>');

            builder.append('<div class="row-fluid" style="margin-top: 10px;">')
                .append('<div class="span4">Network address</div>')
                .append('<div class="input-append input-fullwidth span8">')
                .append('<div class="input-wrapper"><input id="'+UINodeProps.NODE_NETWORK_IP+'" type="text" placeholder="Network address"/></div>')
                .append('<button class="btn"><i class="icon-plus"></i></span>')
                .append('</div>')
                .append('</div>');

            builder.append('<div class="row-fluid">')
                .append('<button id="'+PUSH_ACTION+'" type="button" class="btn btn-inverse span4">Push</button>')
                .append('<div class="span4">')
                .append('<select id="'+GROUP_ACTION+'" class="row-fluid">');

            var grps = getThisNodeGroups(this._ui);
            for (var i=0; i < grps.length; i++) {
                builder.append('<option value="'+grps[i].getName()+'">'+grps[i].getName()+'</option>');
            }
            builder.append('</select>')
                .append('</div>')
                .append('<button id="'+PULL_ACTION+'" type="button" class="btn btn-inverse span4">Pull</button>')
                .append('</div>');

            builder.append('<div id="'+PROGRESS_BAR+'" class="progress progress-info progress-striped active row-fluid hide" style="margin-top: 10px;">')
                .append('<div class="bar" style="width: 100%"></div>')
                .append('</div>');

            return builder.toString();
        }

        UINodeProps.prototype.onHTMLAppended = function () {
            $('#'+UINodeProps.INIT_BY_NODES).multiselect({
                includeSelectAllOption: true,
                maxHeight: 200
            });

            var ctrl = this._ctrl,
                pushBtn = $('#'+PUSH_ACTION),
                pullBtn = $('#'+PULL_ACTION);

            pushBtn.off(NAMESPACE);
            pushBtn.on('click', function () {
                ctrl.p2cPushModel();
            });

            pullBtn.off(NAMESPACE);
            pullBtn.on('click', function () {
                ctrl.p2cPullModel();
            });
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