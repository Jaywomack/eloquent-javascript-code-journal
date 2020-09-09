/**
 * Functions
 *  */

// a function definition is a binding where the value is a function
// const square = function (x) {
//   return x * x;
// };
// console.log(square(3));

// // a function is created with an expression that is started with the keyword of function

// // A function can have multiple parameters or no parameters at all

// const makeNoise = function () {
//   console.log('Pling!');
// };

// makeNoise();

// const power = function (base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(power(2, 10));

// function without a return or with a return with no expression after it will return undefined.

// A return statement determines what the value of a function is

/***
 * BINDINGS AND SCOPE
 * bindings that are used with var are visible throughout a function even if it is nested deeper in the function. Where as let and const are only seen in the block that they are in.
 * Bindings using let and const can be used if the block reaches out, but can never reach into a block that is nested deeper in the scope.
 */
// let x = 10;

// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
// }
// console.log(x + z); // z is grabbed out of the block but y is not available here.

// // scope can look out and grab other bindings but if there is a binding in the local scope than that bindings value will be used.
// // This function will use the n within its scope
// const halve = function (n) {
//   return n / 2;
// };

// let n = 10;
// // This n above will not be used for the halve function it will use the n from within its own block
// console.log(halve(100));

// // Will console.log the n that is in the global scope
// console.log(n);

// /***
//  * NESTED SCOPE
//  */
// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += 's';
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, 'can', 'chickpeas');
//   ingredient(0.25, 'cup', 'tahini');
//   ingredient(0.25, 'cup', 'lemon juice');
//   ingredient(1, 'clove', 'garlic');
//   ingredient(2, 'tablespoon', 'olive oil');
//   ingredient(0.5, 'teaspoon', 'cumin');
// };

// hummus(2);

// Lexical scoping is where blocks can see functions within there scope and see outside of it but can never see inside others

// Function declaration

// function declarations are hoisted in the first pass of the two pass compiler and therefor can be used at anytime as long as the place its used has access to that scope.

// console.log('The future says:', future());
// function future() {
//   return "You'll never have flying cars.";
// }

/***
 * ARROW FUNCTIONS
 */

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

// console.log(power(3, 10));

// Two similar arrow functions
// const square1 = (x) => {
//   return x * x;
// };

// const square2 = (x) => x * x;

// // When there is no parameter the arrow function looks like this
// const horn = () => {
//   console.log('toot');
// };

// horn();

// Will max out the call stack because there is infinite values returned
// function chicken() {
//   return egg();
// }

// function egg() {
//   return chicken();
// }

// console.log(chicken() + 'came first');

// Optional Arguments
// JavaScript will allow as many arguments or as few as you want. If you put to many it will ignore them and if you put to few it will assign undefined to it.

// function square(x) {
//   return x * x;
// }
// console.log(square(4, true, 'hedgehog')); // The additional arguments are ignored by JavaScript

// // This function will return the opposite of a single argument or will return the difference between the arguments
// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// console.log(minus(10, 5));
