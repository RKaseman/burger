
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
connection.connect(function (error) {
    if (error) throw error;
    console.log("\n-|    Connected    |-\n");
});


module.exports = connection;