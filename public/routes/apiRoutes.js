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

        //Parse newnote to JSON object and write it to db.json
        notes.push(newNote);
        finalNotes = JSON.stringify(notes);

        fs.writeFile("./db/db.json", finalNotes, function(err){
            if(err) throw err;
            console.log("succesfully saved note");
            res.send();
        })
    });
}