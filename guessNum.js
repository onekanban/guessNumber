// start of the guessing game so that while the number is unknown and the user has not exceeded 7 guesses, they can make a new guess
$(document).ready(function(){
  $("#guess").click(function (){
      // ask the user for some input
      //var userGuess = prompt("Please guess a number between 1 and 100, you have 7 attempts.");

      // Generate a random number between 1 and 100
      var randomNumber = Math.floor(Math.random() * 100);

      // set a variable to allow us to exit when the number has been properly guessed
      var guess = true;

      // a counter for the number of guesses made by the user
      var numGuess = 0;

      while (guess && numGuess <= 6){

        if (userGuess != randomNumber){
          if (numGuess == 0){
           numGuess += 1;
           var userGuess = prompt("Please guess a number between 0 and 100, you have 7 attempts.");
          }
          else if (userGuess > randomNumber) { //if the user is higher print something and then ask for a new guess
            numGuess += 1;
            var userGuess = prompt("Sorry " + userGuess + " was too HIGH. This was guess " + numGuess + ", please try again.");
          }
          else { // if the user is lower print something else
            numGuess += 1;
            var userGuess = prompt("Sorry " + userGuess + " was too LOW. This was guess " + numGuess + ", please try again.");
          }
        }
        else { // exit when the player has successfully guessed the number
          alert("Congratulations! You guessed the correct number, the number was " + randomNumber + ", you required " + numGuess + " guesses!");
          guess = false;
        }
      }

      if (numGuess == 7 && userGuess != randomNumber) {
        alert("Sorry, you have exceeded the maximum number of guesses.  The correct answer was " + randomNumber);
      }
      else if (numGuess == 7 && userGuess == randomNumber) {
        alert("Congratulations! You guessed the correct number, the number was " + randomNumber + ", you required " + numGuess + " guesses!");
        guess = false;
      }
      else{}
    });
  });
