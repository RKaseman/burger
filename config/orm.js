
var connection = require("./connection.js");


var orm = {
    selectAll: function(selTable, callBack) {
        var queryString = "SELECT * FROM " + selTable + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
//             console.log("result" + result);
            callBack(result);
        });
//     },
//     selectWhere: function (selTable, selCol, selColVal, callBack) {
//         var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//         connection.query(queryString, [selTable, selCol, selColVal], function (error, result) {
//             if (error) throw error;
//             console.log(result);
//             callBack(result);
//         });
    }
};


// module.exports = orm;

