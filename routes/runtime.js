/**
 * GET runtime
 * @param req HTTP request
 * @param res HTTP response
 */
exports.runtime = function (req, res) {

    res.render('runtime', {
        title: 'Kevoree Web Editor - Runtime',
        grp: req.query.grp
    });
};

