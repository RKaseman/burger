
// set variables to use required npm packages
// ("handle routing data requests and responses + other middleware");
var express = require("express");
// ("handle data from the page url or json format");
var bodyParser = require("body-parser");
// ("handle page display instructions");
var exphbs = require("express-handlebars");

// connection port is either flexible and assigned by a run environment || defaults to 8080;
var PORT = process.env.PORT || 8080;

// variable app gets an instance of the npm package express();
var app = express();


// express-as-app.use(middleware to access.the static files in a directory("called public"));
app.use(express.static("public"));


// express-as-app.use(body-parser to read.page url contents({ of type: any, not just string or array }));
// NOTE: research what this means; application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// express-as-app.use(body-parser on.json data());
// NOTE: research what this means; parse application/json
app.use(bodyParser.json());


// express-as-app.the content display mechanism is("called handlebars",
// exphbs({ has the definition of content in a file: "called main" }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// express-as-app.set("the default display mechanism", "to handlebars");
app.set("view engine", "handlebars");


// variable routes connects to the burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");
// express-as-app.use(the routes defined in the required file);
app.use(routes);


// express-as-app.start listening for connections on(either port definition, then() { return (which one); });
app.listen(PORT, function() {
    console.log("PORT " + PORT);
});

