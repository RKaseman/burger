
var connection = require("./connection.js");


var orm = {
    selectWhere: function(burgerName, devoured, anonFunction) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table])
    }
}


module.exports = connection;

