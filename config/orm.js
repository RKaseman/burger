
var connection = require("./connection.js");


var orm = {
    all: function(table, callBack) {
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    },
    create: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES (??)";
        connection.query(queryString, [vals], function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    // },
    // updateOne: function(table, idCol, callBack) {
    //     var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
    //     connection.query(queryString, [table, idCol], function(error, result) {
    //         if (error) throw error;
    //         console.log(result);
    //         callBack(result);
    //     });
    }
};


// to burger.js
module.exports = orm;

