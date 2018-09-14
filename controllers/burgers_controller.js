
var express = require("express");

var router = express.Router();


// var burger = require("../models/burger.js");


router.get("/", function(request, response) {
//     burger.selectAll(function(burger_name) {
//         console.log(burger_name);
        response.render("index");
//     });
});


module.exports = router;

