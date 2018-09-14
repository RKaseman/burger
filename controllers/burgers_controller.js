
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(request, response) {
    burger.selectAll(function(burger_data) {
        console.log(burger_data);
        response.render("index", {burger_data});
    });
});


module.exports = router;

