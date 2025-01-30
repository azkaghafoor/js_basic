// function definition
// function myFunction(){ //parameter --> input
//     console.log("Welcome To Apna College!");
//     console.log("We Are Learning JS:)");
// }
//function call
// myFunction(); //argument

// Simple Example
// function myFunction(msg, n){ 
//     console.log(msg);
// }
// myFunction("I Love JS", 100); 


//Function -> 2 numbers, sum
// function sum(x, y){
//    s = x + y
//    return s;
// }
// let val = sum(3, 4);
// console.log(val);


// function sum(x, y){
//     s = x + y
//     console.log(x);
//     return s;
//  }
//  let val = sum(3, 4);
//  console.log(val);

// ARROWS FUNCTION
//sum function
function sum(a, b) {
    return a + b
};
// Arrow Function
const arrowSum = (a, b)=> {
     console.log(a + b);
};
//multiplication function
function mul(a, b){
    return a * b;
};

const arrowMul = (a, b) => {
    console.log(a * b);
};

const printHello = () =>{
    console.log("Hello");
};

// FOR EACH FUNCTION
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

// let arr = ["Islamabad", "Karachi", "Sahiwal"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

// SOME MORE ARRAY METHOD
// let nums = [67, 52, 39];
// nums.map((val) => {
//     console.log(val);
// });
// returns 
// let nums = [67, 52, 39];
// let newArr = nums.map((val) => {
//    return val * 2;
// });
// console.log(newArr);


// Filter Method
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);


//Reduce Method
// let arr = [1, 2, 3, 4];
// const outPut = arr.reduce ((prev, curr) => {
//  return prev + curr;
// });
// console.log(outPut);

// To print the largest number in an array
let arr = [5, 6, 2, 1, 3];
const outPut = arr.reduce ((prev, curr) => {
 return prev > curr ? prev : curr;
});
console.log(outPut);