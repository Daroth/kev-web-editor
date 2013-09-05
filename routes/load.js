/**
 * Loads core libraries by reading the XML retrieved from sonatype for the groupID org.kevoree.corelibrary.XXX
 *
 * Created with IntelliJ IDEA.
 * User: leiko
 * Date: 8/21/13
 * Time: 10:02 AM
 */
var PLATFORMS = ['javase', 'android', 'sky'];

var http = require('http');
var parseString = require('xml2js').parseString;

exports.load = function (req, res) {
    if (req.xhr) {
        var platform = req.query.platform;
        if (platform) {
            if (PLATFORMS.indexOf(platform) != -1) {
                var options = {
                    host: 'oss.sonatype.org',
                    path: '/service/local/data_index?g=org.kevoree.corelibrary.'+platform
                }
                var request = http.request(options, function (result) {
                    var data = '';
                    result.on('data', function (chunk) {
                        data += chunk;
                    });
                    result.on('end', function () {
                        // XML data fully retrieved from remote server => parsing and sending result
                        parseString(data, function (err, xml) {
                            var artifacts = xml['search-results']['data'][0]['artifact'];
                            var libraries = [];
                            for (var i=0; i < artifacts.length; i++) {
                                var rawArt = artifacts[i]['artifactId'][0].split('.');

                                var grpId   = artifacts[i]['groupId'][0],
                                    artId   = artifacts[i]['artifactId'][0],
                                    name    = rawArt[rawArt.length-1],
                                    version = artifacts[i]['version'][0];

                                if (artifacts[i]['classifier'] == undefined) { // XXX Warning, this could be really bad
                                    libraries.push({
                                        groupID:        grpId,
                                        artifactID:     artId,
                                        simpleName:     name,
                                        version:        version
                                    });
                                }
                            }
                            res.json({
                                result: 1,
                                message: 'Ok',
                                libraries: libraries
                            });
                        });
                    });
                });
                request.on('error', function (e) {
                    console.log('Unable to reach '+options.host+': ' + e.message);
                    res.json({
                        result: -1,
                        message: 'Unable to reach '+options.host
                    });
                });
                request.end();

            } else {
                res.json({
                    result: -1,
                    message: 'Unknown requested platform "'+platform+'"'
                });
            }

        } else {
            res.json({
                result: -1,
                message: 'No library platform found. You must give a platform parameter in the request'
            });
        }

    } else {
        res.json({
            result: -1,
            message: 'Request must be an XHR'
        });
    }
};