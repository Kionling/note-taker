var path = require("path");

var express = require("express");
var app = express();


module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        // res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
        
     
      });

    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };