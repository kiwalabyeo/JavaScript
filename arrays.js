// An array is a data structure we use to represent a list of items.
let selectedColors = ['red', 'blue'];
selectedColors[3] = 'brown';
selectedColors[2] = true;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors[1] + ' : ' + typeof selectedColors[1] + ' | ' + selectedColors[2] + ' : ' + typeof selectedColors[2]);
// Since arrays are objects we can use the dot notation to do certain things with it.
console.log('the length of the array is: ' + selectedColors.length);