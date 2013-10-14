/*
 * POST push model
 */

var java = require('java');
var config = require('../config');
java.classpath.push(config.KEV_JAR);
// node-java module uses the 'Sync' syntax for methods executed directly, otherwise
// you need to use callbacks to handle results (this has nothing to do with ModelSync sync keyword)
var modelSync   = java.newInstanceSync('org.kevoree.tools.modelsync.ModelSyncBean'),
  loader      = java.newInstanceSync('org.kevoree.loader.JSONModelLoader');

exports.push = function(req, res) {
  if (req.xhr) {
    if (req.body.destNodeName && req.body.grpName && req.body.model) {
      var data = JSON.stringify(req.body.model, null, 4),
        model = loader.loadModelFromStringSync(data).getSync(0);

      var kGrp = model.findGroupsByIDSync(req.body.grpName);
      if (kGrp.getTypeDefinitionSync().getDeployUnitsSync().getSync(0).getTargetNodeTypeSync().getNameSync() == 'JavascriptNode') {
        console.log("PUSH on groups running on JavascriptNode are not yet handled.");
        res.json({result: -1, message: 'Push request for JavascriptNode platform is not handled yet.'});
      } else {
        modelSync.clearSync();
        modelSync.pushTo(model, req.body.destNodeName, req.body.grpName, function (err) {
          if (err) {
            console.error(err);
            res.json({result: -1, message: 'Server-side java exception'});
            return;
          }

          res.json({result: 1, message: 'Model pushed successfully'});
          return;
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