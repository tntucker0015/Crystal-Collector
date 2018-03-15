$(document).ready(function() {
  var options = [10, 5, 2, 1];
//   var crystals = ["earth", "air", "fire", "water"];
  var crystalSrc= ["assets/media/earth.jpg", "assets/media/air.jpg", "assets/media/fire.jpg", "assets/media/water.jpg"];
  var game = {
      crystalValue: [],
      earth: [],
      air: [],
      fire: [],
      water: [],
      yourScore: 0,
      wins: 0,
      losses: 0,
      random: 0,
  };
  var crystals = $("#crystals");
// // resets your score to 0, invokes target number and sets crystals to random number
    function startGame() {
       targetNumber();  
    };

    // creates a loop to iterate through the array of options - assigns img, class and value
    for (var i =0; i < options.length; i++) {
        var imageCrystal = $('<img>')
        imageCrystal.addClass("crystal-image", crystals[i]);
        imageCrystal.attr("src", crystalSrc[i] );
        imageCrystal.attr("data-crystalValue", options[i]);
        crystals.append(imageCrystal);
    }

  
    // places and prints a random number in target value variable 
    function targetNumber () {
        var targetScore = 0;
        targetScore = Math.floor(Math.random() * 100) + 25;
        $("#targetScore").text(targetScore);
    };
    // captures click of image
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
        game.yourScore += crystalValue;
        $("#yourScore").text(game.yourScore);   
    });
    
    if (game.yourScore === game.targetScore) {
        alert("you Win!");
        wins++;
        $("#wins").text(wins);
        return false;
    } else if (game.yourScore >= game.targetScore) {
        alert("Loser!");
        losses++;
        $("#loss").text(losses);
        return false;
    };

    // captures click event from start button
    $("body").on("click", "#start", function() {
    startGame();
    });
});
