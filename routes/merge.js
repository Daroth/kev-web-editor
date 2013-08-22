/*
 * GET json model
 */

var java = require('java');
java.classpath.push("jars/org.kevoree.tools.modelsync-2.0.0-SNAPSHOT.jar");

exports.merge = function(req, res) {
    if (req.xhr) {
        var resURI  = req.query.resourceURI,
            artID   = req.query.artifactID,
            grpID   = req.query.groupID,
            version = req.query.version;

        console.log("groupID: "+grpID);
        console.log("artefID: "+artID);
        console.log("version: "+version);

        if (resURI && artID && grpID && version) {
            var resolver    = java.newInstanceSync('org.kevoree.resolver.MavenResolver'),
                list        = java.newInstanceSync('java.util.ArrayList');

            list.addSync("http://oss.sonatype.org/content/groups/public");

            var file        = resolver.resolveSync(grpID, artID, version, 'jar', list);
            if (file == null) {
                console.log("Jar file is null :/");
                res.json({
                    result: -1,
                    message: 'JarFile is null'
                });

            } else {
                var jar         = java.newInstanceSync('java.util.jar.JarFile', file),
                    jarEntry    = jar.getJarEntrySync("KEV-INF/lib.kev"),
                    xmiLoader   = java.newInstanceSync('org.kevoree.loader.XMIModelLoader'),
                    model       = xmiLoader.loadModelFromStreamSync(jar.getInputStreamSync(jarEntry)).getSync(0),
                    serializer  = java.newInstanceSync('org.kevoree.serializer.JSONModelSerializer');

                java.newInstance('java.io.ByteArrayOutputStream', function (err, baos) {
                    if (err) {
                        console.error(err);
                        res.json({result: -1, message: 'Server-side java exception'});
                        return;
                    }

                    serializer.serialize(model, baos, function (err) {
                        if (err) {
                            console.error(err);
                            res.json({result: -1, message: 'Server-side java exception'});
                            return;
                        }

                        res.json({
                            result: 1,
                            message: 'Model loaded successfully',
                            model: JSON.parse(baos.toStringSync())
                        });
                        return;
                    });
                });
            }

        } else {
            res.json({
                result: -1,
                message: 'You are supposed to give resourceURI, artifactID, groupID and version as parameters.'
            });
        }
    } else {
        res.render('index', { title: 'KevWebEditor' });
    }
};
