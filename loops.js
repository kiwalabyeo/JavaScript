// While loops

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var evenNumber = []
var n = 0;
while (n < 20) {
    if (n % 2 === 0) {
        evenNumber.push(n);
    }
    n++;
}
console.log(evenNumber)

// For loops
// for (initialisation, condition, final expression)
forArray = [];
for (var m = 0; m < 5; m++){
    forArray.push(m);
}
console.log(`forArray: ${forArray}`);

// Trying even numbers using for loops
var evenForArray = [];
var oddForArray = [];
for (var p = 0; p < 10 ; p++){
    if (p % 2 === 0) {
        evenForArray.push(p);
    }
    else {
        oddForArray.push(p);
    }
}
console.log(`evenForArray: ${evenForArray}`);
console.log(`evenForArray: ${oddForArray}`);

//Adding numbers in an array
var sumn = [12, 3, 2, 9];
var ourTotal = 0;
for (var q = 0; q < sumn.length; q++){
    ourTotal += sumn[q];
}
console.log(`The total of the array is ${ourTotal}`);

// Multiplying numbers in nested array
var nestedArray = [[1, 2], [3, 4], [5, 6]];
var product = 1;
for (var r = 0; r < nestedArray.length; r++) {
    for (var s = 0; s < nestedArray[r].length; s++) {
        product *= nestedArray[r][s];
    }
}
console.log(`The product of the nested array is ${product}`);

// Do...While loops. These loop will always execute at least once even if the condition is false.
var doArray = [];
var t = 10;
do {
    doArray.push(t);
    t++;
} while (t < 5);
console.log(`doArray: ${doArray}`);

//Generating Random Fractions
// We can use the Math.random function

function randomFrac() {
    return Math.random();
}
console.log(randomFrac()); // This returns a random decimal between zero and one and cannot be one.

// Generate a random whole number
var randomWhole = Math.floor(Math.random * 30); // This gives us a random whole number batween zero and 30. The Math.floor function rounds the numeber to a whole number.

function randomWholeNum() {
    return Math.floor(Math.random() * 10); //This will give us a random Whole number between 0 and 10 but not 10
}
console.log(randomWholeNum());
