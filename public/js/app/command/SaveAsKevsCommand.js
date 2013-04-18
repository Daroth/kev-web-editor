define(
    [
        'jquery'
    ],
    function ($) {
        function SaveAsKevsCommand () {}

        SaveAsKevsCommand.prototype.execute = function () {
            $('#alert-content').text("SaveAsKevs: not implemented yet");
            $('#alert').addClass('alert-error in');
            setTimeout(function () {
                $('#alert').removeClass('alert-error in');
            }, 5000);
        }

        return SaveAsKevsCommand;
    }
);