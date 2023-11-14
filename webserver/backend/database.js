var mysql = require("mysql");

// establish a connection
var connection = mysql.createConnection({
    host: 'SFC-PF2YDLDR',
    database: 'users',
    user: 'root',
    password: 'root',
    port: '3306'
})

module.exports = connection;