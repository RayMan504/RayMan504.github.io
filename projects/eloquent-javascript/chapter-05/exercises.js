// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  return arrays.reduce((memo, array) => {
    memo = memo.concat(array);
    return memo;
  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//takes value, test function, update function, body function
function loop(value, test, update, body) {
  //use while loop to update values that pass test
  while(test(value)) {
    //get current value
    body(value);
    //update value
    value = update(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // var result;
  return array.reduce((bool, val) => {
    if(!test(val)) {
      bool = false;
    }
    return bool;
  }, true)
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//add helper function that identifies what script text is using by looping characters
function characterScript(code) {
  console.log('hey')
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
//add helper that counts characters in each script
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


function dominantDirection(text) {
  console.log(text, 'chuhj')
  //store result of countBy and filter countBy array by direction
  let scripts = countBy(text, char => {
    //reassign script to result of characterScript call.
    let script = characterScript(char.codePointAt(0));
    //return script objects with direction prop or assign none to scripts with no direction prop
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");
  //use reduce to iterate scripst array and return script that has most direction count
  return scripts.reduce((start, script) => {
    if(script.count > start.count) {
      start = script;
    }
    return start;
  }, {count: 0}).name;
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
