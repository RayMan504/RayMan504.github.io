/* FUNCTIONS
* In javascript, functions are resuable blocks of code that take inputs,
* process the taken in inputs, and returna  new data value.
*
* A function is created and declared with the function keyword, a function name, parenthesis,
* and a code block. 
*/
function add(inputOne, inputTwo) {
    // run some code that will process inputs and return a new value
}

/* Inside the parenthesis of a function declaration are parameters. 
* These parameters will determine how many inputs a function will accept. 
* A parameter's value will not be known until the function is called. 
*/
// parameters are named based on the type of data a function's input represents.
function add(numberOne, numberTwo) { // the input of the add function will be two numbers
    // add two input numbers together and return new sum
    return numberOne + numberTwo;
}
/* Function calls make a function run code.
* Functions are called by using parenthesis after the function name.
* Inside the parenthesis are arguments -> values used by the function
* Both arguments and new value returned by function call can be sotred in variables
*/
console.log(add(3, 4)) //prints 7

// By default, functions will return undefined if no other values are explicitly returned
function doSomething(string) {
    string.split("");
};

console.log(doSomething("veggies")) // prints undefined. doSomething function has no return statement in its body

/* ANONYMOUS FUNCTIONS
* anonymous functions have no name and are mostly passed into other functions
* as paramaters.
*/
function passTest(value, test) {
    console.log(test(value)); //prints a boolean value based on whether a value is true or false when called with anonymous function
}

console.log(passTest(5, function(num) { return num > 4})); //prints true

/* FUNCTION EXPRESSIONS
* function expressions are anonymous functions assigned to a variable or constant
*/

const subtract = function (num1, num2) {
    return num1 - num2;
}

console.log(subtract(17, 5)) //prints 12

// functions do not have to have paraemters to run code.
// functions also do not have to have return statements, but when functions with no return statements get called, they result to undefined
function printSomething() {
    console.log('Boo') //prints Boo
}
console.log(printSomething()); // prints undefined



/* SCOPE
* Scope refers to what variables or constants are aceessible where. 
* Global scope refers to any variables and constants outside of a funnctions scope
* Local scope refers to varaiables and constants inside the body of a Function
* The function body protects a function's variables from the global scope and
* other parent scopes. 
* Functions can access variables in parent scopes, but parent scopes cannot access
* variables in child scopes. 
*/
// GLOBAL SCOPE
var greeting = "Hello World!";

function doSomething() {
    // LOCAL SCOPE
    console.log(greeting) //prints "Hello World" child local scope has access to variables in parent global scope
    var a = 3;
    return greeting.toUpperCase(); 
}
//console.log(a) -> reference error: parent global scope cannot access variables defined in child local scope of doSomething function

/* NESTED SCOPES
* nested scopes occur when a function is defined withing another function's body
*/

function lowerCase() {
    // PARENT LOCAL SCOPE
    let result = greeting.toLowerCase();
    function upperCase(greeting) { //upperCase can access result variable in lowerCase parent scope
        // CHILD LOCAL SCOPE
        var number = 4;
        result = greeting.toUpperCase();
    }
    upperCase(greeting);
    console.log(result); //prints 'HELLO WORLD';
    //console.log(number); -> reference error. lowerCase parent scope cannot access number variable in upperCase child scope
}
lowerCase();

/* HOISTING
* an entire function declaration gets hoisted to the top most scope. 
* function is assigned a value at all times.
* function expressions are not hoisted
*/

/* CLOSURES
* Maintaining access to values by enclosing them in function bodies.
* A closure can only be created when a child function references a variable
* in parent scope. 
* The variable can be accessed even after parent function has closed
*/

function closureMaker() {
    var outerVariable = 6;
    return function () {
        return outerVariable * outerVariable; //outervariable is maintained access by return statement in child function body
    }
}

var closure = closureMaker();
console.log(closure()) // prints 36