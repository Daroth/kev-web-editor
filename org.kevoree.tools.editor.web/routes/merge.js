/*
 * GET json model
 */

var java = require('java');
var async = require('async');
var getJSONModel = require('kevoree-model-sync').getJSONModel;
var kevoree = require('kevoree-library').org.kevoree;
var config = require('../config');
java.classpath.push(config.KEV_JAR);

exports.merge = function(req, res) {
    if (req.xhr) {
        var libz = req.query.libz;
        if (libz) {
          // Java tools
          var resolver    = java.newInstanceSync('org.kevoree.resolver.MavenResolver'),
              xmiLoader   = java.newInstanceSync('org.kevoree.loader.XMIModelLoader'),
              list        = java.newInstanceSync('java.util.ArrayList'),
              serializer  = java.newInstanceSync('org.kevoree.serializer.JSONModelSerializer'),
              compare     = java.newInstanceSync('org.kevoree.compare.DefaultModelCompare'),
              factory     = java.newInstanceSync('org.kevoree.impl.DefaultKevoreeFactory'),
              fullModel   = factory.createContainerRootSync();
          list.addSync("http://oss.sonatype.org/content/groups/public");

          // Javascript tools
          var jsLoader      = new kevoree.loader.JSONModelLoader(),
            jsSerializer    = new kevoree.serializer.JSONModelSerializer(),
            jsCompare       = new kevoree.compare.DefaultModelCompare(),
            jsFactory       = new kevoree.impl.DefaultKevoreeFactory(),
            jsFullModel     = jsFactory.createContainerRoot(),
            javascriptTasks = [];

          for (var platform in libz) {
            if (platform == 'javascript') {
              for (var i in libz[platform]) {
                (function (lib) {
                  javascriptTasks.push(function (iteratorCb) {
                    var unitName = lib.artifactID,
                      version  = lib.version;

                    getJSONModel(unitName, version, function (err, model) {
                      if (err) return iteratorCb(err);

                      // merge 'model' into 'jsFullModel'
                      jsCompare.merge(jsFullModel, model).applyOn(jsFullModel);

                      iteratorCb();
                    });
                  });

                })(libz[platform][i]);
              }

            } else {
              for (var i in libz[platform]) {
                var artID   = libz[platform][i].artifactID,
                    grpID   = libz[platform][i].groupID,
                    version = libz[platform][i].version;

                if (artID && grpID && version) {
                  var file        = resolver.resolveSync(grpID, artID, version, 'jar', list);
                  if (file == null) {
                    console.error("Jar file for "+artID+" is null :/");

                  } else {open
                    var jar      = java.newInstanceSync('java.util.jar.JarFile', file),
                        jarEntry = jar.getJarEntrySync("KEV-INF/lib.kev");

                    if (jarEntry != null) {
                      var model    = xmiLoader.loadModelFromStreamSync(jar.getInputStreamSync(jarEntry)).getSync(0),
                          mergeSeq = compare.mergeSync(fullModel, model);

                      try {
                        mergeSeq.applyOnSync(fullModel);
                      } catch (err) {
                        console.error("mergeSeq.applyOn error");
                        console.error(err);
                        res.json({
                          result: -1,
                          message: "Something went wrong while merging model."
                        });
                        return;
                      }

                    } else {
                      console.error("JarEntry KEV-INF/lib.kev for "+artID+" doesn't exist :/");
                    }
                  }

                } else {
                  console.error('Malformed request. Library objects must have artifactID, groupID and version parameters');
                }
              }
            }
          }


          async.series(javascriptTasks, function (err) {
            if (err) return res.json({result: -1, message: 'Something went wrong while merging models from Javascript libraries.\nError: '+err.message});

            // all libraries have been merged into fullModel & jsFullModel
            // merging those two models into one & sending it
            var jsonStrModel = serializer.serializeSync(fullModel);
            jsCompare.merge(jsFullModel, jsLoader.loadModelFromString(jsonStrModel).get(0)).applyOn(jsFullModel);
            return res.json({
              result: 1,
              message: 'Model loaded successfully',
              model: JSON.parse(jsSerializer.serialize(jsFullModel))
            });
          });

        } else {
            res.json({
                result: -1,
                message: 'You are supposed to give an array of libraries to load'
            });
        }

    } else {
        res.json({
            result: -1,
            message: 'Request must be an XHR'
        });
    }
};