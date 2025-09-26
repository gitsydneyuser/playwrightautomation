"use strict";
// if (a > 5) {
//     console.log("a is greater than 5");
// }
// else if (a === 5) {
//     console.log("a is equal to 5");
// }
// else {
//     console.log("a is less than 5");
// }
let a = 5;
// if (a > 5) {
//     if (a < 15) {
//        if (a === 10) {
//             console.log("a is equal to 10");
//         }else {
//             console.log("a is less than 10");
//         }    
//         console.log("a is greater than 5 but less than 15");
//     }else {
//         console.log("a is greater than 5 and also greater than 15");
//     }
// }
// let b : number = 10;
// if (b < 0) {
//     console.log("b is negative");
// } else if (b > 0 ) {
//         console.log("b is a positive number");
// } else {
//     if (b === 0) {
//     }
//     console.log("b is neither positive nor negative");
// }
// let b : number = 10;
// switch (b) {
//     case 0:
//         console.log("b is zero");
//         break;
//     case 5:
//         console.log("b is five");
//         break;
//     case 10:
//         console.log("b is ten");
//         break;
//     default:
//         console.log("b is neither zero, five, nor ten");
// }
// function action(operation: string): void {
//     switch (operation) {
//         case 'click':
//             performClick()
//             break;
//         case 'scroll':
//             performScroll();
//             break;
//         case 'sendkeys':
//             performSendKeys();
//             break;
//         default:
//             console.log("Invalid operation");
//     }
// }
// function performClick(): void {
//    console.log("Performing click action");
// }
// function performScroll(): void {
//    console.log("Performing scroll action");
// }
// function performSendKeys(): void {
//    console.log("Performing sendKeys action");
// }
// action('click'); 
// action('click'); 
// action('click'); 
// for (let i = 0; i < 10; i++) {
//     console.log(`Iteration ${i}`);
// }
//while loop
// let num1 :number = 5;
// let fact : number = 1;
// while (num1 > 0) {
//     fact = fact * num1;
//     console.log(`Factorial is ${fact}`);
//     break
// }
// console.log(`Factorial is ${fact}`);
let num1 = 5;
do {
    console.log(`Current number is ${num1}`);
    num1--;
} while (num1 > 0);
console.log(`Final number is ${num1}`);
