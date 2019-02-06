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

var a = {"item": "Cheese"};
var b = a;
console.log(b) //prints reference of object provided by a. {"item": "Cheese"};

b.item = "Jelly";
console.log(b); //prints {"item": "Jelly"}.
console.log(a); //prints {"item": "Jelly"}. changing values effects all reference of object. SAME OBJECT IS BEING REFERENCED

/* PROPERTIES AND METHODS OF COMPLEX DATATYPES
* Properties are values stored as key value pairs of Object returned from 
* constructor function
*
* Methods are functions in Object returned by constructor function
*/

// list of array methiods
const arrayMethods = [".push()", ".pop()", ".concat()", ".unshift()", ".shift()", ".map()"];