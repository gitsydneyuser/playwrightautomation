

// 0-n-1. (3) - 0-2

//syntax to define an array 

//let arrayName: datatype[];

let name1 : string[] = ['john',"ace","apple"];
let numerArray : number[] = [1,2,3,4];

let booleanArray: boolean[] = [true,false,false,true];


// let x : number;

// for (x = 0;x <3 ;x++) {

//     console.log(name1[x])

// }


// for (let i = 0;i <numerArray.length;i++) {

//   if (numerArray[i] % 2 == 0) {
//     console.log(`The even number is ${numerArray[i]}`)

//   }else{
//         console.log(`The odd number is ${numerArray[i]}`)

//   }
// }


let eveNumbers : number[]=[];
let oddNumbers : number[]=[];

for (let i = 1; i<20; i++) {

    if (i % 2 == 0){

       eveNumbers.push(i);
     }else{
        oddNumbers.push(i)
     }
}
//console.log(eveNumbers +"," +oddNumbers)


// let numerArray1 : string[] = ["one","two","three"];
// let numerArray2 : number[] = [1,2,3,4];

// //numerArray1.push(10)
// //numerArray1.pop()

// const result = numerArray1.find(no => no.startsWith("o"))

// console.log(result)


// const numerArray1: string[] = ["one", "two", "three"];

// const result = numerArray1.find(no => no.startsWith("o"));

// console.log("Result:", result);  // Should print: "one"


// let person : {

//     name: string;
//     age : number;
//     mobileNum : number;
   
// }



// let person : {name:string,age:number,mobileNum:number} = 
// {

//     name: 'sashi',
//     age : 20,
//     mobileNum : 878787778
   
// };

// console.log(person)


// function sum(num1: number,num2: number) : void {
//   const result =  num1 + num2;
//   console.log(result)
//     }

//  sum(10,10)  


//  function display_details(id:number , name: string,mail_id ? :string) {

//   console.log(`ID:${id}`)
//   console.log("Name : " +name)
//   console.log(mail_id)

//   if (mail_id = undefined) {

//     console.log("email Id",mail_id)
//   }
//  }

//  display_details(123,"typescript")

// default paramter 

// function open_chrome_browser(browser_name = "chrome") {

//   ///dkj

// }

// open_chrome_browser('safari')



//Function() constructor


//syntx 

//let object = new Function(ag11,arg2,functionBofy)

// const value = new Function("Welcome ");
// console.log(value())





// const values = new Function("x","y","z","return x + y + z");
// let sum = values(4,5,6);
// console.log(sum)

//Rest parameter syntax
// function funName(...value:type[]) : ReturnType {


// }



// function findLength(...values:number[]) : number {
   
//   return values.length;
   
// }

// console.log(findLength(1,2,3))


const array1 : number[] = [1,2,3,4,5];
const array2 : number[] = [1,2,3,4,5];


array1.push(...array2)

for (let i =0;i<array2.length;i++) {

   
    array1.push(array2[i])


}

console.log(array1)











  























