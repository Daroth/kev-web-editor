
exports.index = function(req, res) {
    res.render('index', { title: 'KevWebEditor' });
};

exports.merge = require('./merge').merge;