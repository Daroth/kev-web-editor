/*
 * POST pull model
 */

var java = require('java');
var config = require('../config');
var pullModel = require('kevoree-model-sync').pullModel;
var kevoree = require('kevoree-library').org.kevoree;
java.classpath.push(config.KEV_JAR);
// node-java module uses the 'Sync' syntax for methods executed directly, otherwise
// you need to use callbacks to handle results (this has nothing to do with ModelSync sync keyword)
var modelSync  = java.newInstanceSync('org.kevoree.tools.modelsync.ModelSyncBean'),
  loader       = java.newInstanceSync('org.kevoree.loader.JSONModelLoader'),
  jsLoader     = new kevoree.loader.JSONModelLoader(),
  serializer   = java.newInstanceSync('org.kevoree.serializer.JSONModelSerializer'),
  jsSerializer = new kevoree.serializer.JSONModelSerializer();

exports.pull = function(req, res) {
  if (req.xhr) {
    if (req.body.destNodeName && req.body.grpName && req.body.model) {
      var data    = JSON.stringify(req.body.model, null, 4),
          model   = loader.loadModelFromStringSync(data).getSync(0),
          jsModel = jsLoader.loadModelFromString(data).get(0);

      var kGrp = jsModel.findGroupsByID(req.body.grpName);
      if (kGrp.typeDefinition.deployUnits.get(0).targetNodeType.name == 'JavascriptNode') {
        // Javascript platform pull
        pullModel(jsModel, req.body.destNodeName, function (err, model) {
          if (err) return res.json({result: -1, message: 'Unable to pull model from '+req.body.destNodeName});

          return res.json({
            result: 1,
            message: 'Model pulled successfully',
            model: JSON.parse(jsSerializer.serialize(model))
          });
        });

      } else {
        // Java platform pull
        modelSync.clearSync();
        modelSync.pullTo(model, req.body.destNodeName, req.body.grpName, function (err, model) {
          if (err) {
            console.error(err);
            res.json({result: -1, message: 'Server-side java exception'});
            return;
          }

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
                message: 'Model pulled successfully',
                model: JSON.parse(baos.toStringSync())
              });
              return;
            });
          });
        });
      }
    } else {
      res.json({result: -1, message: 'Missing parameters in request'});
      return;
    }
  } else {
    res.json({result: -1, message: 'Not an Ajax call'});
  }
};