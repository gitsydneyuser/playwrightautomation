
// To read/write files in TypeScript, you can use the 'fs' module from Node.js.
///Users/saship/Desktop/type/Practice/src/demo.txt

import * as fs from 'fs';


//const content = fs.readFileSync('demo.txt', 'utf-8'); // Read the file as base64 encoded string
// console.log(content);

// const lines = content.split('\n'); 
// for (let i = 0; i < lines.length; i++) {
//     console.log(lines[i]);
// }


// if (fs.existsSync('demo1.txt')) {
//     console.log('File exists');
// }else {
//     console.log('File does not exist');
// }

//this method is used to delete a file

//fs.unlinkSync('demo.txt'); // Delete the file if it exists



//renaming a file from dold name to new name
//fs.renameSync('example.txt', 'demo1.txt'); // Rename the file

// creating a directory

//fs.mkdirSync('TYPESCIPT'); // Create a new directory

// fs.readdirSync('TYPESCIPT').forEach(file => {
//     console.log(file); 
// })

// const value = fs.readdirSync('TYPESCIPT')

// console.log(value); 

//fs.rmdirSync('TYPESCIPT', { recursive: true }); 

// fs.writeFileSync('demo4444.txt', 'I number is 10'); // Write to a file, overwriting if it exists

// fs.writeFileSync('demo4444.txt', 'I number is 200'); 

// fs.appendFileSync('demo4444.txt', '\nI number is 300'); // Append to a file




// const content = fs.readFileSync('sample.json', 'utf-8');
// const jsonData = JSON.parse(content); 
// console.log(jsonData.contactNMame); 

const jsonData = {
    name: "John",
    age: 30
}

fs.writeFileSync('sample.json',JSON.stringify(jsonData)); 













