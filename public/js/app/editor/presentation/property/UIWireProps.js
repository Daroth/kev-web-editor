define(
    function () {

        function UIWireProps(ui , ctrl) {
            this._ui = ui;
            this._ctrl = ctrl;
            var name = this._name = $('#prop-popup-name');

            $('#prop-popup-delete').off('click'); // get rid of old listeners on '#delete'
            $('#prop-popup-delete').on('click', function() {
                ctrl.p2cRemoveEntity();
            });

            $('#prop-popup-save').off('click');
            $('#prop-popup-save').on('click', function () {
                ctrl.p2cSaveProperties(name.val())
            });
        }

        UIWireProps.prototype.show = function () {
            $('#prop-popup-subtitle').html('Wire');
            this._name.val(this._ctrl.getName());
            $('#prop-popup').modal({ show: true });
        }

        return UIWireProps;
    }
);