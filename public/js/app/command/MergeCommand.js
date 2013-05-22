define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper'
    ],
    function ($, ModelHelper, AlertPopupHelper) {
        function MergeCommand () {}

        MergeCommand.prototype.execute = function (editor) {
            AlertPopupHelper.setText("Merge: not implemented yet");
            AlertPopupHelper.setType(AlertPopupHelper.WARN);
            AlertPopupHelper.show(5000);

//            // opens file selector
//            $('#file').trigger('click');
//
//            // called when a file is selected
//            $('#file').change(function () {
//                var file = $('#file').get(0).files[0]; // yeah, we do not want multiple file selection
//                if ($('#file').get(0).files.length > 1) {
//                    console.warn("You have selected multiple files ("
//                        +$('#file').get(0).files[0].length
//                        +") so I took the first one in the list ("
//                        +$('#file').get(0).files[0].name
//                        +")");
//                }
//                var fReader = new FileReader();
//                fReader.onload = function (event) {
//                    // retrieve data from selected file
//                    var data = event.target.result;
//                    try {
//                        // TODO merge
//                        //editor.setModel(JSON.parse(data));
//
//                        AlertPopupHelper.setText("Model \""+file.name+"\" loaded successfully");
//                        AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
//                        AlertPopupHelper.show(5000);
//
//                    } catch (err) {
//                        AlertPopupHelper.setText(err.message);
//                        AlertPopupHelper.setType(AlertPopupHelper.ERROR);
//                        AlertPopupHelper.show(5000);
//                    }
//                }
//                fReader.readAsText(file);
//            });
        }

        return MergeCommand;
    }
);