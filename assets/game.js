//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.querySelector("#computerGuesses").innerHTML = computerGuess;

//game holders 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9; 
var guessesSoFar = [];


//user functions 
document.onkeyup = function(event) {
    
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessesLeft--;

  document.querySelector("#guessesSoFar").innerHTML = userGuess; 

  if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		
	}

/* You can probably see by my code that i have no idea what i am doing. 
I don't understand onclicks and functions. What needs to be a function...
how they operate. I also don't understanding calling and resetting functions 
I am trying but it's hard to find any references that make any sense when i read them
I don't know what i am doing wrong that nothing is showing up on the screen.
 I at a dead end here :( :( :( */
