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
        app: '../app/'
    }
});

// Start the main app logic.
requirejs(
    [
        'jquery',
        'jquery-ui',
        'bootstrap',
        'kinetic',
        'app/factory/CFactory'
    ],

    function ($, jqui, _bootstrap, Kinetic, CFactory) {
        $(function() {
            //- init editor
            var editor = CFactory.getInstance().newEditor('editor');
            editor.getUI().create($('#editor').width(), $('#editor').height());

            $('#save').click(function () {
                var serializedStage = editor.getUI().getStage().toJSON();
                console.log(serializedStage);
            });

            $('#save-kevs').click(function () {

            });
        });

        return {};
    }
);