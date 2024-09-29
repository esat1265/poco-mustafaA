// Ex. 4.1.6 (*) - Age Calculator
// Want to find out how old you’ll be? Calculate it!
// • Use prompt() and alert().
// • Ask user for birth year.
// • Ask user for a future year.
// • Calculate the 2 possible ages for the given year.
// • Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
// For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
// 2026.


let birthyear = prompt("Enter your birth year:");
let futureyear = prompt("Enter the future year:");

let age = Number(futureyear) - Number(birthyear);

console.log(`You will be either ${age} or ${age + 1} in ${futureyear}`);