// Function performing a task
function greet() {
    console.log('Good Morning ' + Name + '!')
};
let Name = 'Oscar';
greet();

//Alternatively
function greeting(Names) {
    console.log('Good Morning ' + Names + '!')
};
greeting('Muwanguzi');

//Adding parameters
function greetings(Names, Age) {
    console.log('Good Morning ' + Names + '!' + ' who is ' + Age + " Years")
};
greetings('Kiwalabye', 27);

//Function calculating a value
function square(number) {
    return number * number;
};
let squareReturn = square(2);

console.log(squareReturn);
//A parathesis '()' defines a function call



// Functions are reusable blocks of code
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing values to functions with arguments
function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(1, 2);

// Multiplication function

function multiplicationFunction(a, b) {
   console.log(a * b);
    var multi = a * b;
    multis = multi;
}
multiplicationFunction(2, 3);
// console.log(multi); // This will give an error because 'multi' is not defined in this scope
console.log(multis); // This will work because 'multis' is defined in the global scope


// Global Scope and Functions
// Scope refers to the visibility of variables
var myGlobal = 10;
// if you declare a variable without the 'var' keyword, it becomes global but if declared inside a function, it is local to that function

// Local Scope and Functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
// console.log(myVar); // This will give an error because 'myVar' is not defined in this scope

// We can have both global and local variables with the same name
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}
console.log(`Subtracting 7: ${minusSeven(10)}`);

// Understanding Undefined Value returned from a Function
var sum = null;
function addFive() {
    sum = sum + 5;
    return sum;
}
console.log(`Adding five to null: ${addFive()}`); // This will give undefined we do not add the return because the function does not return a value


// Assignment with a Returned Value
let changed = 0;
function change(num) {
    return (num * 2);
}

changed = change(256);
console.log(`256 doubled is: ${changed}`);

// Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
let testArray = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArray))
console.log(nextInLine(testArray, 6));
console.log("After: " + JSON.stringify(testArray))