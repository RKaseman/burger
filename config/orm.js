
var connection = require("./connection.js");


var orm = {
    selectAll: function(whichTable, callBack) {
        var queryString = "SELECT * FROM " + whichTable + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    },
    updateOne: function(whichTable, colVal, callBack) {
        var queryString = "UPDATE " + whichTable + " SET devoured = true WHERE id=" + colVal + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            console.log(result);
            callBack(result);
        });
    }
};


module.exports = orm;

