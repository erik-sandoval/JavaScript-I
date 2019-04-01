// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

//ES6 #1
let myFunction = () => `Function was invoked!`;

console.log(myFunction());


//ES6 #2
let anotherFunction = param => param;

console.log(anotherFunction("Example"));


//ES6 #3
let add = (param1, param2) => param1 + param2;

console.log(add(1, 2));


//ES6 #4
let subtract = (param1, param2) => param1 - param2;

console.log(subtract(1, 2));

// Stretch

exampleArray = [1, 2, 3, 4];

const triple = exampleArray.map(num => {
    return num * 3;
});

console.log(triple);