
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = 3000;

var app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use("/", routes);

// var orm = require("./config/orm.js");


// // orm.select("burgers", "burger_name", "devoured", function(result) {
//     // console.log(result);
// // });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});