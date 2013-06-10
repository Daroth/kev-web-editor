define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps'
    ],
    function (Pooffs, UIInstanceProps) {
        Pooffs.extends(UIChannelProps, UIInstanceProps);

        function UIChannelProps(ui, ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ui, ctrl);
        }

        return UIChannelProps;
    }
);