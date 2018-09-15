
var connection = require("./connection.js");


var orm = {
    selectAll: function(table, callBack) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    },
    updateOne: function(table, colVal, callBack) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE id=" + colVal + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            console.log(result);
            callBack(result);
        });
    },
    insertOne: function(table, inCol2, inCol3, callBack) {
        var queryString = "INSERT INTO " + table + " (" + inCol2 + ", " + inCol3 + ") VALUES ("
    }
};


// to burger.js
module.exports = orm;

