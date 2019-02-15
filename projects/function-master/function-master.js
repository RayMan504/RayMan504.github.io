//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    /* should return all values from an object in an array
    */ 
    //create array 
    var array = [];
    //loop object
    for(var key in object) {
        //push elements in object to array
        array.push(object[key]);
    }
    //return array
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    /* should return a string of all keys
    * in the object separated by a space
    */
    // one liner solution -> return Object.keys(object).join(" ");
    return Object.keys(object).join(" ");
    // //create string of keys
    // var keys = '';
    // // loop object
    // for(var key in object) {
    //     //add keys and space to keys string
    //     keys += `${key} `;
    // }
    // // console.log(keys);
    // return keys;
    

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //return all values in object as a string separated with space
    //create string
    var keyValues = [];
    var array = Object.keys(object);
    //loop array of keys
    for(var i = 0; i < array.length; i++) {
        //check if values are a string 
        if(typeof object[array[i]] === 'string') {
            // add values separated with space
            keyValues.push(object[array[i]]);
        }
    }
    //return string
    // console.log(keyValues.join(" "))
    return keyValues.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //take one argument and return 'array' if array or 'object'
    if(Array.isArray(collection)) {
        return 'array'
    }
    return 'object';
    //one liner solution -> return Array.isArray(collection) ? 'array' : 'object'
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //takes a one word string, and returns first letter capitalized
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //captilize first letter of all words in a string
    // create new array
    var newArray = []
    //turn single input string into array
    var array = string.split(" ");
    // loop array
    for(var i = 0; i < array.length; i++) {
        //concat output string with first letter of each word capitalized
        newArray.push(`${array[i][0].toUpperCase()}${array[i].slice(1)}`);
    }
    // console.log(newString);
    return newArray.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 //takes an object with a name property 
 return `Welcome ${capitalizeWord(object.name)}!`
 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //access name and species properties 
    //use concatenation to return string message using name and species properties
    //call capitalizeWord function for capitalization of species and name
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //check if object has no noises property
    if(!object.hasOwnProperty('noises')) {
        // there are no noise
        return 'there are no noises';
    // else if check if array has noises
    } else if (object.noises.length === 0) {
        // there are no noises
        return 'there are no noises';
    } else {
        // join array into string
        return object.noises.join(" ");
    }
    // else 
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //use string method to check if a word is in a string
    return string.includes(word) ? true : false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push name to friends array in object
    object.friends.push((name));
    //return object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //check if name is in friends array in object
    if(object.hasOwnProperty('friends')) {
        return object.friends.indexOf(name) === -1 ? false : true;
        
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create nonFriends array
    var output = [];
    //loop array
    for(let i = 0; i < array.length; i++) {
        //make sure input name isnt added to output array
        if(name !== array[i].name) {
            if(!isFriend(name, array[i])) {
                output.push(array[i].name);
            }
        }
    }
        //isFriends call on name and object
    return output;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if(!object.hasOwnProperty(key)) {
        object[key] = value;
    } else {
       for(var prop in object) {
           if(prop === key) {
               object[prop] = value;
           }
       } 
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop array
    for(var i = 0; i < array.length; i++) {
        //check if object has properties in array
        if(object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
    }
            //remove
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //make new array
    var noDuplicates = [];
    //loop inout array
    for(let i = 0; i < array.length; i++) {
        //if values arent in output array
        if(noDuplicates.indexOf(array[i]) === -1) {
            //push to output array
            noDuplicates.push(array[i]);
        }
    }
    //return ouput
    return noDuplicates;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}