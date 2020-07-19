var path = require("path");
const fs = require("fs");

//need a retrival function to retrive code from db.json file
function getDbNotes () {
    var notes = fs.readFile(path.join(__dirname, "../db/db.json", "utf8"))
}

// need a fucntion that adds notes


/// function for deleting notes


///save notes functions


//method for exporting api information 