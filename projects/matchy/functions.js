/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// search takes animals array, animal object name string
function search(animals, name) {
    // loop through animals array
    for(let i = 0; i < animals.length; i++) {
        console.log(animals[i], 'animal objects')
        // if animal name matches input name
        if(animals[i].name.toLowerCase() === name.toLowerCase()) {
            // return animal
            return animals[i]
        // else 
        }
        // return animals[i].name === name ? animals[i] : null;
    }
    // return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// takes animals array, name, object
function replace(animals, name, animal) {
    //loop over animals
    for(let i = 0; i < animals.length; i++) {
        //check if name matches animal name
        if(animals[i].name === name) {
            animals[i] = animal;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// takes animals array, name
function remove(animals, name) {
    //loop animals
    for(let i = 0; i < animals.length; i++) {
        // if name matches animal name
        if(name === animals[i].name) {
            //remove animal
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//takes animal object and name
function add(animals, animal) {
    //check if animal has a name with length bigger than 0 
    //check if animal has species property bigger than 0
    //check if name exixts in animals array
    if(animal.name.length > 0 && animal.species.length > 0) {
        for(let i = 0; i < animals.length; i++) {
            if(animals[i].name === animal.name) {
                return;
            }
        }
        animals.push(animal);
    }
        
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
