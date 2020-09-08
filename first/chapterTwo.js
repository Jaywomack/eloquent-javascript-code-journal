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
for (let current = 20; ; current = current + 1) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
