/* DATATYPES
* There are two types of datatypes: SIMPLE/PRIMITIVE AND COMPLEX
*
* Simple datatypes are atomic and immutable. This means Other values
* CANNOT be held, collected, no aggregated. The original value CANNOT be altered. 
*
* Simple Datatypes are COPIED BY VALUE. This means that when a variable stores a 
* simple datatype in memory, that value can be copied and stored elsewhere in memory. 
* HOWEVER, if the value that was copied gets altered, the orignal value that was copied 
* remains the same
*/
// List of simple datatyes
const simpleDatatypes = ['string', 6, true, NaN, undefined, null];

// exampleof storing simple datatype in memory
var nickName = "Ray";

// simple datatypes are copy by value
var numberOne = 3;
var numberTwo = numberOne;
console.log(numberTwo) // prints 3 since we copied the simple data type stored in numberOne 
console.log(numberTwo + 7) // prints 10 since we altered the value that was copied from numberOne
/* The console.log below prints 3. the original value that was copied is not altered. this value exists separately in memory from 
*  the copied value stored in numberTwo
*/
console.log(numberOne);

/* COMPLEX DATATYPES
* Unlike simple datatypes, complex datatypes CAN aggregate, hold, and collect
* other values. This is because they have an indefinite size. The original value CAN be altered.
* 
* Complex datatypes are COPY BY REFERENCE. When assigned or passed, you are always refencing
* the SAME complex datatype. As a result, this reference CAN be changed
*/
// list of complex datatypes
const complexDatatypes = [[], {}, function() {}];

// examples of storing a complex dataype in memory
var numbers = [2, 3, 4, 5];
var user = {
    "fullName": "Uraeus Millet",
    "age": 23,
    "hobbies": ["anime", "javascript", "football"],
};

// Arrays and objects do not have a fixed size
numbers.push(6, 7);
console.log(numbers); //prints [2, 3, 4, 5, 6, 7]

user.email = "uraeusmillet@gmail.com";
// code below prints { "fullname": "Uraeus Millet", "age": 23, "hobbies": ["anime", "javascript", "football"], "email": "uraeusmillet@gmail.com"}
console.log(user);

var a = {"item": "Cheese", 'price': '$10' };
var b = a;
console.log(b) //prints reference of object provided by a. {"item": "Cheese", 'price': '$10'};

b.item = "Jelly";
console.log(b); //prints {"item": "Jelly", 'price': '$10'}.
console.log(a); //prints {"item": "Jelly", 'price': '$10'}. changing values effects all references of object. SAME OBJECT IS BEING REFERENCED





/* PROPERTIES AND METHODS OF COMPLEX DATATYPES
* Properties are values stored as key value pairs of Object returned from 
* constructor function
*
* Methods are functions in Object returned by constructor function
*/

// list of array methiods
const arrayMethods = [".push()", ".pop()", ".concat()", ".unshift()", ".shift()", ".map()"];

// The push method is an impure method that adds values to the end of the original array
var array = ['do', 'you', 'know', 'da'];
array.push('way');
console.log(array) // ['do', 'you', 'know', 'da', 'way']

//.pop() removes element from the end of an array. returns value that was removed
console.log(array.pop()); //prints 'way'
console.log(array.pop()); //prints 'da'

//.concat() returns a new array of merged arrays
const secondArray = ['oh', 'yes', 'i', 'do'];
console.log(array.concat(secondArray)); //prints ['do', 'you', 'know', 'oh', 'yes', 'i', 'do'];


/* Methods of Simple Datatypes
* All string methods are pure and return a new string
*/ 

const stringMethods = ['.toUpperCase()', '.toLowerCase()', '.charAt()', '.split()'];
//.split('') returns an array of substrings. split takes a seperator string that determines where each split occurs
const string =' How do you do?';
console.log(string.split(' ')); //prints ['how', 'do', 'you', 'do?']; //string got split into array of subrtsings separated by space

//.toUpperCase() returns a new string with calling string value capitalized
const lowerCase = 'i am uppercase';
console.log(lowerCase.toUpperCase()) //prints 'I AM UPPERCASE'

//.charAt() returns a specified character (utf-16 code unit) at input index as a new string. returns empty string if index is out of range
const character = 'Ichigo';
console.log(character.charAt(1)) //prints 'c';
console.log(character.charAt(15)) //prints '';

const numberMethods = ['.toString()', '.parseInt()', '.isNaN()'];
//.toString() returns a number as a new string literal
const num = 3;
console.log(num.toString()); //prints '3'

