
var connection = require("./connection.js");


var orm = {
    select: function(selCol, selTable, callBack) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [selCol, selTable], function(error, result) {
            if (error) throw error;
            console.log(result);
            callBack(result);
        });
    },
    selectWhere: function (selTable, selCol, selColVal, callBack) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [selTable, selCol, selColVal], function (error, result) {
            if (error) throw error;
            console.log(result);
            callBack(result);
        });
    }
};


module.exports = orm;

