//This is where the server starts

//Import express
var express = require('express');

//Create an instance of express
var app = express();

//Setup initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route here
require("./public/routes/htmlRoutes")(app);
require("./public/routes/apiRoutes")(app);

//Listen to port
app.listen(PORT, function(){
    console.log("Listening to port " + PORT);
});