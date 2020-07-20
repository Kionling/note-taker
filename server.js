//dependencies

var express = require("express");
var app = express();
var path = require("path")
//server setup

var PORT = process.env.PORT || 3000;

//setting up express data parsing handle

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


//Router map
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


//server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  