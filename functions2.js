//Replacing else if statements with switch statements

function switchState(val) {
    var answer = "";
    switch (val) {
        case "Oscar":
            answer = "Kiwalabye";
            break;
        case "Angel":
            answer = "Gabriel";
            break;
        default:
            answer = "Unknown";
            break;
    }
    return answer;
}
var names = "Oscar";
console.log(names + " " + switchState(names));

// For returning true or false statements for boleans we can skip the who if else and juts return.

function isLess(a, b) {
    return a < b; // This will return either true or false.
}

console.log(isLess(3, 8));
console.log(isLess(8, 3));

// Returning early patterns with a function

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return "Function is undefined";
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 4));
console.log(abTest(0, 3));
console.log(abTest(-1, 4));

// Objects in JavaScript
var student = {
    "Name": "Shamran",
    "Age": 43,
    "Year": 1,
    "Friends": ["Mwanje", "Ian", "Shalom"],
    "Fav drink": "Tusker"
};

// Accessing object properties using dot notaton.
var Name = student.Name;
var age = student.age;
var bestFriend = student.Friends[0];

console.log(bestFriend);

// Accessing with bracket notation (Mainly required when the property name has a space in it)
let drink = student["Fav drink"];
console.log(`${Name}'s favourite drink is ${drink}`);

// Object properties using variables
let school = {
    nam: "Mengo Senior School",
    started: 1895,
    students: 6700,
    locations: ["Mengo", "Mityana", "Kawempe"]
};
console.log(`${school.nam} was started in ${school.started} and has branches in ${school.locations[0]}, ${school.locations[1]} and ${school.locations[2]} with over ${school.students} students.`)
// We can add a property to an object using both notations
school.head = "Nantagya Grace Sebanakitta";
school["Levels"] = ["A'level", "O'level"];
console.log(school);

//Deleting properties from objects
delete school.started;

// Using objects for lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("echo"));
// This would replace using the switch statement below
/*
switch(val) {
    case "alpha":
        result = "Adams";
        break;
    case "bravo":
        result = "Boston";
        break;
    case "charlie":
        result = "Chicago";
        break;
    case "delta":
        result = "Denver";
        break;
    case "echo":
        result = "Easy";
        break;
    case "foxtrot":
        result = "Frank";
        break;
}
*/

// Manipulating complex objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Ace of Base",
        "title": "The Sign",
        "release_year": 1993,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true    
    }
];

console.log(myMusic);
// Accessing nested objects
var firstAlbum = myMusic[0].artist;
var secondFormat = myMusic[1].formats[1];
console.log(`The first album is by ${firstAlbum} and the second format of the second album is ${secondFormat}`);

//parseInt function
function convertToInt(strin) {
    return parseInt(strin);
}
console.log(convertToInt("238"));

// Using parseInt to convert binary to integer
function binaryToBaseTen(str) {
    return parseInt(str, 2);
}
console.log(`The binary 10011 is ${binaryToBaseTen("10011")} in base 10.`);

//Ternary(Conditional) Operator
//condition ? statement_if_true : statement_if_false
var odd = [];
var even = [];
function evenAndOdd(a) {
    (a % 2) == 0 ? even.push(a) : odd.push(a);
}

evenAndOdd(1);
evenAndOdd(2);
evenAndOdd(3);
evenAndOdd(4);
evenAndOdd(5);
console.log(`The odd numbers are ${odd} and the even numbers are ${even}`);

// Nested ternary operators
function checkingPostivity(num) {
    return num > 0 ?  "Postive" : num < 0 ? "Negative" : "Zero";
}
console.log(`The number 10 is ${checkingPostivity(10)}`);
console.log(`The number -1 is ${checkingPostivity(-1)}`);
console.log(`The number 0 is ${checkingPostivity(0)}`);

// Arrow function
/* instead of writing this
var magic = function(){
    return new Date();
};
We can use arrows for that anonymous function
*/

var magic = () => {
    return new Date();
};

// Or
var magic1 = () => new Date();
// More Arrow functions without parameters
const nayab = (arr1, arr2) => arr1.concat(arr2);
console.log(nayab([1, 3], [4, 5, 6]));
console.log(magic1());