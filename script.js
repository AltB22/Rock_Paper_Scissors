//Global variables of score
var win = 0
var lose = 0
var tie = 0


//Defines the array of computer options
var array = ["R", "P", "S"]

window.alert("Let's play Rock, Paper, Scissors!!")
//declares game function
var game = function() {

//Prompt to select R, P, or S


var userChoice = window.prompt("Enter, R for Rock, P for Paper, or S for Scissors")
console.log(userChoice)

while (!array.includes(userChoice)) {
    window.alert("Please enter a valid character Uppercase R, P, or S")
    game()
}

 

//randomly selects the option for computer
var pcSelection = array[Math.floor(Math.random() * array.length)]
console.log(pcSelection)

window.alert("Computer chose " + pcSelection + "\nYou chose " + userChoice)


if (userChoice == pcSelection) {
    tie = tie + 1 
    
    window.alert("It's a tie! \nCurrent score is: \nWin " + win + " Lose " + lose + " Tie " + tie)
  
}

else if (userChoice == "R") {
    if(pcSelection == "P") {
        lose = lose + 1
        window.alert("You lose! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "S"){
        win = win + 1
        window.alert("You win! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
    }
  
}

else if (userChoice == "P") {
    if(pcSelection == "S") {
        lose = lose + 1
        window.alert("You lose! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "R" || "r"){
        win = win + 1
        window.alert("You win! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
    }
  
}

else if (userChoice == "S") {
    if(pcSelection == "P") {
        lose = lose + 1
        window.alert("You lose! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
    } else if (pcSelection == "R"){
        win = win + 1
        window.alert("You win! \nCurrent score is: Win " + win + " Lose " + lose + " Tie " + tie)
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
    (window.alert("Thanks for playing! \nFinal Score is: Win " + win + " Lose " + lose + " Tie " + tie))

}

