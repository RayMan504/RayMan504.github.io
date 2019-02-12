// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object
    return {
        id,
        nameFirst,
        nameLast
    }

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //  make contacts an array
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // create addContact api. takes a contact 
        addContact: function(contact) {
            // add contact to contacts array
            contacts.push(contact);
        },
        // create findContact api. takes fullname as parameter
        findContact: function(fullName) {
            // loop through contacts array with reduce. reduce takes callback
            return contacts.reduce((accum, contact) => {
                // if fullName does not match fullname in contacts list
                if(`${contact.nameFirst} ${contact.nameLast}` === fullName) {
                     accum = contact;
                     return accum
                } 
                // return undefined
                return accum;
            }, undefined)
        },
        // create removeContact api. takes contact object
        removeContact: function(contact) {
            // loop over contact
            console.log(contacts.length, 'array')
            // check if contact exists n contacts array
            if(contacts.indexOf(contact) > -1) {
                // remove if true
                contacts.splice(contacts.indexOf(contact), 1);
            }
        },
        // create print all names function
        printAllContactNames: function () {
            // loop contacts using reduce. reduce takes callback. callback takes seed and contact
            var result = contacts.reduce((accum, contact) => {
                // return first and last names separated by new line block
                // reassign seed to contact fullname
                // append new line block to end of fullname
                accum += `${contact.nameFirst} ${contact.nameLast}\n`;  
                return accum;
            }, '')
            console.log(result, 'hey');
            return result.substring(0, result.length -1);
            // // create output string
            // var output = ''
            // // loop conatcts array
            // for (let i = 0; i < contacts.length; i++) {
            //     // reassign output to 
            //     output += `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`
            // }
            // // return output.substring();
            // return output.substring(0, output.length -1);
        }
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
