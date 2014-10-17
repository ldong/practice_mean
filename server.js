/**
 * Created by ldong on 10/17/14.
 */

var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
//app.configure(function(){
//    app.set('views', __dirname + '/server/views');
//    app.set('view_engine', 'jade');
//});

if ('development' == app.get('env')) {
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
}

//app.get('/)
app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port: '+ port);