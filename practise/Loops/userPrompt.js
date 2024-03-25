// Create a game where you start with any random game number .Ask the user to keep guessing the game number until the user enters correct value .
gameNum = 25;
for (let i = 1; i > 0; i++) {
    let a = prompt("Guess the game nunber : ");
    if (a == gameNum) {
        console.log("You won !!");
        break;
    }
    else {
        a = prompt("You Guessed the wrong game nunber, Guess again : ");
    }
}