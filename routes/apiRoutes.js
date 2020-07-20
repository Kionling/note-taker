var path = require("path");
var fs = require("fs");
var express = require("express");
var app = express();

//need a retrival function to retrive code from db.json file
function getDbNotes () {
    var notes = fs.readFileSync(path.join(__dirname, "../db/db.json", "utf8"));
    return JSON.parse(notes);
}






// need a fucntion that adds notes
function addNotes(note, createdNotes){
    var givenId = -1;
}

//acception criteria states giving ids to notes. 
//create function that uses mat


/// function for deleting notes


///save notes functions


//method for exporting api information 


//export 

module.exports = function(app){

}