//dependencies

var fs = require("fs");
var express = require("express");
var app = express();

//server setup

var PORT = process.env.PORT || 8000;

//setting up express data parsing handle

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router map
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  