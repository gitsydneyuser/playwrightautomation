"use strict";
// To read/write files in TypeScript, you can use the 'fs' module from Node.js.
///Users/saship/Desktop/type/Practice/src/demo.txt
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
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
};
fs.writeFileSync('sample.json', JSON.stringify(jsonData));
