
exports.index = function(req, res) {
    res.render('editor', { title: 'Kevoree Web Editor' });
};

exports.merge   = require('./merge').merge;
exports.save    = require('./save').save;
exports.saved   = require('./save').saved;
exports.runtime = require('./runtime').runtime;
exports.bench   = require('./bench').bench;
exports.push    = require('./push').push;
exports.pull    = require('./pull').pull;