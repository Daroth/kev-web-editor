/*
 * POST json model
 */
var java = require('java');
var config = require('../config');
java.classpath.push(config.KEV_JAR);
var loader      = java.newInstanceSync('org.kevoree.loader.JSONModelLoader'),
    serializer  = java.newInstanceSync('org.kevoree.serializer.XMIModelSerializer');

var fs = require('fs');
var timeouts = [];

exports.save = function(req, res) {
    if (req.xhr) {
        if (req.body.model) {
            var fileID    = 'model'+Math.floor((Math.random()*42424242)+1),
                data        = JSON.stringify(req.body.model, null, 4),
                type        = 'json';

            if (req.params.type == 'xmi') {
                type = 'xmi';
                var model = loader.loadModelFromStringSync(data).getSync(0);
                data = serializer.serializeSync(model);
            }

            // write file to server
            var fullpath = 'public/saved/'+fileID+'.'+type;
            fs.writeFile(
                fullpath, data, function(err) {
                    if (err) {
                        console.warn(err);
                        res.json({
                            state: 0,
                            message: err.message
                        });

                    } else {
                        console.log(type.toUpperCase()+" saved to " + fullpath);
                        res.json({
                            state: 1,
                            message: 'Your model has been successfully uploaded to the server.',
                            href: 'saved/'+type+'/'+fileID
                        });

                        // delete this file in 30 minutes if it hasn't been accessed
                        if (!timeouts[fullpath]) { timeouts[fullpath] = []; }
                        var timeoutID = setTimeout(function () {
                            try {
                                fs.unlink(fullpath);
                                // in case the file was asked many times, clear other timeouts
                                timeouts[fullpath].forEach(function (id) {
                                    clearTimeout(id);
                                });
                                // clear this file timeouts
                                delete timeouts[fileID];
                            } catch (err) {
                                console.warn("err "+err.message);
                            }
                        }, 1000*60*30);
                        timeouts[fullpath].push(timeoutID);
                    }
                }
            );
        }

    } else {
        // if this is not an Ajax request, then redirect to index
        res.redirect('/');
    }
};

/*
 * GET json model
 */

exports.saved = function(req, res) {
    var filename = 'public/saved/'+req.params.id+'.'+req.params.type;

    fs.stat(filename, function(err, stats) {
        if(!err && stats.isFile()) {
            // send file back
            res.download(filename);

            // delete this file after 5 minutes
            if (!timeouts[filename]) { timeouts[filename] = []; }
            var timeoutID = setTimeout(function () {
                try {
                    fs.unlink(filename);
                    // in case the file was asked many times, clear other timeouts
                    timeouts[filename].forEach(function (id) {
                        clearTimeout(id);
                    });
                    // clear this file timeouts
                    delete timeouts[filename];
                } catch (err) {
                    console.warn("err "+err.message);
                }
            }, 1000*60*5);
            timeouts[filename].push(timeoutID);

        } else {
            // file does not exist anymore
            res.json({
                state: -1,
                message: 'File "'+req.params.id+'.'+req.params.type+'" unknown.'
            });
        }
    });
};