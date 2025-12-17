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