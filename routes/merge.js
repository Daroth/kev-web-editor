/*
 * GET json model
 */

exports.merge = function(req, res) {
    if (req.xhr) {
        switch (req.params.env) {
            case 'all':
                res.sendfile('public/dummy/modelAll.json');
                break;

            case 'android':
                res.sendfile('public/dummy/modelAndroid.json');
                break;

            case 'javase':
                res.sendfile('public/dummy/modelJavaSE.json');
                break;

            case 'daum':
                res.sendfile('public/dummy/modelDaum.json');
                break;

            case 'sky':
                res.sendfile('public/dummy/modelSky.json');
                break;

            case 'arduino':
                res.sendfile('public/dummy/modelArduino.json');
                break;

            case 'webserver':
                res.sendfile('public/dummy/modelWebServer.json');
                break;

            default:
                res.send('I do not know core libraries for '+req.params.env);
                break;
        }

    } else {
        res.render('index', { title: 'KevWebEditor' });
    }
};