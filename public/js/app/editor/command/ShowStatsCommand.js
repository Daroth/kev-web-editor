define(
    [
        'util/ModelHelper'
    ],

    function (ModelHelper) {

        function ShowStatsCommand() {}

        ShowStatsCommand.prototype.execute = function (editor) {
            var model = editor.getModel();

            var nbGrps = 0,
                nbComps = 0,
                nbNodes = 0,
                nbChans = 0;

            // get model statistics
            if (model) {
                var libz = ModelHelper.getLibraries(model);
                for (var i=0; i < libz.length; i++) {
                    var compz = libz[i].components;
                    for (var j=0; j < compz.length; j++) {
                        switch (compz[j].type) {
                            case 'ComponentType':
                                nbComps++;
                                break;
                            case 'NodeType':
                                nbNodes++;
                                break;
                            case 'GroupType':
                                nbGrps++;
                                break;
                            case 'ChannelType':
                                nbChans++;
                                break;
                            default:
                                break;
                        }
                    }
                }
            }

            // set popup content
            $('#stats-popup-content').html(
                "<h6>Metamodel types:</h6>" +
                "<table class='table'>" +
                createHTMLRow("Group Type", nbGrps) +
                createHTMLRow("Component Type", nbComps) +
                createHTMLRow("Node Type", nbNodes) +
                createHTMLRow("Channel Type", nbChans) +
                "</table>"+

                "<h6>Instances:</h6>" +
                "<table class='table'>" +
                createHTMLRow("Group Instances", model.getGroups().size()) +
                createHTMLRow("Component Instances", getComponentInstancesCount(model)) +
                createHTMLRow("Node Instances", model.getNodes().size()) +
                createHTMLRow("Channel Instances", model.getHubs().size()) +
                "</table>"
            );

            // show popup
            $('#stats-popup').modal({show: true});
        }

        return ShowStatsCommand;

        function createHTMLRow(tag, value) {
            return "<tr>" +
                     "<td class='span8'>"+tag+"</td>"+
                     "<td class='span4'>"+
                        "<div class='pull-right'>"+ value +"</div>"
                     "</td>"+
                   "</tr>";
        }

        function getComponentInstancesCount(model) {
            var count = 0,
                nodes = model.getNodes();

            for (var i=0; i < nodes.size(); i++) count += nodes.get(i).getComponents().size();

            return count;
        }
    }
);