define(
    [
        'jquery',
        'io/IOEngine'
    ],
    function ($, IOEngine) {
        function LoadCommand () {
            this._editor = null;
        }

        LoadCommand.prototype.execute = function () {
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
                    var data = event.target.result;
                    try {
                        // parse data to JSON
                        var model = JSON.parse(data);
                        this._editor = IOEngine.load(model);
                        $('#alert-content').text("Model \""+file.name+"\" loaded successfully");
                        $('#alert').addClass('alert-success in');
                        setTimeout(function () {
                            $('#alert').removeClass('alert-success in');
                        }, 5000);

                    } catch (err) {
                        $('#alert-content').text(err.message);
                        $('#alert').addClass('alert-error in');
                        setTimeout(function () {
                            $('#alert').removeClass('alert-error in');
                        }, 5000);
                    }
                }
                fReader.readAsText(file);
            });
        }

        LoadCommand.prototype.setEditor = function (editor) {
            this._editor = editor;
        }

        return LoadCommand;
    }
);