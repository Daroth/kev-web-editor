define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper',
        'kevoree'
    ],
    function ($, ModelHelper, AlertPopupHelper, Kevoree) {
        function LoadCommand () {}

        LoadCommand.prototype.execute = function (editor) {
            // opens file selector
            $('#file').trigger('click');

            // called when a file is selected
            $('#file').change(function () {
                var file = $('#file').get(0).files[0]; // yeah, we do not want multiple file selection
                if ($('#file').get(0).files.length > 1) {
                    console.warn("You have selected multiple files ("
                        +$('#file').get(0).files[0].length
                        +") so I took the first one in the list ("
                        +$('#file').get(0).files[0].name
                        +")");
                }
                var fReader = new FileReader();
                fReader.onload = function (event) {
                    // retrieve data from selected file
                    var model = JSON.parse(event.target.result);
                    try {
                        var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                        var root = loader.loadModelFromString(model);
                        console.log(root);
                        var serializer = new Kevoree.org.kevoree.serializer.JSONModelSerializer();
                        var os = new Kevoree.java.io.OutputStream();
                        serializer.serialize(root, os);
                        console.log(os);

                        editor.setModel(model);

                        AlertPopupHelper.setText("Model \""+file.name+"\" loaded successfully");
                        AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
                        AlertPopupHelper.show(5000);

                    } catch (err) {
                        AlertPopupHelper.setText(err.message);
                        AlertPopupHelper.setType(AlertPopupHelper.ERROR);
                        AlertPopupHelper.show(5000);
                    }
                }
                fReader.readAsText(file);
            });
        }

        return LoadCommand;
    }
);