/*
 * GET json model
 */

var java = require('java');
var config = require('../config');
java.classpath.push(config.KEV_JAR);

exports.merge = function(req, res) {
    if (req.xhr) {
        var libz = req.query.libz;
        if (libz) {
            var resolver    = java.newInstanceSync('org.kevoree.resolver.MavenResolver'),
                xmiLoader   = java.newInstanceSync('org.kevoree.loader.XMIModelLoader'),
                list        = java.newInstanceSync('java.util.ArrayList'),
                serializer  = java.newInstanceSync('org.kevoree.serializer.JSONModelSerializer'),
                compare     = java.newInstanceSync('org.kevoree.compare.DefaultModelCompare'),
                factory     = java.newInstanceSync('org.kevoree.impl.DefaultKevoreeFactory'),
                fullModel   = factory.createContainerRootSync();

            list.addSync("http://oss.sonatype.org/content/groups/public");

            for (var i in libz) {
                var artID   = libz[i].artifactID,
                    grpID   = libz[i].groupID,
                    version = libz[i].version;

                if (artID && grpID && version) {
                    var file        = resolver.resolveSync(grpID, artID, version, 'jar', list);
                    if (file == null) {
                        console.error("Jar file for "+artID+" is null :/");

                    } else {
                        var jar         = java.newInstanceSync('java.util.jar.JarFile', file),
                            jarEntry    = jar.getJarEntrySync("KEV-INF/lib.kev");

                        if (jarEntry != null) {
                            var model       = xmiLoader.loadModelFromStreamSync(jar.getInputStreamSync(jarEntry)).getSync(0),
                                mergeSeq    = compare.mergeSync(fullModel, model);

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

            // all libraries have been merge into fullModel
            // sending this model back to client
            var jsonStrModel = serializer.serializeSync(fullModel);
            res.json({
                result: 1,
                message: 'Model loaded successfully',
                model: JSON.parse(jsonStrModel)
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