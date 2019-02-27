/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* CONSTANTS
* Variables whose values never change
* Block scoped
* Are not hoisted to the top of the scope
* Constants are created with the const keyword and are assigned a value immediately
*/
// const name; -> constants cannot be left unassigned
const name = "Kendall Jones";


/* LET
* Variables that are blocked scoped and optionally given a value. Onced used in 
* a code block, that variable's scope is limited to that block. 
*/

function blockScope() {
    let a = 1;
    if(true) {
        let a = 2; //prints 2. different variable a tied to conditional statement code block
        console.log(a)
    }
    console.log(a) //prints 1. different variable a tied to function body code block
}

/*HOISTING
* The concept of variables with the var keyword and function declarations being moved 
* to the top of your code through memory during the compile phase of running your code.
*
* With var keyword variables, just the variable name is hoisted. 
* A function's entire definition gets hoisted. 
*/
 if(counselorName === undefined) {
     /* counselorName variable name hoisted to top of scope. A variable with no assigned value is undefined 
     * and will result in the if statement's condidition evaluating to true.
     * counselorName is reassigned to the string 'Gregory'.
     */ 
     var counselorName = "Gregory"; 
 }
console.log(counselorName) //prints Gregory. 

// if(add(2, 3) < 10) {
    /* entire function definition is hoisted to top of scope. function call of add evaluates to
    * 5 which is less than 10. String message prints to the console.
    */
    // function add (numberOne, numberTwo) {
    //     return numberOne + numberTwo;
    // }
    // console.log("Heeeeyy");
// }

//let and const cannot be hoisted. 
if(2 === 2) {
    let result = 'true';
}
console.log(result) // reference error. result is not defined