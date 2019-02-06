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