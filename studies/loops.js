/* LOOPS
* Loops allow a programmer to iterate over data and execute blocks of code
* as many times as needed. 
*
* FOR LOOP
* For loops are used to iterate over numbers, strings, and arrays.
* There are 3 components to a for loop:
* 1. starting conditison/initialization -> let i = 0
* 2. stop condition -> i < index/string.length/array.length
* 3. increment/decrement action -> i++/ i--
* Each component is placed in parenthesis separated by a semicolon
*/
// looping over numbers
for(let i = 0; i <= 100; i++) {
    // starting from number 0, the for loop will print all numbers up to 100
    console.log(i);
}

// looping over strings and arrays
const string = "hello";
for(let i = 0; i < string.length; i++) {
    /* since strings and arrays are zero indexed we can print all values starting from index 0 
    * the loop stops once the length of the string/array is reached
    */
    console.log(string[i]);
}

// looping backwards
const array = ['day', 'good'];
for(let i = array.length -1; i > -1; i--) {
    /* we loop backwards by changing our loops initialization to the last element in the array
    * we change our stopping point to where the loop stops after hitting the 0 index
    * we decrement our index value to ensure the loop reaches its stopping point. 
    */
    console.log(array[i]);
}

/* FOR IN LOOPS
* For in loops iterate over objects.
* once iterated, we can print or return all the keys in an object.
*
*
*
*
*
*/
const alpha = {
    "letter": 'a',
    "number": 1,
}
// for every key in alpha object
for(var key in alpha) {
    // print all the keys in alpha object
    console.log(key); // prints 'letter' 'number' while looping
}

/* Similar to for loops, for in loops can access all values in 
* an object by looping through the object's keys
*/
const alpha2 = {
    "letter": 'a',
    "number": 1,
}

for(var key in alpha2) {
    // console.log(alpha.key); -> dot syntax does not work because a literal property call key is being searched for when one does not exist
    console.log(alpha2[key]); // dynamically searches for value stored at key. prints 'a' 1 durng loop
}

/* WHILE LOOPS
* Execute code while a condition is true
* are used when the number of times that is necesarry to loop is unknown
* BE SURE TO BREAK OUT OF LOOP WITHIN BODY
*/
var number = 0
while (number < 10) {
    console.log(number)
    // infinite loop occurs if you do not run code telling loop to stop
    number++;
}