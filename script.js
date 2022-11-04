//Prompt to select R, P, or S

var userChoice = window.prompt("Enter, R, P, or S")
console.log(userChoice)


//Then computer randomly selects R, P, or S

var array = ["R", "P", "S"]

var pcSelection = array[Math.floor(Math.random() *3)]
console.log(pcSelection)

if (userChoice === pcSelection) {
    window.alert("It's a tie")
}

else if (userChoice == "R") {
    if(pcSelection == "P") {
        window.alert("Computer Wins")
    } else if (pcSelection == "S"){
        window.alert("Player Wins")
    }
}
else if (userChoice == "P") {
    if(pcSelection == "S") {
        window.alert("Computer Wins")
    } else if (pcSelection == "R"){
        window.alert("Player Wins")
    }
}
else if (userChoice == "S") {
    if(pcSelection == "P") {
        window.alert("Computer Wins")
    } else if (pcSelection == "R"){
        window.alert("Player Wins")
    }
}
//else {console.log("Player Wins")}
//var game = function(){
  //  Math.floor(Math.random() * 3)

//If person selects R