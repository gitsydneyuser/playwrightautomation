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
let num  = 1;
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

let product : number = 23;
let price : number = 799.99;

//o/p -  the the sum of 23 and 799.99 is : 

console.log(`The sum of ${product} and ${price} is : `+(product*price))

// Example: BigInt
let bigNumber: bigint = 1234567890123456789012345678901234567890n;
console.log('BigInt example:', bigNumber);

// Example: Symbol
const uniqueId: symbol = Symbol('id');
console.log('Symbol example:', uniqueId);

// Example: Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log('Array of numbers:', numbers);

// Example: Tuple
let person: [string, number] = ['Alice', 30];
console.log('Tuple example:', person);

// Example: Enum
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Green;
console.log('Enum example:', favoriteColor);

// Example: Union Type
let value: string | number = 'Hello';
value = 42;
console.log('Union type example:', value);

// Example: Object
let user: { name: string; age: number } = { name: 'Bob', age: 25 };
console.log('Object example:', user);

// Example: Function with type annotations
function add(a: number, b: number): number {
    return a + b;
}
console.log('Function example:', add(5, 7));








