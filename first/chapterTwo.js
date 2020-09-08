// // A fragment of code is an expression
// 22;

// // statements that effect something are called side effects of the code

// // Binding or Variables
// let caught = 5 * 5;

// //example
// let luigisDebt = 140;
// luigisDebt = luigisDebt = 35;
// console.log("Luigis debt:", luigisDebt);

// The environment is the collection of bindings and their values
// The environment is never empty because it contains bindings that are a part of the language standard.

// Return values
// console.log("The largest number is: ", Math.max(2, 4));

// console.log("The smallest number plus 100 is:", Math.min(2, 4) + 100);

// Control flow

// let theNumber = Number(prompt("Pick a number")); // Prompt returns a string so we have to convert it to a number

// console.log("Your number is the square root of " + theNumber * theNumber);

// let theNumber = Number(prompt('Pick a number'));

// IF ! Number is not a number(5)
// confusing but means if it is a number
// Unless the number is NaN do this
// if (!Number.isNaN(theNumber)) {
//   console.log('Your number is the square root of ' + theNumber * theNumber);
// }

// if (1 + 1 == 2) console.log("It's true");

// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log('Your number is the square root of ' + theNumber * theNumber);
// } else {
//   console.log("Hey, why didn't you give me a number?");
// }

// let num = Number(prompt('Pick a number'));
// if (num < 10) {
//   console.log('Small');
// } else if (num < 100) {
//   console.log('Medium');
// } else {
//   console.log('Large');
// }

// WHILE and DO LOOPS

// While a certain condition is met a while loop will continue to execute

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// Exponent Calculator
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// // console.log(result);

// // DO loops will always execute at least once and then start checking to see if the condition to continue the loop is present

// // let yourName;
// // do {
// //   yourName = prompt('Who are you?');
// // } while (!yourName); // Will make the loop continue until a non empty value is given
// // // console.log(yourName);

// // // indenting code
// // if (false != true) {
// //   console.log('That makes sense');
// // }
// // if (1 < 2) {
// //   console.log('No surprise there');
// // }

// // FOR LOOPS

// for (
//   let computerProgramming = 0;
//   computerProgramming <= 1000000;
//   computerProgramming = computerProgramming + 100000
// ) {
//   console.log(computerProgramming);
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// // Messing around trying to remember stuff i forgot

// // Higher order functions
// let carsArray = ['honda', 'ford', 'chevy', 'subaru', 'toyota'];
// // For Loop iterating through an array
// for (let i = 0; i < carsArray.length; i++) {
//   console.log('The car in array 1 is: ', carsArray[i]);
// }

// // Mapping array to new array
// let carsArray2 = [];
// carsArray.map((car) => {
//   carsArray2.push(`The make is ${car.toUpperCase()}`);
// });
// carsArray2.forEach((car) => {
//   console.log(car);
// });
// // Using reduce()
// let total = [];
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // numbersArray.reduce((accumulator, item) => {
// //   total = accumulator + item;
// //   return total;
// // });

// // console.log(total);
// function isEven(num) {
//   return num % 2 === 0;
// }
// let evens = numbersArray.filter(isEven);
// console.log(evens);

// Breaking out of a loop with break;

// the second colon needs to be there
// for (let current = 20; ; current = current + 1) {
//   if (current % 7 === 0) {
//     console.log(current);
//     break;
//   }
// }

// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }

/***
 * Updating bindings succinctly
 */

// counter = counter + 1;
// shortcut is to use counter += 1;
// counter *= 2;

// for (let number = 0; number <= 12; number +=2) {
// console.log(number)
// }

// Similarly for + and - there is an even shorter way

// counter ++
// counter --

/***
 * Dispatching on a value with switch
 */

// if (x == 'value1') action1();
// else if (x == 'value2') action2();
// else if (x == 'value3') action3();
// else defaultAction();

// Replacing this with the switch statement

// switch (prompt('What is the weather like?')) {
//   case 'rainy':
//     console.log('Remember to bring an umbrella.');
//     break;
//   case 'sunny':
//     console.log('Dress lightly.');
//     break;
//   case 'cloudy':
//     console.log('Go outside.');
//     break;
//   default:
//     console.log('Unknown weather type!');
// }
/***
 *
 * LOOPING A TRIANGLE
 */
/**
 * Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
 */

// for (let hash = '#'; hash.length <= 7; hash = hash + '#') {
//   console.log(hash);
// }

// let hash = '#';
// while (hash.length <= 12) {
//   hash = hash + '#';
//   console.log(hash);
// }

// for (let hash = '#'; hash.length <= 7; hash = hash + '#') {
//   console.log(hash);
// }

// for (let hash = '#'; hash.length <= 10; hash = hash + '#') {
//   console.log(hash);
//
// }

/***]
 * FizzBuzz
Write a program that uses console.log to print all the 
numbers from 1 to 100, with two exceptions. For numbers divisible 
by 3, print "Fizz" instead of the number, and for numbers 
divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print
 "FizzBuzz" for numbers that are divisible by both 3 and 
 5 (and still print "Fizz" or "Buzz" for numbers divisible
  by only one of those).

(This is actually an interview question that has been 
  claimed to weed out a significant percentage of 
  programmer candidates. So if you solved it, your 
  labor market value just went up.)
 * 
 */

// Working solution My solution
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// Better solution
// for (let i = 0; i < 100; )
// console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'buzz') || i);

/**
 * ChessBoard
 * Write a program that creates a string that represents and 8x8
 * grid, using newline characters to separate lines. At each position
 * of the grid there is either a space or a "#" character. The characters
 * should form a chessboard
 *
 *
 */
// Non-working solution
// for (let row = ''; row.length <= 16; row = row + '# ') {
//   if (row.length % 2 === 0) {
//     console.log(row);
//   } else if (!row.length % 2 === 0) {
//     console.log(`${row}`);
//   }
// }

// Working solution not mine
// /

// let boardSize = 8;

// let chessBoard = '';

// // In the outer loop add newline character
// for (let y = 0; y < boardSize; y++) {
//   // In the inner loop add a line, each line alternates between starting
//   // with a '#' or a ' '
//   for (let x = 0; x < boardSize; x++) {
//     if ((x + y) % 2 == 0) chessBoard += ' ';
//     else chessBoard += '#';
//   }
//   chessBoard += '\n';
// }

// console.log(chessBoard);

// //  size of board
// let size = 20;
// // create board variable and set to an empty string that will be
// // filled inside the inner loop
// let board = '';

// // Create a loop with an inner loop

// // Outer loop will add a \n character
// for (y = 0; y < size; y++) {
//  // Inner loop that sets string value and iterates 20 times before a newline
//  // is created by the outer loop.
//   for (x = 0; x < size; x++) {
//     // checks to see if the iteration of size is either even or odd
//     // and alternates between whether to start with a ' ' or a '#'
//     if ((x + y) % 2 == 0) {
//       // If the iteration is an even number then a space is added to board
//       board += ' ';
//     } else {
//       // Otherwise the iteration is odd and a hash is added
//       board += '#';
//     }
//   }
//   // Add a newline character at the end of the board string so that
//   // a newline is started
//   board += '\n';
// }

// console.log(board);

// Chessboard again no help

let size = 20;
board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
