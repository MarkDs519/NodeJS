var express = require("express");

var app = express();

var connection = require('./database');

app.get('/', function(req, res){
    res.send('Hey There!');
})

app.listen(3306, function(){
    console.log('App is listening');
    connection.connect(function(){
        if(err) throw err;
        console.log('Database connection successful.')
    })
})