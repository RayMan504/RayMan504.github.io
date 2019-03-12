////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2) {
  //takes two numbers and returns an array of all number between two input numbers
  //create ranger array
  var array = [];
  //if numbers are negative
  if(num1 < 0 || num2 < 0) {
    return [];
  } else
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
  // var reversed = [];
  // //only loop if array has a length
  // if(array.length > 0) {
  //   //loop input array backwards
  //   for(let i = array.length - 1; i > -1; i--) {
  //     //push to new array
  //     reversed.push(array[i]);
  //   }
  // }
  // return reversed;
  //solution with reduce
  return array.reduce((reverse, value) => {
    //place all values at beginning of new array
    reverse.unshift(value);
    //return new array
    return reverse;
  }, [])
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

function arrayToList(array) {
  //transform array list into object list structure
  // create new function that takes input array
  var objList = {}
  //handle value key
  //if array has a length
  if(array.length) {
    //add first element to value key in objList
    objList.value = array[0];
  }
  //handle rest key
  //if array has more than 1 element in it
  if(array.length > 1) {
    // debugger;
    //call function again and assign to rest key
    objList.rest = arrayToList(array.slice(1));
  } else {
    //assign rest to null
    objList.rest = null;
  }
  return objList;
    

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function listToArray(list) {
  // arguments[1] = arguments[1] || [];
  //since list is an array like object. use for loop on input list. 
  //start looping at top of list
  //stop loop at null value at rest key
  if(list.rest === null) {
    return [list.value];
  }
  return [list.value].concat(listToArray(list.rest));
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(num, list) {
  console.log(list, '?')
  var newList = {};
  newList.value = num;
  newList.rest = list;
  console.log(newList, 'new list')
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  if(num === 0) {
    return list.value;
  }
  if(num < 0) {
    return undefined;
  }
  return list.value + nth(list, num -1);
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
