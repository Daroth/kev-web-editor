/*
 * GET json model
 */

var java = require('java');
java.classpath.push("jars/org.kevoree.tools.modelsync-2.0.0-SNAPSHOT.jar");

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

            // all librairies have been merge into fullModel
            // sending this model back to client
            res.json({
                result: 1,
                message: 'Model loaded successfully',
                model: JSON.parse(serializer.serializeSync(fullModel))
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

//var artID   = req.query.artifactID,
//    grpID   = req.query.groupID,
//    version = req.query.version;
//
//if (artID && grpID && version) {
//    var resolver    = java.newInstanceSync('org.kevoree.resolver.MavenResolver'),
//        list        = java.newInstanceSync('java.util.ArrayList');
//
//    list.addSync("http://oss.sonatype.org/content/groups/public");
//
//    var file        = resolver.resolveSync(grpID, artID, version, 'jar', list);
//    if (file == null) {
//        console.log("Jar file is null :/");
//        res.json({
//            result: -1,
//            message: 'JarFile is null'
//        });
//
//    } else {
//        var jar         = java.newInstanceSync('java.util.jar.JarFile', file),
//            jarEntry    = jar.getJarEntrySync("KEV-INF/lib.kev"),
//            xmiLoader   = java.newInstanceSync('org.kevoree.loader.XMIModelLoader');
//
//        if (jarEntry != null) {
//            var model       = xmiLoader.loadModelFromStreamSync(jar.getInputStreamSync(jarEntry)).getSync(0),
//                serializer  = java.newInstanceSync('org.kevoree.serializer.JSONModelSerializer'),
//                baos        = java.newInstanceSync('java.io.ByteArrayOutputStream');
//
//            serializer.serializeSync(model, baos);
//
//            res.json({
//                result: 1,
//                message: 'Model loaded successfully',
//                model: JSON.parse(baos.toStringSync())
//            });
//
//        } else {
//            console.log("JarEntry KEV-INF/lib.kev doesn't exist :/");
//            res.json({
//                result: -1,
//                message: "JarEntry KEV-INF/lib.kev doesn't exist :/"
//            });
//        }
//    }
//
//} else {
//    res.json({
//        result: -1,
//        message: 'You are supposed to give artifactID, groupID and version as parameters.'
//    });
//}
