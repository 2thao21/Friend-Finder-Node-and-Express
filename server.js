// Dependencies
var express = require("express");
var path = require("path");

// Setting up the Express App
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Expres App to handa data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






// Setting server to a series of "routing" files
// These routes give our  server a "map" of how to respond 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
