// load data
var friendsData = require("../data/friends.js");
// var path = require("path");

// routing
module.exports = function(app){
    app.get("/api/friends", function(request, result){
        result.json(friendsData);
    });

    app.post("/api/friends", function(request, result){
        var difference = 25;
        var matchScore = 0;

        for(var i = friendsData.length -1; i >= 0; i--){
            console.log("Comparing with" + friendsData[i].name);

            var totalDifference = 0;

            for(var f = 0; f < 10; f++){
                totalDifference = totalDifference + Math.abs(friendsData[i].score[f] - request.body.score[f]);
            }
            if (totalDifference < difference){
                difference = totalDifference
                matchScore = i;
            }
            console.log("Total difference: " + friendsData[i].name + " is " + totalDifference);
        }

// pushing the user input into the friendArr
        friendsData.push(request.body);

// response back with the most compatible
result.json({name: friendsData[matchScore].name, photo: friendsData[matchScore].photo});
    });
}