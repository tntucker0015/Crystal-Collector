// start button
    // on start random number generator for target score
    // reset your score to 0
    // random number generator for crystals

// onlick events for each image
 






// var html = "<p>Your Record is:</p>" + "<p>Wins: " + wins + "</p>" + 
//        "<p>Losses: " + losses + "</p>";

//        document.querySelector('#record').innerHTML = html;
//     }
    var crystals = $("#crystals");
    var game= {
        options: [10, 5, 2, 1],
        wins: 0,
        losses: 0,
        targetScore: 0,
        yourScore: 0,
        crystalvalue1: '',
        crystalvalue2: '',
        crystalvalue3: '',
        crystalvalue4: '',
 
    }
    game.targetScore = (Math.floor(Math.random()*100 +1));
    $("#targetScore").text(game.targetScore);


//     for (var i=0; i <game.options.length; i++){
//         var imageCrystal = $("<img>");
//         imageCrystal.attr("data-crystalvalue", game.options[i]);
//         crystals.append(imageCrystal);
// console.log(game.options[i]);
//     }

//     $("#crystals").on("click", ".crystal-image", function() {
//         var crystalValue = ($(this).attr("data-crystalvalue"));
//         crystalValue = parseInt(crystalValue);
//         // console.log(crystalValue);
        
  

    

    
    $("#crystals").on("click", ".crystal-image", function() {
        game.yourScore += crystalValue;
        console.log("you clicked a crystal " + game.yourScore + " times!");
        if (game.yourScore === game.targetScore) {
            alert("you Win!");
            return false;
        } else if (game.yourScore >= game.targetScore) {
            alert("You Lose!");
            return ralse;
        }
        });
