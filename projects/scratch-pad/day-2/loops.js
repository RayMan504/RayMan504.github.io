// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to iterate array
  for(let i = 0; i < array.length; i++) {
    // print all the values
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //use for loop to iterate array. change starting point and decrement so loop is backwards
  for(let i = array.length -1; i > -1; i--) {
    // print all elements
    console.log(array[i]);
  }

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create array storage
  var array = [];
  // use for in loop to iterate object
  for(var key in object) {
    //push keys into array
    array.push(key);
  }
  return array;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use for in loop to iterate object
  for(var key in object) {
    // print keys
    console.log(key, 'hey keys');
    
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create array 
  const array = [];
  // use for in loop to iterate object
  for(var key in object) {
    // push values into array using bracket notation
    array.push(object[key]);
  }
  return array;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use for in loop to iterate object
  for(var key in object) {
    // print values using bracket notation
    console.log(object[key]);
    
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create array
  var array = [];
  // use for in loop to iterate
  for(var key in object) {
    // push values into array
    array.push(object[key]);
  }
  // return length
  return array.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}
module.exports.getObjectValues = getObjectValues;
/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create array
  var array = [];
  // use for in loop to iterate
  for(var key in object) {
    // push values into array
    array.push(object[key]);
  }
  // loop array. change starting point and decrement to loop backwards
  for(var i = array.length -1; i > -1; i--) {
    // print values in reverse
    console.log(array[i]);
    
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
