console.log("Hello World !");

//assign DOM element to a variable

const h1 = document.querySelector("h1");
const allH1 = document.querySelectorAll("h1");
const h1ByClassTitle = document.querySelector(".title");
const h1ByIdLogo = document.querySelector("#Logo");

// const h1ByIdLogo = document.getElementById ("logo");
// const h1ByClassTitle = document. get ElementsByClassName("title")[0];

console.dir(h1);
console.log(h1.innerText);
// reassign the innerText of the h1 element
h1.innerText = "Your website has been hacked!";
console.log(h1.innerText);

console.dir(h1ByClassTitle);
h1ByClassTitle.style.backgroundColor = "red";
h1ByClassTitle.style.color = "White";
h1ByClassTitle.style.padding = "10px";
h1ByClassTitle.style.backgroundColor = "Orange";
