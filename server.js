
var orm = require("./config/orm.js");


orm.select("burgers", "burger_name", "devoured", function(result) {
    console.log(result);
});

