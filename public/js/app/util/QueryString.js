define(
    function () {

        function QueryString() {
            this._qs = {};
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                // If first entry with this name
                if (typeof this._qs[pair[0]] === "undefined") {
                    this._qs[pair[0]] = pair[1];
                    // If second entry with this name
                } else if (typeof this._qs[pair[0]] === "string") {
                    var arr = [ this._qs[pair[0]], pair[1] ];
                    this._qs[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    this._qs[pair[0]].push(pair[1]);
                }
            }
        }

        /**
         * Process params in document.URL and call the functions associated if
         * any param match the given "actions" parameter field.
         * For instance:
         *   var qs = new QueryString();
         *   qs.process({
         *       param1: function(value) {
         *          // do something with param1's value
         *       },
         *       param2: function(foo) {
         *          // do something with param2's value
         *       }
         *   });
         *
         * This example will call param1 & param2 functions when process is called
         * when the URL looks like this: http://example.com/?param1=bar&param2=42
         * @param actions
         */
        QueryString.prototype.process = function (actions) {
            for (var param in actions) {
                if (this._qs[param]) {
                    if (typeof actions[param] === "function") {
                        actions[param].call(this._qs, this._qs[param]);
                    } else {
                        console.error("QueryString Error: '"+param+"' field if not a function. Skipped!");
                    }
                }
            }
        }

        return QueryString;
    }
);