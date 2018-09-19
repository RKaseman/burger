
var connection = require("./connection.js");

function printQuestionMarks(number) {
    // create an empty array
    var array = [];

    // called in orm.create then loop through and print an array of question marks
    // needed for insertion into the sql queryString
    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(object) {
    // create an empty array
    var array = [];

    // loop through the keys and push the key/value as a string int array
    for (var key in object) {
        var value = object[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            // adds quotes if string input (name) has spaces
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // keys are name and devoured, values are the name entered in
            // <input type="text" id="burg" name="name"> and boolean
            array.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return array.toString();
}

// Object for all our SQL statement functions.
var orm = {
    all: function (tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            callBack(result);
        });
    },
    create: function (table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (error, result) {
            if (error) {
                throw error;
            }

            callBack(result);
        });
    },
    // An example of objColVals would be {name: panther, devoured: true}
    update: function (table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }

            callBack(result);
        });
    },
    delete: function (table, condition, callBack) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }

            callBack(result);
        });
    }
};

// to burger.js
module.exports = orm;


// var orm = {
//     all: function(table, callBack) {
//         var queryString = "SELECT * FROM " + table;
//         connection.query(queryString, function(error, result) {
//             if (error) throw error;
//             callBack(result);
//         });
//     },
//     create: function(table, cols, vals, callBack) {
//         var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES (??)";
//         connection.query(queryString, [vals], function(error, result) {
//             if (error) throw error;
//             callBack(result);
//         });
//     // },
//     // updateOne: function(table, idCol, callBack) {
//     //     var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
//     //     connection.query(queryString, [table, idCol], function(error, result) {
//     //         if (error) throw error;
//     //         console.log(result);
//     //         callBack(result);
//     //     });
//     }
// };

