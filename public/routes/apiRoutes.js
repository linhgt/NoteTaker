/**
 * This handles APIs communicating to the data
 */

//Import modules
var path = require('path');
var fs = require('fs');
var notes = JSON.parse(fs.readFileSync("./db/db.json"));

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        //res.sendFile(path.join(__dirname, "../notes.html"))
        return res.send(notes);
    });

    app.post("/api/notes", function(req, res){
        //New note entered
        //A note has a title and texts
        const newNote = req.body;

        //Set newNote id to be notes.length
        newNote.id = notes.length + 1;

        //push newnote  notes
        notes.push(newNote);

        //stringify the notes
        let finalNotes = JSON.stringify(notes);

        //Write the finalNotes to db.json
        fs.writeFile("./db/db.json", finalNotes, function(err){
            if(err) throw err;
            console.log("succesfully saved note");
            res.send();
        })
    });

    app.delete("/api/notes/:id", function(req, res){
        //splice the note from the array
        notes.splice(req.param.id, 1);

        //set the current id for note after removal
        if(notes){
            for(let i = 0; i < notes.length; i++)
            {
                notes[i].id = i;
            }
        }

        //Stringify the note
        let finalNotes = JSON.stringify(notes);

        //write the notes back to db

        fs.writeFile("./db/db.json", finalNotes, function(err){
            if (err) throw err;
            console.log("Successfully delete the note");
            res.send();
        });
    })
}