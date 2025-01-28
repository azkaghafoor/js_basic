// let marks = [97, 82, 75, 62, 36];
// console.log(marks);
// console.log(marks.length); 

// let heroes = ["ironman", "thor", "hulk", "batman", "spiderman", "antman"];
// For Loop
// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }

// For Of Loop
// for (let hero of heroes) {
//     console.log(hero);
// }

// Cities Arrays
// let cities = ["Islamabad", "Karachi", "Faislabad", "Murree", "Sahiwal"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// PARACTICE QUESTIONS;
// marks = [97, 82, 75, 62, 36, 60];
// let sum = 0;
// for (let val of marks) {
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


//SECOND QUESTION
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// Push And Pop Methods
// Push
// let foodItems = ["potato", "apple", "mango", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

// Pop
// let foodItems = ["potato", "apple", "mango", "tomato"];
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);

// ToString Method
// let foodItems = ["potato", "apple", "mango", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());

// Concat Method
// let marvelHeroes = ["spiderman", "thor", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// Unshift Method
// let marvelHeroes = ["spiderman", "thor", "ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted", val);

// Slice Method
// let marvelHeroes = ["spiderman", "thor", "ironman", "antman", "batman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));

// Splice Method
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr);