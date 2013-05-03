define(

    function () {
        // every parameter from the current page URL is set as fields
        // of QueryString
        // So you can use it like:
        // var qs = new QueryString();
        // if (qs.params1 && qs.param1 == 'foo') { console.log("param1's value is foo"); }
        function QueryString() {
            var query_string = {};
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                // If first entry with this name
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = pair[1];
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [ query_string[pair[0]], pair[1] ];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(pair[1]);
                }
            }
            return query_string;
        }

        return QueryString;
    }
);