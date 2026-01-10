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

// Functions with boleans
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes It is true";
    }
    return "No it is not True";
}

console.log(ourTrueOrFalse(true));

// Testing if a value is equal to, greator than or less than using if statements

function equalTo(val) {
    if (val == 12) {
        return "Yes it is equal to 12";
    }
    return "No it isn't equal to 12";
}

console.log(equalTo(14));

function greatorThanTen(num) {
    if (num > 10) {
        return "Yes it is greator than 10";
    }
    return "Nope, It is not greator than 10";
}

console.log(greatorThanTen(9));

/* Strict equality operator "==="
 It is used to differentiate between strings and integers
 Forexample 54 === 54 would be true 
 but 54 === '54' won't because one is a string and the other is an integer
 but this would be true either way if we were using ==
 */

function strictEquality(numero) {
    if (numero === 3) {
        return "yes it is equal";
    }
    return "No they are not the same";
}
 
let testOne = 3;
let testTwo = "3";
var testThree = 54;


console.log(strictEquality(testOne));
console.log(strictEquality(testTwo));
console.log(strictEquality(testThree));

// The inequality operator is != and the strict inequality is !==
// Greator than or equal to is >= and the inverse is <=

// Using the 'and' operator if testing for more than one (&&)

function numBtnTwentyAndTen(num1) {
    if (num1 > 10 && num1 < 20) {;
        return "The value is between 10 and 20";
    }
    return "The value is not between 10 and 20";
}

console.log(numBtnTwentyAndTen(13));
console.log(numBtnTwentyAndTen(9));

// Logical operations using or

function usingOr(chr) {
    if (chr < 10 || chr > 20) {
        return "It is out of range";
    }
    return "It is in range";
}

console.log(usingOr(15));
console.log(usingOr(9));

// ELse statements
function usingElseStatements(int) {
    if (int === 5) {
        result = "Yes, the number is five!";
    }
    else {
        result = "The number is either not equal to five or it is a string!";
    }
}

usingElseStatements(9);
console.log(result);
usingElseStatements(5);
console.log(result);

// Using elseIf statements

function usingElseIf(float) {
    if (float < 100) {
        return "Capital is too low";
    }
    else if (float > 200) {
        return "Capital is more than enough!";
    }
    return "Capital is in usable range";
}

console.log(usingElseIf(150));
console.log(usingElseIf(400));
console.log(usingElseIf(50));

// Once the first condition is met in an if statement, it doesn't check the rest so it is important to organise the code logically

// Using Switch statements

function usingSwitch(valv) {
    var answer = "";
    switch (valv) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer="Not a radiation"
    }
    return answer;
}
console.log(usingSwitch(1));
console.log(usingSwitch(2));
console.log(usingSwitch(3));
console.log(usingSwitch(11));
// NOTE: the switch statement uses the strict equality.

// Multiple cases returning the same output using switch

function sequentialOut(nin) {
    ans = "";
    switch (nin) {
        case 1:
        case 2:
        case 3:
            ans = "Very low";
            break;
        case 4:
        case 5:
            ans = "Average";
            break;
        case 6:
            ans = "Good";
            break;
    }
    return ans;
}

console.log(sequentialOut(4));