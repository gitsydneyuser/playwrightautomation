"use strict";
// Generally there are 3 primitive types in javascvript and types script 
// boolean = true/false
// number = whole numbers or floating pont number
//string = text or '' /""
//bigint = very large postive and negative number 
// symbol - are used to create a globally uniqe identifier
// let value : boolean = true
// let value1 : boolean = false
// let valueff : number = 3
//Explicit typing
//let firstName : string = "nishant";
//implicit type
let num = 1;
//num = "true"
//console.log(num)
// Type : any
//------------
// let v : any = true;
// v = "hello"
// console.log(v)
//Type - never
//let x : never = true;
//Type - undefined & null
// let x : undefined = undefined;
// let value3 : null = null;
// if (value3 != null) {
//     console
// }
// let firstName : string = "nishant";
// let age : number = 42;
// let isActive : boolean = true
// let value = `${firstName} + ${age}`
// console.log(value)
// console.log(`${firstName} is ${age} years old and is active  ${isActive}`)
// console.log(`the value is ${value}`+value)
let product = 23;
let price = 799.99;
//o/p -  the the sum of 23 and 799.99 is : 
console.log(`The sum of ${product} and ${price} is : ` + (product * price));
// Example: BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log('BigInt example:', bigNumber);
// Example: Symbol
const uniqueId = Symbol('id');
console.log('Symbol example:', uniqueId);
// Example: Array
let numbers = [1, 2, 3, 4, 5];
console.log('Array of numbers:', numbers);
// Example: Tuple
let person = ['Alice', 30];
console.log('Tuple example:', person);
// Example: Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log('Enum example:', favoriteColor);
// Example: Union Type
let value = 'Hello';
value = 42;
console.log('Union type example:', value);
// Example: Object
let user = { name: 'Bob', age: 25 };
console.log('Object example:', user);
// Example: Function with type annotations
function add(a, b) {
    return a + b;
}
console.log('Function example:', add(5, 7));
