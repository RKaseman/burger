
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (callBack) {
        orm.all("burgers", function (response) {
            callBack(response);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, callBack) {
        orm.create("burgers", cols, vals, function (response) {
            callBack(response);
        });
    },
    update: function (objColVals, condition, callBack) {
        orm.update("burgers", objColVals, condition, function (response) {
            callBack(response);
        });
    },
    delete: function (condition, callBack) {
        orm.delete("burgers", condition, function (response) {
            callBack(response);
        });
    }
};

// to burgers_controller.js
module.exports = burger;


// var burger = {
//     all: function(callBack) {
//         orm.all("burgers", function(response) {
//             callBack(response);
//         });
//     // },
//     // updateOne: function(id, callBack) {
//     //     orm.updateOne("burgers", id, callBack);
//     // },
//     // insertOne: function(name, callBack) {
//     //     orm.insertOne("burgers", name, callBack);
//     }
// };

