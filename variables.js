let names = 'Oscar';
console.log(names);
// We can use the snake or camel notation but we cannot use hyphens
let firstName = 'Oscar';
let last_Name = 'Muwanguzi';
console.log(firstName + ' is my first name.');
console.log(last_Name + ' is my last name.');

var a; // Declaration
var b = 2; // Declaration and inisialisation/assigning value
a = 5; // Assigning value
var c = "I am ";
console.log(a + b); // Using the variables

// console.log allows us to print output to the console for debugging or informational purposes.
a = a + 1; // Re-assigning value
b = b + 1; // Re-assigning value
c = c + "learning JavaScript."; // Re-assigning value

// Variable names and functions are case-sensitive


/* Difference Between var and let Keywords
- Let does not let you declare variables twice
- Var is declared globally or locally if inside a function
- But let on the other hand is limited by the block statement it was declared
- const makes sentences read only. And the most common way of remembering is by using all caps for the const variable.
- Though you cannot change a variable with const, we can reassign an array.
- Objects and arrays are not protectes from mutation by const, but there is an object.freeze that can prevent mutation.
*/