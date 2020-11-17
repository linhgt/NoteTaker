/**
 * This handles APIs communicating to the data
 */

//Import modules
var path = require('path');
var fs = require('fs');
var notes = require('../../db/db.json');

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        //res.sendFile(path.join(__dirname, "../notes.html"))
        return res.json(notes);
    });

    app.post("/api/notes", function(req, res){
        //New note entered
        //A note has a title and text
        const newNote = req.body;

        finalNote = JSON.parse(newNote);
        fs.writeFile("../../db/db.json", finalNote, function(err){
            if(err) throw err;
            console.log("succesfully saved note");
        })
    });
}