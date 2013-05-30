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
        util:       '../app/runtime/util',
        app_util:   '../app/util',
        ui:         '../app/runtime/ui',
        ctrl:       '../app/runtime/ctrl'
    }
});

define(
    [
        'ctrl/Runtime',
        'bootstrap/collapse',
        'bootstrap/dropdown',
        'bootstrap/alert',
        'bootstrap/popover'
    ],

    function (Runtime, _bootstrap) {

        HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.createShadowRoot ||
            HTMLElement.prototype.webkitCreateShadowRoot;
        var runtime = new Runtime() // Runtime app controller

//        for (var i=1; i < 10; i++) {
//            runtime.addTab('Tab'+i, 'Loading Tab'+i+' content...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci arcu, sodales adipiscing accumsan eget, egestas sit amet massa. Aenean sit amet accumsan sapien. Morbi venenatis odio eget metus imperdiet vel egestas dui mollis. Cras ornare ultricies mauris sed facilisis. Sed sagittis gravida sapien, nec bibendum metus vestibulum scelerisque. Aenean sed metus et risus tincidunt congue non eget tortor. Nulla sollicitudin lectus vel libero cursus rhoncus ut at risus. Sed volutpat volutpat dui, at cursus tortor semper at. Cras quis neque eget enim pellentesque consequat. Nulla a magna in justo porta cursus a id nunc. Donec ultrices, sapien nec molestie sodales, purus diam ornare erat, non convallis ante ipsum eu sem. Integer adipiscing ipsum sed nisl interdum eget venenatis nibh posuere. Suspendisse potenti. Vivamus nec ullamcorper eros. Donec faucibus leo id nulla auctor ac aliquam urna euismod. Curabitur mi orci, suscipit a tempus ut, eleifend iaculis libero. Donec lacinia sapien et elit posuere a eleifend dolor sodales. Curabitur ullamcorper, mi id aliquam convallis, magna leo adipiscing est, sed viverra est turpis id quam. Nulla at lorem arcu, vitae imperdiet ante. Curabitur scelerisque risus ac velit fringilla porttitor. Maecenas laoreet tristique leo, vel dapibus nisl blandit ut. Nam pretium libero id lacus vestibulum nec viverra mauris imperdiet. Mauris in risus erat, id fringilla leo. Sed odio est, interdum sed dictum quis, auctor vel magna. Vivamus eget volutpat mi. Donec bibendum, neque nec pharetra egestas, sem ligula egestas est, elementum mollis lorem ligula eu est. Sed nec dolor ac nulla tempus lobortis. Fusce purus lectus, commodo eu placerat sit amet, elementum quis ipsum. Aliquam id imperdiet dui. In a aliquet tortor. Nunc aliquam volutpat justo ut consequat. Cras lobortis ante eu urna tincidunt sit amet pellentesque eros suscipit. Quisque nunc dolor, scelerisque eu mattis non, porta vitae nisl. Nunc tempor auctor elit non ornare. Curabitur mattis tellus et odio vehicula scelerisque. Vestibulum adipiscing leo id odio placerat blandit non vitae ante. Vivamus eu fringilla massa. Etiam sed lectus ipsum. Cras arcu risus, bibendum a adipiscing vitae, vulputate et dui. Suspendisse lobortis, lectus at porttitor tristique, metus metus pellentesque risus, quis luctus dolor elit a massa. Nulla vulputate malesuada orci, nec luctus purus placerat quis. Sed adipiscing, eros eu viverra ultricies, orci eros imperdiet risus, eget ultricies ligula diam ac tortor. Fusce sed massa quam. Morbi euismod sagittis leo, vel eleifend lectus auctor a. Proin a nisl arcu, id faucibus turpis. Suspendisse potenti. Duis aliquet, lorem non lacinia pulvinar, mi libero ullamcorper elit, sit amet ultricies sem mi et nisl. Donec mollis, massa ac adipiscing auctor, sem ligula accumsan mi, et blandit magna leo eu ipsum. Donec mattis mattis bibendum. Nulla non dolor elit. Donec hendrerit fringilla dui vitae consectetur. In hac habitasse platea dictumst. Nullam tempor dapibus rhoncus.');
//        }

        return {};
    }
);