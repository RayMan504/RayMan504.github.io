////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2) {
  //takes two numbers and returns an array of all number between two input numbers
  //create ranger array
  var array = [];
  //if first number is larger than second number
  if(num1 > num2) {
    //loop backwards
    for(let i = num1; i >= num2; i--) {
      // push numbers into array
      array.push(i);
    }
  } else if(num1 < num2) {
    //loop forward
    for(let i = num1; i <= num2; i++) {
      //push numbers into array
      array.push(i);
    }
  } else {
    return array;
  }
  //return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //takes a range of numbers and adds them. returns sum
  //create sum
  var sum  = 0;
  //only add if there are elements in array
  if(array.length > 0) {
    //loop array
    for(let i = 0; i < array.length; i++) {
      //reassign sum to add each number
      sum += array[i];
    }
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //takes array and returns new array of elements in reverse order
  //create new array
  var reversed = [];
  //only loop if array has a length
  if(array.length > 0) {
    //loop input array backwards
    for(let i = array.length - 1; i > -1; i--) {
      //push to new array
      reversed.push(array[i]);
    }
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //create temporary storage array
  var temp = [];
  //loop input array backwards
  for(let i = array.length -1; i > -1; i--) {
    //push to temporary array
    temp.push(array[i]);
  }
  //loop temporary array forwards
  for(let i = 0; i < temp.length; i++) {
    //reassign values in original array to values in reverse temp array
      array[i] = temp[i];
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
