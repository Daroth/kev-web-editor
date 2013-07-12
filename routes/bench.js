/**
 * GET bench
 * @param req HTTP request
 * @param res HTTP response
 */
var config = require('../config');

exports.bench = function (req, res) {
    var env = '/build';
    if (config.environment == 'dev') env = '';
    res.render('bench', {
        title: 'Kevoree Web Editor - Benchmark Load/Save',
        env: env
    });
};

