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
                showError("You must select at least 1 library in order to load it.");
            }

            // hide alert when popup is closed
            $('body').off(NAMESPACE)
            $('body').on('hidden'+NAMESPACE, '#load-corelib-popup', function () {
                $('#loading-corelib').hide();
                $('#load-corelib').show();
            });

            // retrieve selected libraries from DOM (checked inputs)
            var corelibToLoad = (function() {
                var count = 0;
                // count core libs in order to check full loading process
                $('.corelib-item').each(function () {
                    if ($(this).prop('checked')) count++;
                });
                return count;
            })();
            $('.corelib-item').each(function () {
                var corelib = $(this);
                if (corelib.prop('checked')) {
                    var library = editor.getLibraries(corelib.attr('data-library-platform'))[corelib.attr('data-library-id')];
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

                            coreLibLoaded();
                            editor.setModel(receivedModel);
                        },
                        error: function () {
                            showError('Something went wrong while loading '+library.simpleName+'-'+library.version);
                            coreLibLoaded();
                        }
                    });
                }
            });

            function coreLibLoaded() {
                corelibToLoad--;
                if (corelibToLoad == 0) {
                    $('#loading-corelib').hide();
                    $('#load-corelib').show();
                }
            }

            function showError(message) {
                corelibToLoad--;
                if (corelibToLoad == 0) $('#load-corelib').effect('highlight', {color: '#f00'}, 500);
                $('#load-corelib-popup-error-content').html(message);
                $('#load-corelib-popup-error').show();
            }
        }

        return MergeDefaultLibraryCommand;
    }
);