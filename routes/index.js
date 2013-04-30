
exports.index = function(req, res) {
    res.render('index', { title: 'Kevoree Web Editor' });
};

exports.merge = require('./merge').merge;
exports.save = require('./save').save;