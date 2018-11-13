// Generate random guess between randomly generated number between 19 and 120

var randomGuessElem = $("#random-number");
var displayScoreElem = $("#display-score");
var winsCounterElem = $("#wins");
var losesCounterElem = $("#loses");

var randomGuess = 0 ;
var wins = 0;
var loses = 0;
var totalScore = 0;

var resetOrStartOverTheGame = function(){

$(".crystals").empty();
$("#display-score").empty();

randomGuess = Math.floor(Math.random()*(120-19+1)) + 19;
console.log(randomGuess);
randomGuessElem.text(randomGuess);

// Generate random number of the 4 crystals between 1 and 12


for(var i = 0; i<4; i++){
    var randomCrystal = Math.floor(Math.random()*12)+1;
    console.log(randomCrystal);
    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "random-data": randomCrystal
    });
    $(".crystals").append(crystal);
   }
}
//Start the game
resetOrStartOverTheGame();

// Onclick function for each crystal
// each crystal click will add numbers to the total score
$(document).on("click", ".crystal",function(){
    var num = parseInt($(this).attr("random-data"));
   // console.log("CrystalClick: " + num);
   totalScore += num;
   console.log("Total Score : " + totalScore);
   displayScoreElem.text(totalScore);
   
   if(totalScore == randomGuess){
       wins++;
       alert("You Win!");
       totalScore = 0;
       resetOrStartOverTheGame();
   }else if(totalScore > randomGuess){
       loses++;
       alert("You Loose!");
       totalScore = 0;
       resetOrStartOverTheGame();
   }
   winsCounterElem.text(wins);
   losesCounterElem.text(loses);
})

// check if the total score is equal to the random number or not
// if it's not equal or less/bigger then increament loose and start over
// if the total score equals the random number then increament win and restart





