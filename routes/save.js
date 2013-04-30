/*
 * POST json model
 */

var fs = require('fs');

exports.save = function(req, res) {
    if (req.xhr) {
        if (req.body.model) {
            var data = JSON.stringify(req.body.model, null, 4),
                filename = '/saved/model'+Math.floor((Math.random()*42424242)+1)+'.json';

            fs.writeFile(
                'public'+ filename, data, function(err) {
                    if (err) {
                        console.warn(err);
                        res.json({
                            state: 0,
                            message: err.message
                        });

                    } else {
                        console.log("JSON saved to " + 'public' + filename);
                        res.json({
                            state: 1,
                            message: 'Your model has been uploaded to server successfully.',
                            href: filename
                        });
                    }
            });
        }

    } else {
        // if this is not an Ajax request, then redirect to index
        res.redirect('/');
    }
};