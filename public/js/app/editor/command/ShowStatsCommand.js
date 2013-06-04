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
                "<table class='table'>" +
                createHTMLRow("GroupType", nbGrps) +
                createHTMLRow("ComponentType", nbComps) +
                createHTMLRow("NodeType", nbNodes) +
                createHTMLRow("ChannelType", nbChans) +
                "</table>"
            );

            // show popup
            $('#stats-popup').modal({show: true});
        }

        return ShowStatsCommand;

        function createHTMLRow(tag, value) {
            return "<tr>" +
                     "<td>"+tag+"</td>"+
                     "<td>"+value+"</td>"+
                   "</tr>";
        }
    }
);