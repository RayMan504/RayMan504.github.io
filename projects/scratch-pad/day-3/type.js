// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArray to check if value is array
    return Array.isArray(value) ? true : false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if value is an array, null, Date, number, string
    if(Array.isArray(value) || typeof value === 'number' || typeof value === 'string' || value instanceof Date || typeof value === 'boolean' || value === null) {
        // console.log(typeof value === 'number', 'hit');
        return false;
    } else {
        // return false
        return true;
    } 
        // return false;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // if value is array or collection object -> try and reuse isObject
    if(Array.isArray(value) || isObject(value)) {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // check if value is a collection -> reuse isCollection
    if(typeof value === 'function') {
        return 'function'
    } else if(Array.isArray(value)) {
        // return 'array'
        return 'array';
    // else
    // else if typeof string
    } else if(typeof value === 'string') {
        // return string
        return 'string';
    // else if typeof number
    } else if(typeof value === 'number') {
        // return number
        return 'number'
    // else if typeof boolean
    } else if(typeof value === 'boolean') {
        // return boolean
        return 'boolean';
    // else if typeof function
    } else if(value instanceof Date) {
        // return function
        return 'date'
    // else if typeof undefined
    } else if(typeof value === 'undefined') {
        // return undefined
        return 'undefined';
    // else if null
    } else if(value === null) {
        // return null
        return 'null';
    // else 
    } else {
        // return Date
        return 'object';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
