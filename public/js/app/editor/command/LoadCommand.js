define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper',
        'kevoree'
    ],
    function ($, ModelHelper, AlertPopupHelper, Kevoree) {
        var NAMESPACE = '.load-file-command';

        function LoadCommand () {}

        LoadCommand.prototype.execute = function (editor) {
            if (editor.getModel() != null) {
                // current model is not null, meaning that it could be overwritten
                // so ask user if he really want that to happen
                // TODO
                loadProcess();
            } else {
                loadProcess();
            }

            function loadProcess() {
                // opens file selector
                $('#file').trigger('click');

                // called when a file is selected
                $('#file').off(NAMESPACE);
                $('#file').on('change'+NAMESPACE, function () {
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
                        var jsonModel = JSON.parse(event.target.result),
                            strModel = JSON.stringify(jsonModel);
//                        try {
                            var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
                            var model = loader.loadModelFromString(strModel).get(0);
                            editor.setModel(model);

                            AlertPopupHelper.setText("Model \""+file.name+"\" loaded successfully");
                            AlertPopupHelper.setType(AlertPopupHelper.SUCCESS);
                            AlertPopupHelper.show(5000);

//                        } catch (err) {
//                            AlertPopupHelper.setText(err.message);
//                            AlertPopupHelper.setType(AlertPopupHelper.ERROR);
//                            AlertPopupHelper.show(5000);
//                        }
                    }
                    fReader.readAsText(file);

                    // reset input field
                    $(this).val('');
                });
            }
        }

        return LoadCommand;
    }
);