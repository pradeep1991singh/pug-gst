/**
 * app configuration
 * express server configuration
 */

var express = require('express');
var app = express();

// body configuration for handling middleware
var bodyParser = require('body-parser');

// app port, app will be running on 8080
var port = 8080;

// bodyParser configuration
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set('views', __dirname + '/views');

// set view engine
app.set('view engine', 'pug');

// GET static assets
app.use(express.static(__dirname + '/public'));

// app routing
app.get('/', function(req, res) {
  res.render('index', { title: 'Home page', nav: 'home' });
});

app.get('/table', function(req, res) {
  res.render('table', { title: 'Table page', nav: 'table' });
});

// app listen and running
app.listen(port, function() {
  console.log('App running at - http://localhost:' + port);
});
