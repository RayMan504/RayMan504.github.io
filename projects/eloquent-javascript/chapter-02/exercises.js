
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

function drawChessboard(number) {
  /* write a program that creates a string represented by an
  * 8x8 grid. Use newline characters to separate lines. At each position on grid
  * there is either a space or a hashtag (#). characters should form a chessboard
  */
  // create chessboard string
  var chessboard = '';

  //loop over total number of grids to handle rows
  for (var y = 0; y < number; y++) {   
    // loop over total number of grids to handle columns
    for (var x = 0; x < number; x++) {
      //if sum of x and y is even number
      if ((x + y) % 2 == 0) {
        //add space to board
        chessboard += " ";
      } else {
        //add hashtag to board
        chessboard += "#";
      }
    }
    //add newline character
    chessboard += '\n';
  }
  //print string
  console.log(chessboard)

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
