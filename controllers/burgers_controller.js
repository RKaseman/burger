
var express = require("express");
// var burger = require("../models/burger");


var router = express.Router();

router.get("/", function(request, response) {
    response.render("index");
});


module.exports = router;