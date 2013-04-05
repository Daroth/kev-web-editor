requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    shim: {
        // specify dependency with jQuery for bootstrap
        'bootstrap':{deps: ['jquery']},
        'jquery-ui':{deps: ['jquery']}
    },
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'jquery-ui', 'bootstrap', 'kinetic', 'app/Editor'],
    function ($, jqui, _bootstrap, kinetic, Editor) {
        $(function() {
            //- init editor
            var editor = new Editor('editor');
            editor.create($('#editor').width(), $('#editor').height());

            // refresh editor size on window resizing
            $(window).resize(function() {
                editor.stage.setWidth($('#editor').width());
                editor.stage.setHeight($('#editor').height());
                editor.stage.draw();
            });

            // foldable lib-tree
            $('.nav-header').click(function() {
                var icon = $(this).parent().children().first().children().first();
                icon.toggleClass('icon-arrow-right');
                icon.toggleClass('icon-arrow-down');
                $(this).parent().children('.lib-item').toggle('fast');
            });

            // draggable item in lib-tree
            $('.lib-item').draggable({
                helper: function() {
                    var clone = $(this).clone();
                    clone.addClass('dragged');
                    return clone;
                }
            });

            // drop behavior on #editor
            $('#editor').droppable({
                drop: function(event, ui) {
                    var entity = ui.draggable.attr('data-entity');
                    var type = ui.draggable.text();

                    switch (entity) {
                        case 'component':
                            editor.addComponent(type);
                            break;
                        case 'node':
                            editor.addNode(type);
                            break;
                        case 'group':
                            editor.addGroup(type);
                            break;
                        case 'channel':
                            editor.addChannel(type);
                            break;
                        default:
                            console.log("Editor drop event error: Unknown dropped item-entity");
                            break;
                    }
                }
            });
        });
});