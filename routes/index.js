var config = require('../config');

exports.index = function(req, res) {
    var env = '/build';
    if (config.environment == config.ENV_DEV) env = '';
    res.render('editor', { title: 'Kevoree Web Editor', env: env });
};

exports.merge   = require('./merge').merge;
exports.save    = require('./save').save;
exports.saved   = require('./save').saved;
exports.runtime = require('./runtime').runtime;
exports.bench   = require('./bench').bench;
exports.push    = require('./push').push;
exports.pull    = require('./pull').pull;
exports.open    = require('./open').open;