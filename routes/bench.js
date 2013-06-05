/**
 * GET bench
 * @param req HTTP request
 * @param res HTTP response
 */

exports.bench = function (req, res) {
    res.render('bench', {title: 'Kevoree Web Editor - Benchmark Load/Save'});
};

