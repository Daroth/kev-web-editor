define(
    [
        'jquery',
        'util/ModelHelper',
        'util/AlertPopupHelper',
        'kevoree'
    ],

    function ($, ModelHelper, AlertPopupHelper, Kevoree) {
        var NAMESPACE = ".merge-default-library-command";

        function MergeDefaultLibraryCommand() {}

        MergeDefaultLibraryCommand.prototype.execute = function (editor) {
            // hide alert when popup is closed
            $('body').off(NAMESPACE)
            $('body').on('hidden'+NAMESPACE, '#load-corelib-popup', function () {
                $('#loading-corelib').hide();
                $('#load-corelib').show();
            });

            if ($('.corelib-item:checked').size() > 0) {
                $('#load-corelib').hide();
                $('#loading-corelib').show();

                // retrieve selected libraries from DOM (checked inputs)
                var libraries = [];

                $('.corelib-item:checked').each(function () {
                    var corelib = $(this),
                        library = editor.getLibraries(corelib.attr('data-library-platform'))[corelib.attr('data-library-id')];

                    libraries.push({
                        artifactID: library.artifactID,
                        groupID: library.groupID,
                        version: library.version
                    });
                });

                $.ajax({
                    url: '/merge',
                    data: { libz: libraries },
                    dataType: 'json',
                    success: function (data) {
                        try {
                            switch (data.result) {
                                case 1:
                                    var loader = new Kevoree.org.kevoree.loader.JSONModelLoader(),
                                        receivedModel = loader.loadModelFromString(JSON.stringify(data.model)).get(0);

                                    editor.mergeModel(receivedModel);
                                    $('#loading-corelib').hide();
                                    $('#load-corelib').show();
                                    break;

                                default:
                                    console.error(data);
                            }
                        } catch (err) {
                            console.error('something went wrong while merging received model', data);
                            $('#loading-corelib').hide();
                            $('#load-corelib').show();
                        }
                    },
                    error: function (err) {
                        console.error(err);
                    }
                });
            }
        }

        return MergeDefaultLibraryCommand;
    }
);
