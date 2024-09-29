// Ex. 4.2.1 (**) - FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the
// number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(`${i} : FizzBuzz`);
//     } else if (i % 3 === 0 ) {
//         console.log(`${i} : Fizz`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} : Buzz`);
//     } else{
//         console.log(i);
//     }
// };

// ==========================================================================

// Ex. 4.2.2 (**)
// Write a program that prints a multiplication table for numbers up to 10. (use nested loops)
// 1 1 2 3 4 5 6 7 8 9 10
// 2 2 4 6 8 10 12 14 16 18 20
// 3 3 6 9 12 15 18 21 24 27 30
// 4 4 8 12 16 20 24 28 32 36 40
// 5 5 10 15 20 25 30 35 40 45 50
// 6 6 12 18 24 30 36 42 48 54 60
// 7 7 14 21 28 35 42 49 56 63 70
// 8 8 16 24 32 40 48 56 64 72 80
// 9 9 18 27 36 45 54 63 72 81 90
// 10 10 20 30 40 50 60 70 80 90 100

for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
        let result = i * k;
        result ++; 
        console.log(`${result}`);
    }    
};