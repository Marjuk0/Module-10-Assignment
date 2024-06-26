
// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum. 

function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(3, 7));


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(9)); 
console.log(isEven(8));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array. 
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([2, 4, 8, 9, 3]));

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed. 
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('54321'));

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers. 
function FON(array) {
    let oddNumbers = [];
    let i = 0;
    
    do {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]);
        }
        i++;
    } while (i < array.length);
    
    return oddNumbers;
}

console.log(FON([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements. 
function sumarray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumarray([10, 20, 50]));


// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order. 
function sortarray(array) {
    let sortedArray = array.slice();
    sortedArray.sort(function(a, b) {
        return a - b;
    });

    return sortedArray;
}

console.log(sortarray([6, 5, 4, 3, 2, 1]));


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex- console.log(capitalizeFirstLetter("hello"));  Output: "Hello"

function CFL(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(CFL("marjuk")); 

