var path = require("path");

// routing
module.exports = function(app) {
    app.get("/survey", function(request, result){
        result.sendFile(path.join(__dirname + "/../public/survey.html"));
    })

    // if not matching route is found, default to home
    app.use(function(requeset, result){
        result.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}