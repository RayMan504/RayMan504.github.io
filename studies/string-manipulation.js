// STRING MANIPULATION
/* Like arrays, strings can have their values be accessed using bracket notation, iterated 
* with for loops, and have a plethora of built in methods 
*/
var string = "hello";
console.log(string[0]) //prints 'h';
console.log(string[string.length -1]) //prints 'o'
//reassigning elements in a string
string[1] = 'a';
string[2] = 'v';
console.log(string); //prints havlo

for(let i = 0; i < string.length; i++) {
    console.log(string[i]) //prints "h" "a" "v" "l" "o" during loop
}

// Methods of a String
string.slice() // returns a new copied version of string starting at input index
string.toUpperCase() // capitalizes all elements in a string
string.toLowerCase() //makes all elements in a string lower case
string.split() //returns an array of all elements in a string

// String concatenation with + symbol
console.log(string + '!') //prints 'havlo!'

/* String interpolation
* Using backticks enables strings to be concatenated by the variables they are stored
* or assigned to.
* We place the variable name inside curly braces after a $ symbol
*/
const sentence = `This is a ${string} sentence`;
console.log(sentence); //prints 'This is a havlo sentence'
