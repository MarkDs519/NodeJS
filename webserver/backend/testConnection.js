var express = require("express");
var cors = require('cors');
var app = express();
var db = require('./database');

const databaseHandler = () => {
    const dataHandler = {
        insertData: (req) => {
            // get data from forms and add to the table called user..
            let firstname = req.firstname;
            let lastname = req.lastname;
            let email = req.email;
            let username = req.username;
            let password = req.password;

        
             const sql = `INSERT INTO USERS((firstname, lastname, email, username, password)
               VALUES ('${firstname}','${lastname}','${email}','${username}','${password}')`;
                 db.query(sql, (err)=> {
                 if(err) throw err;
              })
        }
    }
    // listener
    app.listen(8000, function(){
        console.log('App is listening to 8000');
        db.connect(function(err){
            if(err) throw err;
            console.log('Database connection successful.')
       })
    })
    return dataHandler;
}

module.exports = databaseHandler;
