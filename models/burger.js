
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(response) {
            callBack(response);
        });
    },
    updateOne: function (id, callBack) {
        orm.updateOne("burgers", id, callBack);
    }
};


// to burgers_controller.js
module.exports = burger;

