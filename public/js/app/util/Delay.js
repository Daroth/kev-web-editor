define(
    function () {

        /**
         * Delay(callback, delay)
         * Executes callback in delay ms
         * If called multiple times, old callback will be cleared
         * and timeout reset so the execution will happen in delay ms
         * from the new call
         */
        var Delay = (function() {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        })();

        return Delay;
    }
);