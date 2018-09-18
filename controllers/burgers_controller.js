
var express = require("express");

var router = express.Router();

// access to functions in file:
var burger = require("../models/burger.js");

// looks at root directory
router.get("/", function (request, response) {
    // looks at database
    burger.all(function (data) {
        // adds buttons for each database entry from burger-block.handlebars
        // <button class="eatStatus" data-id="{{id}}" data-neweat="{{devour}}">
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // displays index.html and the buttons
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (request, response) {

    burger.create([
        "name", "devoured"
    ], [
            request.body.name, request.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            response.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: request.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});


// to server.js
module.exports = router;

// var express = require("express");

// var router = express.Router();

// var burger = require("../models/burger.js");


// router.get("/", function(request, response) {
//     burger.all(function(data) {
//         console.log(data);
//         response.render("index", {data});
//     });
// });


// // router.post("burgers", function(request, response) {
// //     burger.create([
// //         "burger_name", "devoured"
// //     ], [
// //         request.body.burger_name, request.body.devoured
// //     ], function(result) {
// //         response.json({id: result.insertId});
// //     });
// // });


// // router.put("/", function(request, response) {
// //     burger.updateOne(request.body.id, function(data) {
// //         console.log(data);
// //         result.redirect("/");
// //     });
// // });


// // to server.js
// module.exports = router;

