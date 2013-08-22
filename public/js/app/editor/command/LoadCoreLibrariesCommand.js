define(
    [
        'jquery',
        'templates/corelib-items'
    ],

    function ($, CorelibItemsTemplate) {
        function LoadCoreLibrariesCommand() {}

        LoadCoreLibrariesCommand.prototype.execute = function (editor) {
            // reinitializing popup content
            function loadingHTML(platform) {
                return '<p><img src="/img/ajax-loader-small.gif" alt="Loading"/> Please wait while '+platform+' libraries are loading...</p>';
            }
            $('#corelib-javase').html(loadingHTML('JavaSE'));
            $('#corelib-android').html(loadingHTML('Android'));
            $('#corelib-sky').html(loadingHTML('SKY'));

            // loading libraries
            loadLibs('javase', editor);
            loadLibs('android', editor);
            loadLibs('sky', editor);
        }

        function loadLibs(platform, editor) {
            $.ajax({
                url: '/load',
                timeout: 10000, // 10 seconds timeout
                data: {platform: platform},
                dataType: 'json',
                success: function (data) {
                    // load libraries
                    editor.addLibraries(platform, data.libraries);
                    $('#corelib-'+platform).html(
                        CorelibItemsTemplate({
                            platform: platform,
                            items: data.libraries
                        })
                    );
                },
                error: function (err) {
                    // fail
                    console.log("javase error", err);
                }
            });
        }

        return LoadCoreLibrariesCommand;
    }
);