/*
 * GET json model
 */

var fs = require('fs');
var timeouts = [];

exports.saved = function(req, res) {
    var filename = 'public/saved/'+req.params.model;

    fs.stat(filename, function(err, stats) {
        if(!err && stats.isFile()) {
            // send file back
            res.sendfile(filename);

            // delete file after 5 minutes
            if (!timeouts[filename]) {
                timeouts[filename] = [];
            }
            var timeoutID = setTimeout(function () {
                try {
                    fs.unlink(filename);
                    // in case the file was asked many times, clear other timeouts
                    timeouts[filename].forEach(function (id) {
                        clearTimeout(id);
                    });
                } catch (err) {
                    console.warn("err "+err.message);
                }
            }, 1000*60*5);
            timeouts[filename].push(timeoutID);

        } else {
            // file does not exist anymore
            res.redirect('/');
        }
    });
};