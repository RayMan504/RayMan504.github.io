// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-rayman504');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    //implement filter and length array property to return number of male customers
    return _.filter(array, (value) => value.gender === 'male').length;
};

var femaleCount = function(array) {
    //implememt reduce to return number of female customers
    return _.reduce(array, (tally, value) => {
        //if gender property is female
        if(value.gender === "female") {
            //increment tally by 1
            tally += 1
        }
        //return tally total
        return tally;
    }, 0);
};

var oldestCustomer = function(array) {
    //implement reduce to find highest numbered age amongst customers
    var eldest = _.reduce(array, (oldest, value) => {
        //assign seed to 0 by default. if current age is bigger than seed
        if(value.age > oldest) {
            //reasign seed to current highest numbered age
            oldest = value.age;
        }
        //return highest numbered age when loop ends
        return oldest;
    }, 0);
    //return name of oldest customer implementing reduce
    return _.reduce(array, (name, value) => {
        //if current age matches the highest number age stored in variable
        if(value.age === eldest) {
            //assgin name to customers name
            name = value.name;
        }
        //return oldest customer name
        return name;
    }, '')
};

var youngestCustomer = function(array) {
    var youngest = _.reduce(array, (young, value) => {
        young = value.age;
        if(young < value.age) {
            return young;
        }
    }, 0)
    return _.reduce(array, (name, value) => {
        if(value.age === youngest) {
            name = value.name;
        }
        return name;
    }, '')
};

var averageBalance = function(array) {
    var sumBalance = _.reduce(array, (start, value) => {
        start += parseFloat(value.balance.slice(1).replace(/,/g, ''));
        return start;
    }, 0);
    console.log(sumBalance, 'sumbalance');
    console.log((sumBalance / array.length), 'average');
    return (sumBalance / array.length);
    
    
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
