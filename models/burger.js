
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burger_name", function(response) {
            console.log("response" + response);
            callBack(response);
        });
    }
}


module.exports = burger;

