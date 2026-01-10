function fizzBuzz(num) {
    var result = ""
     if (((num % 3) == 0) && ((num % 5) == 0)) {
        result = "FizzBuzz";
        return result;
    }
    else if ((num % 3) == 0) {
        result = "fizz";
        return result;
    }
    else if ((num % 5) == 0) {
        result = "Buzz";
        return result;
    }
    return "The number is neither divisible by 5 nor 3"
}
console.log(fizzBuzz(9));
console.log(fizzBuzz(15));
console.log(fizzBuzz(10));