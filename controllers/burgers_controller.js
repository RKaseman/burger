
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(request, response) {
    burger.selectAll(function(burgerData) {
        console.log(burgerData);
        response.render("index", {burgerData});
    });
});

router.put("/burgers/update", function(request, response) {
    burger.updateOne(request.body.burger_id, function(data) {
        console.log(data);
        result.redirect("/");
    });
});


module.exports = router;

