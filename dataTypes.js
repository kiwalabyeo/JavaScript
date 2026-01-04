let Name = 'Oscar'; // this is a string literal
let interest = 9.1; // this is a number literal
let isApproved = true; // this is a boolean literal
let firstName = undefined; 
let lastName = null; // this is a reference data type the rest are primitive data types
console.log (typeof Name)
console.log(typeof lastName)

/* Data types in JavaScript:
1. String: A sequence of characters, e.g., "Hello".
2. Number: A numeric value, e.g., 42 or 3.14.
3. Boolean: A logical value, either true or false.
4. Undefined: A variable that has been declared but not assigned a value.
5. Null: A special value indicating no value or no object.
6. Symbol: A unique identifier.
7. BigInt: An integer type for large numbers.
8. Object: A collection of key-value pairs.
9. Array: An ordered list of values.
10. Function: A block of code designed to perform a particular task.
*/

// Variables are containers for storing data values.and can be declared using var, let, or const keywords.
var age = 30; // 'var' is function-scoped
let city = 'New York'; // 'let' is block-scoped
const country = 'USA'; // 'const' is block-scoped and cannot be reassigned and if you try to reassign it, it will throw an error
console.log(age, city, country);

// Note: It's a good practice to use 'let' and 'const' over 'var' to avoid scope-related issues.
// scope-related issues occur when variables are accessed outside their intended context, leading to unexpected behaviors in the code.