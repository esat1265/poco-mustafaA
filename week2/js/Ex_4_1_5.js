
let input = prompt("Please enter a number:");


if (isNaN(input)) {
    console.log("This is not a number.");
} else {
    let number = Number(input);

    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
