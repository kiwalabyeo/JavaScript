/* Addition and subtractioj is pretty straightforward */
var sum = 5 + 3; // addition
var difference = 10 - 4; // subtraction

/* Multiplication and division */
var product = 6 * 7; // multiplication
var quotient = 20 / 5; // division

sum + 1; // incrementing sum by 1
sum++; // another way to increment sum by 1

difference - 1; // decrementing difference by 1
difference--; // another way to decrement difference by 1  
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// Decimal numbers
var decimalSum = 5.5 + 2.3; // addition with decimals

// remainder operator
var remainder = 10 % 3; // remainder of 10 divided by 3
console.log("Decimal Sum: " + decimalSum);
console.log("Remainder: " + remainder);

// other additional operators
sum += 2; // equivalent to sum = sum + 2
difference -= 2; // equivalent to difference = difference - 2
product *= 2; // equivalent to product = product * 2
quotient /= 2; // equivalent to quotient = quotient / 2

// Declaring string variables
var greeting = "Hello, ";
var name = "Alice";
var fullGreeting = greeting + name; // concatenation
console.log(fullGreeting);

// inserting double quotes inside a string
var quote = 'He said, "JavaScript is awesome!"';
console.log(quote);

// Or we can use escape characters
var escapedQuote = "He said, \"JavaScript is awesome!\"";
console.log(escapedQuote);  // But this is less preferred

/* Other types of code you can escape out:
1. Newline: \n
2. Tab: \t
3. Backslash: \\
4. Single quote: \'
5. Double quote: \"
6. Carriage return: \r
7. Form feed: \f
8. Vertical tab: \v
9. tab: \t
10. Backspace: \b
*/
// examples of escape characters above
var newLineExample = "Hello,\nWorld!";
console.log(newLineExample);