
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  /* wrtie a loop that prints the hashtag (#) character any number of times to 
  * form a triangle
  */
  //loop starting from 1 to input number
  var array = [];
  var triangleString = '';
  for(let i = 1; i <= number; i++) {
    //print the hashtag the same number of times as current index in loop
    //create empty string
    // reassign string to incremented # string
    triangleString += "#"
    array.push(triangleString);
    // console.log(triangleString);
    // console.log('#');
  }
  // console.log(array);
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  /* print all numbers from 0 to 100
  * all numbers divisible by 3 AND 5 print "Fizzbuzz"
  * all numbers divisible by 3 print "Fizz"
  * all numbers divisible by 5 print "Buzz"
  */
  var results = [];
  // loop numbers from 0 to 100
  for(let i = 1; i <= 15; i++) {
    // if a number is divisibel by 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      // print fizzbuzz
      console.log("fizzbuzz")
      // results.push("fizzbuzz")
    // else if a number is divisible by 3
    } else if(i % 3 === 0) {
      // print Fizz
      console.log("fizz");
      // results.push("fizz");
    // else if a number is divisible by 5 
    } else if(i % 5 === 0) {
      // print Buzz
      console.log("buzz")
      // results.push("buzz");
    // else   
    } else {
      // print the number
      console.log(i);
      // results.push(i);
    }  
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
