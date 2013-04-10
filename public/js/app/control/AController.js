define(
    function() {
        function AController() {/* putting code here is evil, can't touch this */}

        AController.prototype.getUI = function() {
            return this._ui;
        }

        return AController;
    }
);