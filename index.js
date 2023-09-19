// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}!`

	
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
// write a function that returns the sum of two numbers
const sumTwoNumbers = (x,y) => x+y;
// console.log(sumTwoNumbers(20,10));

// Q3) Write a simple arrow function that squares a number.
const squareNumber = (num1) => num1*num1 //num1**2

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers 
// and returns a new array with each number squared.
    
const numbers = [1, 2, 3, 4]
const squaredArray = (arr) =>{
    let newArray =[]
    for(counter = 0; counter<arr.length; counter++){
        newArray.push(arr[counter]**2);

    }
    return newArray;
    
}
squaredArray(numbers);
// let newArray = squaredArray(numbers);
// console.log(newArray);