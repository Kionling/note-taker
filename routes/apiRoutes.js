var path = require("path");
var fs = require("fs");
var express = require("express");
var app = express();

//need a retrival function to retrive code from db.json file
function getDbNotes () {
    var notes = fs.readFileSync(path.join(__dirname, "db/db.json", "utf8"));
    var letters = JSON.parse(notes);
    console.log(letters)
}






// need a fucntion that adds notes
function addNotes(note, createdNotes){
    var givenId = -1;
    for (var i=0; i < note.length; i++){
        if(note[i].id > givenId) {
            givenId = note[i];
        }
    }
    createdNotes.id = createdNotes + 1 ;
    note.push(createdNotes)
}

//acception criteria states giving ids to notes. 
//create function that uses mat


/// function for deleting notes


///save notes functions


//method for exporting api information 


//export 

module.exports = function(app){

}