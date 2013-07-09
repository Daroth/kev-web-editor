
/**
 * Module dependencies.
 */

var express = require('express'),
    routes  = require('./routes'),
    http    = require('http'),
    path    = require('path'),
    fs      = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('M7q,$wfz|UyloWSQy[2mTl0<X4iU}++x}]nW6ef)>lO7os,:wKZ0g>?f0YG)U0FQ'));
app.use(express.session());
app.use(app.router);

// development only
app.configure('development', function(){
    app.use(express.errorHandler());
    app.locals.pretty = true;
});

// clear public/saved/model*.json if any on startup
fs.readdir('public/saved/', function(err, files) {
    if (err) {
        fs.mkdirSync('public/saved');
        console.log(err.message, ': Creating folder for saved models...');
    } else {
        files.forEach(function (file) {
            fs.unlink('public/saved/'+file);
        });
    }
});

app.get('/', routes.index);
app.get('/merge/:env', routes.merge);
app.post('/push', routes.push);
app.post('/pull', routes.pull);
app.post('/save', routes.save);
app.get('/saved/:model', routes.saved);
app.get('/runtime', routes.runtime);
app.get('/bench', routes.bench);

app.use(function(req, res) {
    // if you end-up here, it means that I do not know the given url
    // so for now => redirect to '/' but you can put a custom 404 if you want
    res.redirect('/');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});