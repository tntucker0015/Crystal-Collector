// need to fix the following:
    // start button needs to reset yourscore at the begining (adding a render function)
    // number generation needs to be random for images
    // game needs to stop afte you win and you lose.
    // fix overall layout and look
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
      targetScore: 0,
      wins: 0,
      losses: 0,
      random: 0,
  };
  var crystals = $("#crystals");
// // resets your score to 0, invokes target number and sets crystals to random number
    function startGame() {
       targetNumber();  
       record();
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
        game.targetScore = Math.floor(Math.random() * 100) + 25;      
        $("#targetScore").text(game.targetScore);
    };
    function record () {
        console.log(game.yourScore);
        console.log(game.targetScore);
    }
    // captures click of image
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
            game.yourScore += crystalValue;
            $("#yourScore").text(game.yourScore); 
            // captures wins and losses for the game
            if (game.yourScore === game.targetScore) {
                game.wins++;
                $("#wins").text(game.wins);
                alert("Winner");
                game.yourScore = 0;
                return false;
            } else if (game.yourScore >= game.targetScore) {
                game.losses++;
                $("#loss").text(game.losses);
                game.yourScore = 0;
                alert("loser");
                return false;
            }
            
    });
    
    // captures click event from start button
    $("body").on("click", "#start", function() {
    startGame();
    });
});
