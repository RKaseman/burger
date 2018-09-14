
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(response) {
            callBack(response);
        });
    }
};


module.exports = burger;

