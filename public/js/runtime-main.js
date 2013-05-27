requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        bootstrap:      'bootstrap/src'
    }
});

define(
    [
        'jquery',
        'jqueryui/effect-highlight',
        'bootstrap/tab'
    ],

    function ($, _bootstrap) {

        var tabCounter = $('#tabs-content .tab-pane').size();

        function addTab(name, content) {
            var tabID = 'appended-tab-' + (++tabCounter);

            $('#tabs').append(
                '<li>' +
                    '<a href="#'+tabID+'" data-toggle="tab">'+name+'</a>' +
                '</li>');
            $('#tabs-content').append(
                '<div id="'+tabID+'" class="tab-pane in">' +
                    '<p>' + content + '</p>' +
                '</div>');

            $("a[href='#"+tabID+"']").effect('highlight', {color: '#fff'}, 500);
        }

        return {};
    }
);