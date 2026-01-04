// Concatenating strings with the + operator
var part1 = "Hello, ";
var part2 = "world!";
var message = part1 + part2;   

//Or 
var message2 = "Hello, " + "world!";

console.log(message);

// Concatinating strings with the += operator
var greeting = "Hello, ";
greeting += "world!";
console.log(greeting);

// We can concstinate strings and variables
var name = "Alice";
var personalizedGreeting = "Hello, " + name + "!";
console.log(personalizedGreeting);

// Finding the length of a string
var str = "JavaScript";
var length = str.length;
console.log("Length of '" + str + "' is: " + length);

// Accessing characters in a string
var firstChar = str[0]; // 'J'
var lastChar = str[str.length - 1]; // 't'
console.log("First character: " + firstChar);
console.log("Last character: " + lastChar);