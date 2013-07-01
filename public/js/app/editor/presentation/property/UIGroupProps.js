define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps'
    ],
    function (Pooffs, UIInstanceProps) {
        Pooffs.extends(UIGroupProps, UIInstanceProps);

        function UIGroupProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
        }

        return UIGroupProps;
    }
);