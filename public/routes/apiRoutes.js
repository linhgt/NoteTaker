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

        //Set newNote id to be notes.length
        if(notes.length == 0)
        {
            newNote.id=0;
        }
        else{
            newNote.id=notes.length;
        }

        //push newnote  notes
        notes.push(newNote);

        //stringify the notes
        finalNotes = JSON.stringify(notes);

        //Write the finalNotes to db.json
        fs.writeFile("./db/db.json", finalNotes, function(err){
            if(err) throw err;
            console.log("succesfully saved note");
            res.send();
        })
    });
}