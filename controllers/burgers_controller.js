
var express = require("express");

var burger = require("../models/burger.js");


var router = express.Router();


router.get("/", function(request, response) {
    burger.selectAll(function(burger_name) {
        console.log(burger_name);
        response.render("index");
    });
});


module.exports = router;

