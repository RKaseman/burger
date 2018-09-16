
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(request, response) {
    burger.all(function(data) {
        console.log(data);
        response.render("index", {data});
    });
});


// router.post("burgers", function(request, response) {
//     burger.create([
//         "burger_name", "devoured"
//     ], [
//         request.body.burger_name, request.body.devoured
//     ], function(result) {
//         response.json({id: result.insertId});
//     });
// });


// router.put("/", function(request, response) {
//     burger.updateOne(request.body.id, function(data) {
//         console.log(data);
//         result.redirect("/");
//     });
// });


// to server.js
module.exports = router;

