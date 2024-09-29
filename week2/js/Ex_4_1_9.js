// Ex. 4.1.9 (*) - Play with for loop
// Construct for loops that accomplish the following tasks:
// • Print the numbers 0 - 20, one number per line.
// • Print only the ODD values from 3 - 29, one number per line.
// • Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// • Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.


// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// };

// for (let i = 3; i <= 29; i += 2) {
//     console.log(i);
// };

// for (let i = 12; i >= -14; i -= 2) {
//     console.log(i);
// };

// for (let i = 50; i >= 20; i -= 3) {
//     console.log(i);
// };

//============================================================

// Ex. 4.1.10 (*) - Play with arrays and for loop
// Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
// construct for loops to accomplish the following tasks:
// a) Print each element of the array to a new line.
// b) Print each character of the string -in reverse order- to a new line.


// let string = "LaunchCode";
// let array = [1, 5, "LC101", "blue", 42];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };

// for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string[i]);
// };

//==================================================

// Ex. 4.1.11 (*) - Play with while loop
// Define three variables for the LaunchCode shuttle:
// • one for the starting fuel level,
// • another for the number of astronauts aboard,
// • and the third for the altitude the shuttle reaches.
// Construct while loops to do the following:
// a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive
// value greater than 5000 but less than 30000.
let startingFuel = 0;
let astronauts = 0;
let altitude = 0;

while (startingFuel < 5000 || startingFuel > 30000) {
    startingFuel = Number(prompt("Enter the starting fuel level:"));
};

// b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
// entry by having the loop continue until the user enters an integer from 1 - 7.

while (astronauts < 1 || astronauts > 7) {
    astronauts = Number(prompt("Enter the number of astronauts onboard:"));
};

// c) Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the
// fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The
// loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
// not reach 0).

console.log("The shuttle is on its way to the moon!"); 

while (startingFuel > 100 * astronauts) {
        startingFuel -= 100 * astronauts;
        altitude += 50;
        console.log(`Altitude: ${altitude} km. Fuel level: ${startingFuel} Lt.`);     
};

console.log("Oops! Fuel level is not enough to boost the crew!");     


// =====================================================

// function incrementItems (arr) {
//     for ( let i = 0; i < arr . length ; i++){
//      arr[i] = arr[i] + 1;
//  }
//  console.log(arr);
//  return arr
// }
 
// incrementItems ([0 , 1, 2 , 5]);