/**
 * Loads core libraries by reading the XML retrieved from sonatype for the groupID org.kevoree.corelibrary.XXX
 *
 * Created with IntelliJ IDEA.
 * User: leiko
 * Date: 8/21/13
 * Time: 10:02 AM
 */
var PLATFORMS = ['javase', 'android', 'sky', 'javascript'];

var http = require('http');
var npm = require('npm');
var async = require('async');
var parseString = require('xml2js').parseString;
var libraries = {};

exports.load = function (req, res) {
  if (req.xhr) {
    var platform = req.query.platform;
    if (platform) {
      if (PLATFORMS.indexOf(platform) != -1) {
        if (libraries[platform] != undefined && libraries[platform].length > 0) {
          // libraries have already been downloaded from their registry
          console.log('Sending cached libraries for '+platform);
          res.json({
            result: 1,
            message: 'Ok',
            libraries: libraries[platform]
          });
        } else {
          if (platform == 'javascript') {
            // load javascript libraries from NPM registry
            npm.load({}, function (err) {
              if (err) return res.json({result: -1, message: 'Unable to load npm server-side.'});

              npm.commands.search('/kevoree-comp-|kevoree-chan-|kevoree-group-|kevoree-node-/', true, function (err, modules) {
                if (err) return res.json({result: -1, message: 'Something went wrong while using npm.search()'});

                libraries[platform] = []; // resetting libraries cache for this platform
                var asyncTasks = [];
                for (var moduleName in modules) {
                  (function (packageName) {
                    asyncTasks.push(function (iteratorCb) {
                      npm.commands.view([packageName], true, function (err, views) {
                        if (err) return iteratorCb(new Error('Something went wrong while using npm.view('+packageName+')'));

                        for (var version in views) {
                          libraries[platform].push({
                            groupID:    '',
                            artifactID: views[version].name,
                            simpleName: views[version].name,
                            version:    views[version]['dist-tags'].latest
                          });
                        }
                        iteratorCb();
                      });
                    });
                  })(moduleName);
                }

                async.parallel(asyncTasks, function (err) {
                  if (err) return res.json({result: -1, message: err.message});

                  res.json({
                    result: 1,
                    message: 'Ok',
                    libraries: libraries[platform]
                  });
                });
              });
            });

          } else {
            // load java, android and sky libraries from SONATYPE registry
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
                libraries[platform] = []; // resetting library cache for this platform
                parseString(data, function (err, xml) {
                  var artifacts = xml['search-results']['data'][0]['artifact'];
                  for (var i=0; i < artifacts.length; i++) {
                    var rawArt = artifacts[i]['artifactId'][0].split('.');

                    var grpId   = artifacts[i]['groupId'][0],
                        artId   = artifacts[i]['artifactId'][0],
                        name    = rawArt[rawArt.length-1],
                        version = artifacts[i]['version'][0];

                    if (artifacts[i]['classifier'] == undefined) { // XXX Warning, this could be really bad
                      libraries[platform].push({
                        groupID:    grpId,
                        artifactID: artId,
                        simpleName: name,
                        version:    version
                      });
                    }
                  }
                  res.json({
                    result: 1,
                    message: 'Ok',
                    libraries: libraries[platform]
                  });
                });
              });
            });
            request.on('error', function (e) {
              // unable to reach oss.sonatype.org maven repository
              console.log('Unable to reach '+options.host+': ' + e.message);
              // display error
              res.json({
                result: -1,
                message: 'Unable to reach '+options.host
              });
            });
            request.end();
          }
        }

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

// repetitive task to clear libraries cache every X ms
(function () {
  setInterval(function () {
    console.log("Automatically cleared core libraries cache.");
    libraries = {}; // clear cache !!! CARE THIS CAN BE DANGEROUS
  }, 1000*60*15); // do this every 15 minutes
})();