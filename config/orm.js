
var connection = require("./connection.js");


var orm = {
    selectAll: function(table, callBack) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    },
    updateOne: function(table, colVal, callBack) {
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [table, colVal], function(error, result) {
            if (error) throw error;
            console.log(result);
            callBack(result);
        });
    },
    insertOne: function(table, inCol2, inCol3, callBack) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES ("
        connection.query(queryString, [table, inCol2, inCol3], function(error, result) {
            // tbd
            callBack(result);
        })
    }
};


// to burger.js
module.exports = orm;

