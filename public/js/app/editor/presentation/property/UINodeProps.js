define(
    [
        'util/Pooffs',
        'util/StringBuilder',
        'presentation/property/UIInstanceProps'
    ],
    function (Pooffs, StringBuilder, UIInstanceProps) {
        Pooffs.extends(UINodeProps, UIInstanceProps);

        function UINodeProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
        }

        UINodeProps.prototype.getHTML = function () {
            var html = UIInstanceProps.prototype.getHTML.call(this),
                builder = new StringBuilder(html),
                model = this._ctrl.getEditor().getModel();

            function generateOptions(ui) {
                var nodes = model.getNodes();
                var opts = new StringBuilder();
                for (var i=0; i < nodes.size(); i++) {
                    if (nodes.get(i).getName() != ui._ctrl.getName()) {
                        opts.append('<option value="')
                            .append(nodes.get(i).getName())
                            .append('">')
                            .append(nodes.get(i).getName())
                            .append('</option>');
                    }
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
                .append('<select id="node-network-init-by" multiple="multiple">')
                .append(generateOptions(this._ui))
                .append('</select>')
                .append('</div>');

            builder.append('</div>');

            builder.append('<div class="row-fluid" style="margin-top: 10px;">')
                .append('<div class="span4">Network address</div>')
                .append('<input type="text" class="span8" placeholder="Network address" />')
                .append('</div>');

            builder.append('<div class="row-fluid">')
                .append('<button id="node-push-action" type="button" class="btn btn-inverse span4">Push</button>')
                .append('<div class="span4">')
                .append('<select class="row-fluid">');

            var grps = getThisNodeGroups(this._ui);
            for (var i=0; i < grps.length; i++) {
                builder.append('<option value="'+grps[i].getName()+'">'+grps[i].getName()+'</option>');
            }
            builder.append('</select>')
                .append('</div>')
                .append('<button id="node-pull-action" type="button" class="btn btn-inverse span4">Pull</button>')
                .append('</div>');

            builder.append('<div id="node-progress-bar" class="progress progress-info progress-striped active row-fluid hide" style="margin-top: 10px;">')
                .append('<div class="bar" style="width: 100%"></div>')
                .append('</div>');

            return builder.toString();
        }

        return UINodeProps;
    }
);