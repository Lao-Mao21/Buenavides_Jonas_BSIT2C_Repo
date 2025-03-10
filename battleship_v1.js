console.log("battleship game start")

// declaring vars
var location1 = 1;
var location2 = 2;
var location3 = 3;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game Logic
while (isSunk == false) {
    guess = prompt("Ready!, Aim!, FIRE! (Enter No. from 0-6");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number!")
    }
    else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            alert("Hit!🤯");
            if (hits == 3) {
                isSunk = true;
                alert("Battleship is now Sunk💔")
            }
        }
        else alert("Miss...💔😢");
    }
}

var stats = "Battleship sunk at: " + guesses + " guesses" + "and your accuracy is: " + (3/guesses);
alert(stats);