
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('M7q,$wfz|UyloWSQy[2mTl0<X4iU}++x}]nW6ef)>lO7os,:wKZ0g>?f0YG)U0FQ'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.configure('development', function(){
    app.use(express.errorHandler());
    app.locals.pretty = true;
});

app.get('/', routes.index);
app.get('/merge/:env', routes.merge);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});