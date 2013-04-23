requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        bootstrap:      'bootstrap/src',
        app:            '../app',
        abstraction:    '../app/abstraction',
        control:        '../app/control',
        presentation:   '../app/presentation',
        factory:        '../app/factory',
        io:             '../app/io',
        util:           '../app/util',
        command:        '../app/command'
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
        'command/SaveCommand',
        'command/SaveAsKevsCommand',
        'command/LoadCommand',
        'command/SettingsCommand',
        'command/DebugCommand',
        'command/MergeDefaultLibraryCommand',
        'command/ClearCommand',
        'bootstrap/tooltip',
        'bootstrap/modal',
        'bootstrap/collapse',
        'bootstrap/dropdown',
        'bootstrap/alert',
        'bootstrap/popover'
    ],

    function ($, Kinetic, CFactory, Config, IOEngine,
              SaveCommand, SaveAsKevsCommand, LoadCommand, SettingsCommand, DebugCommand, MergeDefaultLibraryCommand,
              ClearCommand,
              _bootstrap) {
        // document.onload
        $(function() {
            //- init editor
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);
            editor.getUI().create($('#'+Config.CONTAINER_ID).width(), $('#'+Config.CONTAINER_ID).height());

            // opens file chooser when "load" menu item is clicked
            $('#load').click(function () {
                var cmd = new LoadCommand();
                cmd.execute(editor);
            });

            $('.close').click(function () {
                // global behavior for alerts : close will remove 'in' class
                // in order for them to properly hide (with the CSS3 magic)
                $(this).parent().removeClass('in');
            });

            $('#lib-tree-search').keyup(function () {
                $('.lib-item').filter(function (index) {
                    var itemName = $(this).text().toLowerCase();
                    var searchVal = $('#lib-tree-search').val().toLowerCase();
                    if (itemName.search(searchVal) == -1) {
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                    console.log(itemName, searchVal);
                });
            });

            $('#lib-tree-settings-fold').click(function () {
                $('.nav-header').each(function (index) {
                    var icon = $(this).children().first();
                    if (icon.hasClass('icon-arrow-right')) {
                        $(this).siblings().hide('fast');
                        icon.removeClass('icon-arrow-right');
                        icon.addClass('icon-arrow-down');
                    }
                });
            });

            $('#lib-tree-settings-unfold').click(function () {
                $('.nav-header').each(function (index) {
                    var icon = $(this).children().first();
                    if (icon.hasClass('icon-arrow-down')) {
                        $(this).siblings().show('fast');
                        icon.addClass('icon-arrow-right');
                        icon.removeClass('icon-arrow-down');
                    }
                });
            });

            // ========================================
            // Listeners that trigger XXXCommand.execute(...)
            $('#save').click(function () {
                var cmd = new SaveCommand();
                cmd.execute(editor);
            });

            $('#save-kevs').click(function () {
                var cmd = new SaveAsKevsCommand();
                cmd.execute();
            });

            $('#settings').click(function () {
                var cmd = new SettingsCommand();
                cmd.execute();
            });

            $('#debug').click(function () {
                var cmd = new DebugCommand();
                cmd.execute();
            });

            $('#clear').click(function () {
                var cmd = new ClearCommand();
                cmd.execute(editor);
            });

            $('.model-load-corelib').click(function () {
                var cmd = new MergeDefaultLibraryCommand();
                cmd.execute($(this).attr('data-lib'), editor);
            });
            // END Listeners that trigger Cmd.execute()
            // ========================================
        });

        return {};
    }
);