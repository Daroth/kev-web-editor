define(
    [
        'util/Pooffs',
        'presentation/property/UIInstanceProps'
    ],
    function (Pooffs, UIInstanceProps) {
        Pooffs.extends(UIChannelProps, UIInstanceProps);

        function UIChannelProps(ctrl) {
            UIInstanceProps.prototype.constructor.call(this, ctrl);
        }

        return UIChannelProps;
    }
);