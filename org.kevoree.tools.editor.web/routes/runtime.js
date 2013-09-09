/**
 * GET runtime
 * @param req HTTP request
 * @param res HTTP response
 */
var config = require('../config');

exports.runtime = function (req, res) {
    var env = '/build';
    if (config.environment == config.ENV_DEV) env = '';

    res.render('runtime', {
        title: 'Kevoree Web Editor - Runtime',
        port: req.query.port,
        env: env
    });
};

