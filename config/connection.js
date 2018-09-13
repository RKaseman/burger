
var mysql = require("mysql");


// database connection parameters
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});


// connection message or error
connection.connect(function(error) {
    if (error) {
        console.log("Connection error" + error.stack);
        return;
    }
    console.log("\n-|    Connected " + connection.threadId + "    |-\n");
});


module.exports = connection;

