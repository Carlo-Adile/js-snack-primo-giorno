/* exercise 1: 
make a variable named number with value 100, then print the value on console  
*/
let number= 100; //number
console.log(number);

/* exercise 2:
make a variable PI along with a numerical value, then print it on console.
*/
const PI = 3.416; //number
console.log(PI);


/* exercise 2/b:
trying to assing a different value to a const variables will result in a failure, PI will always have its assigned value and console will print "uncaught TypeError".
assigning the following value would result in a failure.
PI = "another value";
PI = 13;
*/


/* exercise 2/c:
declare variable radius with value 8, multiply then the radius value for 2 and for PI and assign the results to another variables called circle. */
const radius = 8; //number
const circle = radius * 2 * PI; //number
console.log(circle);

/* exercise 3:
declare a variable with a string value, then change it and print it.
*/
let name = "Carlo";
name = 'Marco';

console.log(name);