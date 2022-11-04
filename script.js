//Global variables of score
var win = 0
var lose = 0
var tie = 0


//Defines the array of computer options
var array = ["R", "P", "S"]

//declares game function
var game = function() {

//Prompt to select R, P, or S
var userChoice = window.prompt("Enter, R, P, or S")
console.log(userChoice)


//randomly selects the option for computer
var pcSelection = array[Math.floor(Math.random() * array.length)]
console.log(pcSelection)


if (userChoice == pcSelection) {
    tie = tie + 1 
    window.alert("It's a tie! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
  
}

else if (userChoice == "R") {
    if(pcSelection == "P") {
        lose = lose + 1
        window.alert("You lose! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "S"){
        win = win + 1
        window.alert("You win! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    }
  
}

else if (userChoice == "P") {
    if(pcSelection == "S") {
        lose = lose + 1
        window.alert("You lose! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "R"){
        win = win + 1
        window.alert("You win! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    }
  
}

else if (userChoice == "S") {
    if(pcSelection == "P") {
        lose = lose + 1
        window.alert("You lose! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "R"){
        win = win + 1
        window.alert("You win! Current score is: Win " + win + " Lose " + lose + " Tie " + tie)
    }
 
}

}
//Launches the game

game()

var playAgain = window.confirm("Would youy like to play again?")
//Returns to game if player wants to play again
while (playAgain) {
    game()
    playAgain = window.confirm("Would you like to play again?")
}
if (!playAgain) {
    (window.alert("Thanks for playing! Final Score is: Win " + win + " Lose " + lose + " Tie " + tie))

}

