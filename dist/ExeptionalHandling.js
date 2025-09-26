"use strict";
// /// Exeptional Handling
// //. try {
// //   catch (error) {
// //   }
// //   finally{
// //   }
// //}
// // try {
// // throw new Error("This is an error message");
// // }catch(error){
// //     console.log("An error occurred:");
// // }
// // function x (): void {
// //    try {
// //   throw new Error("This is an error message");
// //   }catch(error) {
// //   }
// // }
// // x(); 
// // button Name = submit(locator)
// // let page : Page
// // function clickOnButotn(page) {
// //     try {
// //     page.click("button[name='submit']");
// //     } catch (error) {
// //         console.log("An error occurred while clicking the button:", error);
// //         page.screenshot({ path: "error_screenshot.png" });
// //        } 
// // }
// // let page1: Page; // Assume this is initialized elsewhere
// // clickOnButotn(page1)
// // function check(a: number) : void {
// //     try {
// //         if (a < 0) {
// //              console.log("Value of a is less than 0");
// //         } else if (a > 0) {
// //              console.log("Value of a is grather than 0");
// //         }
// //     } catch (error) {
// //         console.error("An error occurred:", error);
// //     }
// // }
// // check(0)
// try {
//     browser.open("https://example.com");
//     let a: number = 10;
//     let b: number = 0;
//     let result: number;
//     result = a + b; 
//     console.log("Result:", result);
// }catch(error :any) {
//     console.log("An error occurred:", error.message);
// }finally {
//     try {
//     browser.close();
//     }catch (error) {
//         console.log("An error occurred while closing the browser:", error.message);
//     }finally {
//         console.log("Execution completed.");
//     }
// }
