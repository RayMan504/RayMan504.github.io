// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // use for loop to iterate from numbers 1 to 100
    for(let i = 1; i <= 100; i++) {
        // if number is multiple of 3 AND 5
        if(i % 3 === 0 && i % 5 === 0) {
            // print FizzBuzz
            console.log("FizzBuzz");
        // else if number is multiple of 3  
        } else if(i % 3 === 0) {
            // print Fizz
            console.log("Fizz");    
        // else 
        } else if(i % 5 === 0) {
            // print Buzz
            console.log("Buzz");
        } else {
            console.log(i);
        }
        
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}