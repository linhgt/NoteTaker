/**
 * This handles navigating to the html pages
 */

//Importing path module to help with pathname
var path = require('path');

module.exports = function(app){
//Get request to return the notes.html page
    app.get("/notes", function(req, res){
        console.log(res);
        res.sendFile(path.join(__dirname, "../notes.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));
    })
}

