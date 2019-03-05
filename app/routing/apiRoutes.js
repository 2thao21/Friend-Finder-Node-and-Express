// load data
var friendsData = require("../data/friends.js");
// var path = require("path");

// routing
module.exports = function(app){
    app.get("/api/friends", function(request, result){
        result.json(friendsData);
    });

    app.post("/api/friends", function(request, result){
        console.log(request.body.scores);

        var user = request.body;
        
        for(var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        var minimumDifference = 25;
        var matchScore = 0;

        // looping to compare the user and the ith friend scores
        // also adding the difference(abs) to the total difference 
        for (var i = 0; i < friendsData.length; i++){
            var totalDifference = 0;
            for(var f = 0; f < friends[i].scores.length; f++){
                var difference = Math.abs(user.score[f] - friendsData[i].scores[f]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference){
                matchScore = i;
                minimumDifference = totalDifference;
            }
        }
        

// pushing the user input into the friendArr
        friendsData.push(user);

// response back with the most compatible
result.json(friendsData[matchScore]);
    });
}