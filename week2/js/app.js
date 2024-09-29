const secretNumber = Math.floor(Math.random() * 101);

while(true) {
    let guessNumber = prompt("type a number between 0 and 100:\n ");

    if (isNaN(guessNumber) || guessNumber === ""){
        console.log("It's not a number. Please type a number!");
        continue;
    };

    let convertedNumber = Number(guessNumber);

    if(convertedNumber > secretNumber) {
        console.log("too high");
    } else if (convertedNumber < secretNumber){
        console.log("too low");
    } else {
        console.log("You found secret number! Congrats. 🎉");
        break;
    }
};
 
