//This is where the server starts

//Import express
var express = require('express');

var path = require('path');

//Create an instance of express
var app = express();

//Setup initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
 

//route here
require("./public/routes/htmlRoutes")(app);
require("./public/routes/apiRoutes")(app);

//Listen to port
app.listen(PORT, function(){
    console.log("Listening to port " + PORT);
});