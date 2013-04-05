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
    function ($, jqui, _bootstrap, Kinetic, Editor) {
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

            $('.lib-item').click(function() {
                triggerEvent($(this));
            });

            // drop behavior on #editor
            $('#editor').droppable({
                drop: function(event, ui) {
                    triggerEvent(ui.draggable);
                }
            });

            var triggerEvent = function(libItem) {
                var entity = libItem.attr('data-entity');
                var type = libItem.clone()      // clone the element
                                  .children()   // select all the children
                                  .remove()     // remove all the children
                                  .end()        // again go back to selected element
                                  .text();      // get the text of element
                var badgeCount = 1;

                switch (entity) {
                    case 'component':
                        badgeCount = editor.addComponent(type);
                        break;
                    case 'node':
                        badgeCount = editor.addNode(type);
                        break;
                    case 'group':
                        badgeCount = editor.addGroup(type);
                        break;
                    case 'channel':
                        badgeCount = editor.addChannel(type);
                        break;
                    default:
                        console.log("Editor drop event error: Unknown dropped item-entity");
                        return;
                }
                if (libItem.children().size() != 0) {
                    libItem.children().first().text(badgeCount)
                } else {
                    libItem.append("<span class='badge pull-right'>"+badgeCount+"</span>")
                }

            }
        });
});