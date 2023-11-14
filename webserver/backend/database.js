var mysql = require("mysql2");
var creds = require("./credentials.js")

// establish a connection
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'USERS',
    user: 'root',
    password: 'Rockbottom@95'
})

module.exports = connection;