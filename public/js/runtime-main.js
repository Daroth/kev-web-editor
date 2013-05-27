requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        bootstrap:  'bootstrap/src',
        app:        '../app',
        util:       '../app/util',
        ui:         '../app/runtime/ui',
        ctrl:       '../app/runtime/ctrl'
    }
});

define(
    [
        'ctrl/Runtime',
        'jquery',
        'jqueryui/effect-highlight',
        'bootstrap/tab'
    ],

    function (Runtime, $, _bootstrap) {

        var runtime = new Runtime() // Runtime app controller

        return {};
    }
);