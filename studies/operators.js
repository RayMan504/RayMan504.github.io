/* OPERATORS
* Operators act on our data and are classed by how many operands are required and
* by what they do.
* Unary Operators work with one value, Binary Operators with two, and Ternary operators with three
*/
/* COMPARISON OPERATORS
* Compare two values and evaluate with to a Booleam
* const comparisonOperators = ['<', '>', '<=', ">=", '/'];
*/
console.log(5 > 4) // true
console.log(47 < 30) // false

// Strict Comparison. takes into account value and type 
const strictComparison = ['===', '!=='];
console.log(1 === 1); //true
console.log('chosen' !== 'chosen'); //false

/* Unary Operators
* work with one value
*/
const unaryOperators = ['-', '+', '!'] //the bang operator (!) flips the truthiness of a value

/* LOGICAL OPERATORS
* With the && operator, BOTH values being compared must be true
* With the || operator, Only one of many values should be true
* The ! operator flips the truthiness of a value
*/
const logicalOperators = ['&&', "||", "!"];
console.log(3 > 1 && 2 < 5); //prints true
console.log(1 + 1 < 3 || 4 > 2); //prints true
console.log(!true); //prints false

// Double bang coerces a value to a boolean.Falsey values will be false. Evry other value will be true;
console.log(!!undefined) //prints false
console.log(!!"websites") // true

/*ARITHMETIC OPERATORS
* Evaluates numeric values into math expressions
*/
const arithmetciOperators = ['+', "-", "*", "/", "%", "++", "--", '+=', '-=', '/=', '*='];
console.log(2 + 2); //print 4
console.log(3 - 2); //print 1
console.log(2 * 2); //print 4
console.log(9 / 3); //print 3
//The modulo (%) returns remainder of division operation
console.log(4 % 3) //prints 1

var a = 1;
console.log(a++) // a = a + 1 -> prints 2
console.log(a--) // a = a - 1 -> prints 0
console.log(a *= 9) //a = a * 9 -> prints 9

// The unary (-) flips the positive or negative value of a number
console.log(-a) //prints -1;

//Ternary Operators works with three values. is often used as a shorthand for if statements
// condition ? trueExpression : falseExpression
console.log(2 + 2 === 4 ? "boo" : "nay") //prints "boo"