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
        'behave',
        'command/SaveCommand',
        'command/SaveAsKevsCommand',
        'command/SaveAsPNGCommand',
        'command/LoadCommand',
        'command/OpenKevsEditorCommand',
        'command/SettingsCommand',
        'command/DebugCommand',
        'command/MergeDefaultLibraryCommand',
        'command/ClearCommand',
        'command/ClearInstancesCommand',
        'command/OpenFromNodeCommand',
        'command/ZoomInCommand',
        'command/ZoomDefaultCommand',
        'command/ZoomOutCommand',
        'bootstrap/tooltip',
        'bootstrap/modal',
        'bootstrap/collapse',
        'bootstrap/dropdown',
        'bootstrap/alert',
        'bootstrap/popover',
        'jqueryui/resizable'
    ],

    function ($, Kinetic, CFactory, Config, Behave,
              SaveCommand, SaveAsKevsCommand, SaveAsPNGCommand, LoadCommand, OpenKevsEditorCommand, SettingsCommand,
              DebugCommand, MergeDefaultLibraryCommand, ClearCommand, ClearInstancesCommand, OpenFromNodeCommand,
              ZoomInCommand, ZoomDefaultCommand, ZoomOutCommand,
              _bootstrap) {

        // document.onload
        $(function() {
            // init editor
            var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);
            editor.getUI().create($('#'+Config.CONTAINER_ID).width(), $('#'+Config.CONTAINER_ID).height());

            // load editor's settings from Local Storage
            var storage = window.localStorage;
            if (storage) { // check if browser is compatible with HTML5 Local Storage
                var askBeforeLeaving = storage.getItem(Config.LS_ASK_BEFORE_LEAVING);
                askBeforeLeaving = (askBeforeLeaving == "true") ? true : false;
                $('#ask-before-leaving').prop('checked', askBeforeLeaving);
            }

            // use Behave.js for Kevs Editor
            var kevsEditor = new Behave({
                textarea: document.getElementById('kev-script')
            });

            $('.close').click(function () {
                // global behavior for alerts : close will remove 'in' class
                // in order for them to properly hide (with the CSS3 magic)
                $(this).parent().removeClass('in');
            });

            // safety check because one does not simply like when he loses
            // a 30 minutes work on a model by miss-pressing F5 button...if u no wat I mean
            $(window).bind('beforeunload', function() {
                var askBeforeLeaving = $('#ask-before-leaving').prop('checked');
                if (askBeforeLeaving) {
                    return 'Leaving now will discard any changes you made.';
                }
            });

            // show zoom controls when mouse hovers #editor area
            $('#editor').on('mouseenter', function () {
                $('#zoom-controls').stop(true, true).delay(600).show('fast');
            });

            // hide zoom controls when mouse leaves #editor area
            $('#editor').on('mouseleave', function () {
                $('#zoom-controls').stop(true, true).delay(600).hide('fast');
            });

            // ========================================
            // Listeners that trigger XXXCommand.execute(...)
            $('#load').click(function (e) {
                var cmd = new LoadCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#save').click(function (e) {
                var cmd = new SaveCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#save-kevs').click(function (e) {
                var cmd = new SaveAsKevsCommand();
                cmd.execute();
                e.preventDefault();
            });

            $('#save-png').click(function (e) {
                var cmd = new SaveAsPNGCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#open-from-node').click(function (e) {
                var cmd = new OpenFromNodeCommand();
                var protocol = $('#open-node-protocol option:selected').val();
                var uri = $('#open-node-uri').val();

                cmd.execute(protocol, uri, editor);
                e.preventDefault();
            });

            $('#open-kevs-editor').click(function (e) {
                var cmd = new OpenKevsEditorCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#settings').click(function (e) {
                var cmd = new SettingsCommand();
                cmd.execute();
                e.preventDefault();
            });

            $('#zoom-in').click(function (e) {
                var cmd = new ZoomInCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#zoom-default').click(function (e) {
                var cmd = new ZoomDefaultCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#zoom-out').click(function (e) {
                var cmd = new ZoomOutCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#debug').click(function (e) {
                var cmd = new DebugCommand();
                cmd.execute();
                e.preventDefault();
            });

            $('#clear').click(function (e) {
                var cmd = new ClearCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#clear-instances').click(function (e) {
                var cmd = new ClearInstancesCommand();
                cmd.execute(editor);
                e.preventDefault();
            });

            $('#model-load-corelib').click(function (e) {
                // prevent user from clicking on this link and hide the menu
                // without 'really' choosing one of the corelibs to load
                return false;
            });

            $('.model-load-corelib').click(function (e) {
                var cmd = new MergeDefaultLibraryCommand();
                cmd.execute($(this).attr('data-lib'), editor);
                e.preventDefault();
            });
            // END Listeners that trigger Cmd.execute()
            // ========================================
        });

        return {};
    }
);