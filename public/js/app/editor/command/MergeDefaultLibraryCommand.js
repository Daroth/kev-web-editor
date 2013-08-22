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
            if ($('.corelib-item:checked').size() > 0) {
                $('#load-corelib').hide();
                $('#loading-corelib').show();
            } else {
                $('#load-corelib').effect('highlight', {color: '#f00'}, 500);
                $('#load-corelib-popup-error-content').html("You must select at least 1 library in order to load it.");
                $('#load-corelib-popup-error').show();
            }

            // hide alert when popup is closed
            $('body').off(NAMESPACE)
            $('body').on('hidden'+NAMESPACE, '#load-corelib-popup', function () {
                $('#loading-corelib').hide();
                $('#load-corelib').show();
            });

            // retrieve selected libraries from DOM (checked inputs)
            $('.corelib-item').each(function () {
                if ($(this).prop('checked')) {
                    var library = editor.getLibraries($(this).attr('data-library-platform'))[$(this).attr('data-library-id')];
                    $.ajax({
                        url: '/merge',
                        data: library,
                        timeout: 10000,
                        dataType: 'json',
                        success: function (data) {
                            var loader = new Kevoree.org.kevoree.loader.JSONModelLoader(),
                                receivedModel = loader.loadModelFromString(JSON.stringify(data.model)).get(0),
                                currentModel = editor.getModel();

                            if (currentModel != null) {
                                // merge needed
                                var compare = new Kevoree.org.kevoree.compare.DefaultModelCompare(),
                                    diffSeq = compare.merge(receivedModel, currentModel);
                                diffSeq.applyOn(receivedModel);
                            }

                            $('#loading-corelib').hide();
                            $('#load-corelib').show();
                            editor.setModel(receivedModel);
                        },
                        error: function (err) {
                            console.log("ERROR", err);
                            $('#loading-corelib').hide();
                            $('#load-corelib').show();
                        }
                    });
                }
            });
        }

        return MergeDefaultLibraryCommand;
    }
);