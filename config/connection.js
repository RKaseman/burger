
// mySQL connection data
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    // database: "burgers_db"
    database: "cat_db"
});


connection.connect(function(error) {
    if (error) {
        console.log("Connection error" + error.stack);
        return;
    }
    console.log("Connection id " + connection.threadId);
});

// to orm.js
module.exports = connection;

