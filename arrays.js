// An array is a data structure we use to represent a list of items.
let selectedColors = ['red', 'blue'];
selectedColors[3] = 'brown';
selectedColors[2] = true;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors[1] + ' : ' + typeof selectedColors[1] + ' | ' + selectedColors[2] + ' : ' + typeof selectedColors[2]);
// Since arrays are objects we can use the dot notation to do certain things with it.
console.log('the length of the array is: ' + selectedColors.length);

// Arrays allow us to store multiple values in a single variable instead of declaring separate variables for each value.
// We can store values of different data types in an array including numbers, strings, booleans, objects and even other arrays.
let myArray = ["Oscar", 21, "Kampala", True];
console.log(myArray);

//Nested Arrays
let nestedArray = [["Ford", "Mustang", 1969], "Oscar", 21, True];
console.log(nestedArray);
console.log(nestedArray[0]);
console.log(nestedArray[0][1]);

//Accessing Array Elements with indexes
let myColors = ['Red', 'Green', 'Blue'];
let firstColor = myColors[0];
let secondColor = myColors[1];

// Modifying Array Elements
myColors[2] = 'Yellow';
console.log(myColors);

// Accessing multi-dimensional Arrays
let multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let firstSubArray = multiDimensionalArray[0];
let secondElementOfFirstSubArray = multiDimensionalArray[0][1];
console.log(firstSubArray);
console.log(secondElementOfFirstSubArray);

// Manipulate Arrays with push() and pop()
let fruits = ['Apple', 'Banana'];
fruits.push('Orange');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
let removedFruit = fruits.pop();   
console.log(fruits); // Output: ['Apple', 'Banana']
console.log(removedFruit); // Output: 'Orange'

// Manipulate Arrays with shift() and unshift() 'Shift removes the first element of the array while unshift adds an element to the beginning of the array'
let vegetables = ['Carrot', 'Broccoli'];
vegetables.unshift('Spinach');
console.log(vegetables); // Output: ['Spinach', 'Carrot', 'Broccoli']
let removedVegetable = vegetables.shift();
console.log(vegetables);