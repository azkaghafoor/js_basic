// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// let div = document.querySelector("div");
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";


// Insert Elements
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new</i>";
document.querySelector("body").prepend(newHeading);
// Node remove
let para = document.querySelector("p");
para.remove();