/* CONTROL FLOW
* Conditonal statements allow a developer to control the flow of their app.
* Conditional statements in javascript allow expressions to be coerced to boolean values.
* Based on these truthy/falsey expressions, we can decide how we want code to execute.
*
*
* IF, ELSE IF, AND ELSE STATEMENTS
* To start conditional statements, you use an if statement
* The if statement consists of test condition in parenthesis and and a code block body that
* executes code when a condition is true.
*/
if(/expression being tested in parenthesis/) {
    // body where code is executed once condiition is true
}

/* If statements can be chained together by any number of else-if statements.
* A default else statement can be appended to the end` of the chain.
*/
const number = 6; 
// if the expression checking if number is less than 7 is true
if (number < 7) {
    // run code that prints '7 ate 9' message to the console.
    console.log('7 ate 9');
// if the first condition evaluates to false, evaluate a second expression checking if number is greater than 7
} else if(number > 7) {
    // run code that prints '6 is not afraid of 7' message if second condtion is true
    console.log('6 is not afraid of 7');
// if all previous conditions are false
} else {
    // print default message to console
    console.log('default message');
}


/* If an if - else if statement contains two true conditional expressions,
* the FIRST conditional statement that evaluates to true runs corresponding code
*/
if(6 > 7) {
    console.log('Boo');
//the first condtion that evaluates to true
} else if('string' === 'string') {
    console.log('lalalala'); // prints 'lalalala' to console
} else if(6 < 7) {
    console.log('7 ate 9');
} else {
    console.log('nada');
}




/*SWITCH STATEMENTS
* Switch statements evaluate an input expression by matching the expression
* with to a case clause. Statements are ran based on association with matched 
* case. 
* A break statement is needed at the end of each case statement to prevent unintentional case blocks
* to run.
*/

const cheese = "Cheddar";
switch (cheese) {
    // if input expression is mozzarella
    case 'mozzarella':
        // print message
        console.log('Pizza');
        break;
    // if input expression is feta
    case 'feta':
        // print message
        console.log('Salad');
        break;
    // if input is cheddar
    case 'cheddar':
        // print burger
        console.log('Burger');
        break;
    // if input expression had no matches
    default:
        // print default message
        console.log('Cut the cheese')
}

/* TRUTHY VS FALSEY
*
* Values that have no value are considered falsey
*/
const falsey = [0, NaN, null, undefined, '', false];