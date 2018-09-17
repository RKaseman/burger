
var express = require("express");

var router = express.Router();

// access to functions in file:
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
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

