
exports.index = function(req, res) {
    res.render('index', { title: 'Kevoree Web Editor' });
};

exports.merge   = require('./merge').merge;
exports.save    = require('./save').save;
exports.saved   = require('./save').saved;
exports.runtime = require('./runtime').runtime;
exports.bench   = require('./bench').bench;