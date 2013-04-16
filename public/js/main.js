requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    shim: {
        // specify dependency with jQuery for bootstrap
        'jquery-ui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'app/presentation/UIEditor': {
            deps: ['jquery-ui', 'bootstrap']
        }
    },
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
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
requirejs(
    [
        'jquery',
        'jquery-ui',
        'bootstrap',
        'kinetic',
        'factory/CFactory',
        'util/Config',
        'io/IOEngine'
    ],

    function ($, jqui, _bootstrap, Kinetic, CFactory, Config, IOEngine) {
        $(function() {
            //- init editor
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);
            editor.getUI().create($('#'+Config.CONTAINER_ID).width(), $('#'+Config.CONTAINER_ID).height());

            // opens file chooser when "open" menu item is clicked
            $('#open').click(function () {
                $('#file').trigger('click');

                // prevent default href="#"
                return false;
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
                    var data = event.target.result;
                    var model = JSON.parse(data);
                    console.log("Model \""+file.name+"\" loaded successfully", model);
                    editor = IOEngine.load(model);
                }
                fReader.readAsText(file);
            });

            // opens save-popup when clicked
            $('#save').click(function () {
                var serializedStage = editor.getUI().getStage().toJSON();

                console.log(IOEngine.save(editor));

                $('#filename').val('/foo/bar/model.kvm');
                $('#save-popup-content').html(
                    '<p>'+serializedStage+'</p>'
                );
                $('#save-popup').modal({ show: true });

                // prevent default href="#"
                return false;
            });

            $('#save-kevs').click(function () {


                // prevent default href="#"
                return false;
            });
        });

        return {};
    }
);