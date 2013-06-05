requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app:        '../app'
    }
});

define(
    [
        'kevoree',
        'jquery'
    ],

    function (Kevoree, $) {
        $.getJSON('/merge/all', function (data) {
            var loader = new Kevoree.org.kevoree.loader.JSONModelLoader();
            var count = 20;

            var start = Date.now();
            for (var i=0; i < count; i++) {
                loader.loadModelFromString(JSON.stringify(data)).get(0);
            }
            var stop = Date.now();
            $('#results').html("Took me "+(stop-start)+"ms to loadModelFromString() "+count+" times !");
        });
    }
);