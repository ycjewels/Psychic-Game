var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 7;
var guessLetter = [];

document.onkeyup = function(event) {

    var userGuess = event.key;

    var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === psychicGuess) {
            wins++;
            numGuesses = 7;
            guessLetter = [];
        }
        else {
            if (guessLetter.includes(userGuess)) {
                
            }
            else {
                numGuesses--;
                guessLetter.push(userGuess);
            }
        }
    
        if (numGuesses === 0) {
            numGuesses = 7;
            losses++;
            guessLetter = [];
        }
      
   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessLetter.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
}

    


