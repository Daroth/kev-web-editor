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
        util:           '../app/util',
        abstraction:    '../app/editor/abstraction',
        control:        '../app/editor/control',
        presentation:   '../app/editor/presentation',
        factory:        '../app/editor/factory',
        command:        '../app/editor/command'
    }
});

// Start the main app logic.
define(
    [
        'kotlin/kotlin-maps',
        'jquery',
        'kinetic',
        'factory/CFactory',
        'util/Config',
        'behave',
        'util/QueryString',
        'command/SaveCommand',
        'command/SaveAsKevsCommand',
        'command/SaveAsPNGCommand',
        'command/LoadCommand',
        'command/OpenKevsEditorCommand',
        'command/RunKevScriptCommand',
        'command/SettingsCommand',
        'command/DebugCommand',
        'command/MergeDefaultLibraryCommand',
        'command/ClearCommand',
        'command/ClearInstancesCommand',
        'command/OpenFromNodeCommand',
        'command/ZoomInCommand',
        'command/ZoomDefaultCommand',
        'command/ZoomToCommand',
        'command/ZoomOutCommand',
        'command/ShowStatsCommand',
        'command/CheckModelCommand',
        'command/LoadSettingsCommand',
        'command/MergeCommand',
        'bootstrap/tooltip',
        'bootstrap/modal',
        'bootstrap/collapse',
        'bootstrap/dropdown',
        'bootstrap/alert',
        'bootstrap/popover',
        'hammer',
        'touchpunch'
    ],

<<<<<<< HEAD
    function (Kotlin, $, Kinetic, CFactory, Config, Behave, QueryStringCtrl,
=======
    function ($, Kinetic, CFactory, Config, Behave, QueryString,
>>>>>>> kwe_runtime
              SaveCommand, SaveAsKevsCommand, SaveAsPNGCommand, LoadCommand, OpenKevsEditorCommand, RunKevScriptCommand,
              SettingsCommand, DebugCommand, MergeDefaultLibraryCommand, ClearCommand, ClearInstancesCommand,
              OpenFromNodeCommand, ZoomInCommand, ZoomDefaultCommand, ZoomToCommand, ZoomOutCommand, ShowStatsCommand,
              CheckModelCommand, LoadSettingsCommand, MergeCommand,
              _bootstrap) {

        // init editor
        var editor = CFactory.getInstance().newEditor(Config.CONTAINER_ID);
        editor.getUI().create($('#'+Config.CONTAINER_ID).width(), $('#'+Config.CONTAINER_ID).height());

        // load editor's settings from Local Storage
        var loadSettingsCmd = new LoadSettingsCommand();
        loadSettingsCmd.execute(editor);

        // use Behave.js for Kevs Editor
        var kevsEditor = new Behave({
            textarea: document.getElementById('kev-script')
        });

        // create the controller that handles parameters in URL
        var qs = new QueryString();
        qs.process({
            corelib: function (env) {
                var envz = env.split('+');
                // merge those core libraries
                var cmd = new MergeDefaultLibraryCommand();
                for (var i=0; i < envz.length; i++) {
                    cmd.execute(envz[i], editor);
                }
            },
            zoom: function (scale) {
                // set editor zoom to the given scale if not wrong number
                var value = parseFloat(scale) || 1;
                if (value < 0) value = 0.1;
                var cmd = new ZoomToCommand();
                cmd.execute(editor, value);
            },
            menu: function (value) {
                var hide = (value == 'hide' || value == '0');
                if (hide) {
                    editor.getUI().c2pHideLibTree();
                } else {
                    editor.getUI().c2pShowLibTree();
                }
            }
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

        $('#merge').click(function (e) {
            var cmd = new MergeCommand();
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

        $('#check-model').click(function (e) {
            var cmd = new CheckModelCommand();
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

        $('#show-stats').click(function (e) {
            var cmd = new ShowStatsCommand();
            cmd.execute(editor);
            e.preventDefault();
        });

        $('#run-kevs').click(function (e) {
            var cmd = new RunKevScriptCommand();
            var script = $('#kev-script').val();
            cmd.execute(editor, script);
            e.preventDefault();
        });

        $('#settings').click(function (e) {
            var cmd = new SettingsCommand();
            cmd.execute(editor);
            e.preventDefault();
        });

        $('#zoom-in').click(function (e) {
            var cmd = new ZoomInCommand();
            cmd.execute(editor);
            e.preventDefault();
        });

        $('#editor').hammer().on("pinchout", function(e) {
            var cmd = new ZoomInCommand();
            cmd.execute(editor);
            e.preventDefault();
        });

        $('#editor').hammer().on("pinchin", function(e) {
            var cmd = new ZoomOutCommand();
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
//        console.log('isDigit');
//        console.log('{ = '+isDigit('{'));
//        console.log('z = '+isDigit('z'));
//        console.log('a = '+isDigit('a'));
//        console.log('2 = '+isDigit('2'));
//        console.log('" = '+isDigit('"'));
//        console.log('==========');
//
//        function isDigit(c) {
//            var digits = new Kotlin.HashSet()
//            var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9;
//            ((tmp$0 = digits) !== null && tmp$0 !== undefined ? tmp$0 : Kotlin.throwNPE()).add('0');
//            ((tmp$1 = digits) !== null && tmp$1 !== undefined ? tmp$1 : Kotlin.throwNPE()).add('1');
//            ((tmp$2 = digits) !== null && tmp$2 !== undefined ? tmp$2 : Kotlin.throwNPE()).add('2');
//            ((tmp$3 = digits) !== null && tmp$3 !== undefined ? tmp$3 : Kotlin.throwNPE()).add('3');
//            ((tmp$4 = digits) !== null && tmp$4 !== undefined ? tmp$4 : Kotlin.throwNPE()).add('4');
//            ((tmp$5 = digits) !== null && tmp$5 !== undefined ? tmp$5 : Kotlin.throwNPE()).add('5');
//            ((tmp$6 = digits) !== null && tmp$6 !== undefined ? tmp$6 : Kotlin.throwNPE()).add('6');
//            ((tmp$7 = digits) !== null && tmp$7 !== undefined ? tmp$7 : Kotlin.throwNPE()).add('7');
//            ((tmp$8 = digits) !== null && tmp$8 !== undefined ? tmp$8 : Kotlin.throwNPE()).add('8');
//            ((tmp$9 = digits) !== null && tmp$9 !== undefined ? tmp$9 : Kotlin.throwNPE()).add('9');
//            var tmp$10;
//            return ((tmp$10 = digits) !== null && tmp$10 !== undefined ? tmp$10 : Kotlin.throwNPE()).contains(c);
//        }
//
//        console.log('isBooleanLetter');
//        console.log('{ = '+isBooleanLetter('{'));
//        console.log('z = '+isBooleanLetter('z'));
//        console.log('a = '+isBooleanLetter('a'));
//        console.log('2 = '+isBooleanLetter('2'));
//        console.log('" = '+isBooleanLetter('"'));
//        console.log('==========');
//        function isBooleanLetter(c) {
//            var bools = new Kotlin.HashSet()
//            var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7;
//            ((tmp$0 = bools) !== null && tmp$0 !== undefined ? tmp$0 : Kotlin.throwNPE()).add('f');
//            ((tmp$1 = bools) !== null && tmp$1 !== undefined ? tmp$1 : Kotlin.throwNPE()).add('a');
//            ((tmp$2 = bools) !== null && tmp$2 !== undefined ? tmp$2 : Kotlin.throwNPE()).add('l');
//            ((tmp$3 = bools) !== null && tmp$3 !== undefined ? tmp$3 : Kotlin.throwNPE()).add('s');
//            ((tmp$4 = bools) !== null && tmp$4 !== undefined ? tmp$4 : Kotlin.throwNPE()).add('e');
//            ((tmp$5 = bools) !== null && tmp$5 !== undefined ? tmp$5 : Kotlin.throwNPE()).add('t');
//            ((tmp$6 = bools) !== null && tmp$6 !== undefined ? tmp$6 : Kotlin.throwNPE()).add('r');
//            ((tmp$7 = bools) !== null && tmp$7 !== undefined ? tmp$7 : Kotlin.throwNPE()).add('u');
//            var tmp$8;
//            return ((tmp$8 = bools) !== null && tmp$8 !== undefined ? tmp$8 : Kotlin.throwNPE()).contains(c);
//        }
//
//        console.log('isValueLetter');
//        console.log('{ = '+isValueLetter('{'));
//        console.log('z = '+isValueLetter('z'));
//        console.log('a = '+isValueLetter('a'));
//        console.log('2 = '+isValueLetter('2'));
//        console.log('" = '+isValueLetter('"'));
//        console.log('==========');
//        function isValueLetter(c) {
//            return c === '-' || c === '+' || c === '.' || isDigit(c) || isBooleanLetter(c);
//        }

        return {};
    }
);