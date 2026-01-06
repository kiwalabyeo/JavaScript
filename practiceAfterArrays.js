let names = "Oscar K";
let age = 21;
const isStudent = true;

const sentence = 'My name is ' + names + ' and I am ' + age + 'years old';
console.log(sentence);

//or using template literals
const another = `My name is ${names} and I am ${age} years old`;
console.log(another);

//Array of numbers
let myArray = [1, 2, 3];
let firstNumber = `${myArray[0]} is the first number in (${myArray}) array`;
console.log(firstNumber)