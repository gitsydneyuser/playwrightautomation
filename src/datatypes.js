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
var num = 1;
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
var product = 23;
var price = 799.99;
//o/p -  the the sum of 23 and 799.99 is : 
console.log("The sum of ".concat(product, " and ").concat(price, " is : ") + (product * price));
