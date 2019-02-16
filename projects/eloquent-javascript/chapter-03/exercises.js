////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(numberOne, numberTwo) {
  //takes two numbers and returns minimum number within their range. handle negative numbers
  //if first number is smaller than second number
  if(numberOne < numberTwo) {
    return numberOne;
  }
  //if first number is bigger than second number
  if(numberOne > numberTwo) {
    return numberTwo;
  }
  // if both numbers are the same
  if(numberOne === numberTwo) {
    return numberOne;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  //recursion -> when a function calls itself
  //base case: conditional statement that tells function to stop calling itself
  // if number is zero 
  if(number === 0) {
    //return  true
    return true;
  }
  //if a number is one
  if(number === 1) {
    //return false 
    return false;
  }
  //if the input number is negative
  if(number < 0) {
    //reassign negative number to inverse
    number = -number;
    // return a recursive function call where the parameter is positive number
    console.log(number, 'positive number');
    return isEven(number);
  }
  // return a recursive function call where the parameter is positive number decremented by two
  return isEven(number - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, character) {
  //takes a string and a character and returns amount of times input character occurs in string
  //store count
  var count = 0;
  //loop over string
  for(let i = 0; i < string.length; i++) {
    //check if element in string matches character.
    if(string[i] === character) {
      //increase count if there is a match
      count += 1;
    }
  }
  //return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //takes a string and returns how many times a character appears in that string
  /*
    //store count 
    var count = 0;
    //loop over string
    for(let i = 0; i < string.length; i++) {
      //if character in string is a capital B
      if(string[i] === 'B') {
        //increase count
        count += 1;
      }
    }
    //return count
    return count;
  */
  //rewrite countBs to make use of countChars
  return countChars(string, 'B');
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
