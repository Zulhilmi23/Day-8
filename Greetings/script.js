// IMPORTANT: Assigment of element to variables must be done initially

const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

// event in JS
// onsubmit, onclick, onmouseover, onmouseout, onkeydown, onkeyup, on keypress
// when user fill the input -> oninput, onchange
nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

//------------------------------------------------------------------//

// intro to function

// 1. function declaration
function greet(name) {
  // function scope
  console.log("Hello World");
}

// 2. function invocation/call
greet();
greet();
greet();
greet();
greet();

// 3. function declaration with parameter
function greetWithName(name) {
  console.log("Hello " + name);
}

// 4. function invocation with argument
greetWithName("Ahmad");
greetWithName("Abu");

// 5. function declaration with multiple parameters
function greetWithNameAndAge(name, age) {
  console.log("Hello " + name + ", you are " + age + " years old");
}

// 6. function invocation with multiple arguments
greetWithNameAndAge("John", 25);
greetWithNameAndAge("Abu", 33);

// 7. function declaration with return value
function add(a, b) {
  return a + b;
}

// 8. function invocation with rturn value
const result = add(10, 20);
console.log(result);
