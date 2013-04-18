requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        bootstrap: 'bootstrap/src',
        app: '../app',
        abstraction: '../app/abstraction',
        control: '../app/control',
        presentation: '../app/presentation',
        factory: '../app/factory',
        io: '../app/io',
        util: '../app/util'
    }
});

// Start the main app logic.
define(
    [
        'jquery',
        'kinetic',
        'factory/CFactory',
        'util/Config',
        'io/IOEngine',
        'bootstrap/tooltip',
        'bootstrap/modal',
        'bootstrap/collapse',
        'bootstrap/dropdown',
        'bootstrap/alert'
    ],

    function ($, Kinetic, CFactory, Config, IOEngine, _bootstrap) {
        $(function() {
            //- init editor
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);
            editor.getUI().create($('#'+Config.CONTAINER_ID).width(), $('#'+Config.CONTAINER_ID).height());

            // opens file chooser when "open" menu item is clicked
            $('#open').click(function () {
                $('#file').trigger('click');
            });

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

                        console.log("Model \""+file.name+"\" loaded successfully", model);
                        editor = IOEngine.load(model);

                    } catch (err) {
                        var errorMsg = "Unable to read model from \""+file.name+"\" file. Model is supposed to be in JSON";
                        console.error(errorMsg);
                        $('#alert-content').text(errorMsg);
                        $('#alert').addClass('in');
                    }
                }
                fReader.readAsText(file);
            });

            // opens save-popup when clicked
            $('#save').click(function () {
                var serializedStage = editor.getUI().getStage().toJSON();

                var json = IOEngine.save(editor);
                console.log(json);

                setTimeout(function () {
                    $('#filename').val('/foo/bar/model.kvm');
                    $('#save-popup-content').html(
                        '<p>'+serializedStage+'</p>'
                    );
                    $('#save-popup').modal({ show: true });
                }, 300);
            });

            $('#save-kevs').click(function () {
                console.warn("SaveAsKevs: not implemented yet");

            });

            $('#settings').click(function () {
                $('#settings-popup').modal({ show: true });
            });

            $('#debug').click(function () {
                $('#debug-alert').addClass('in');
            });

            $('.close').click(function () {
                $(this).parent().removeClass('in');
            });
        });

        return {};
    }
);