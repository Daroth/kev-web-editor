define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps'
    ],
    function (Pooffs, UIInstanceProps) {
        Pooffs.extends(UIGroupProps, UIInstanceProps);

        function UIGroupProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
        }

        return UIGroupProps;
    }
);