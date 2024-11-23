// Write your code here

// Quiz Questions
// 1. What method would you use to add an element to the end of an array?
// array.push method 

// 2. How do you remove the first element from an array?
// array.shift 

// 3. What is the difference between splice and slice?
// splice can change the array itself, delete or 
// add DataTransferItemList, slice creates new array using old one

// 4. How do you find the length of an array?
// Array.lenght

// 5. How can you check if an array includes a certain element?
// array.includes();

// 6. What is the result of calling sort on an array of numbers without a compare function?
// it will sort numbers like if they were strings 

// 7. How do you create a copy of an array?
// arrayCopy = arrayOriginal.slice();

// 8. How do you reverse the elements in an array?
// array.reverse();

// 9. What method can you use to combine two arrays?
// array1.concat(array2);

// 1o. How do you access a specific element in a 2D array?
// array[1][2] first is for column, second is for raw



// Assignment 1: Basic Array Operations
// 1. Create an array of numbers from 1 to 10.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Access the third element in the array.
console.log(array[2]);

// 3. Change the value of the fifth element to 15.
array[5] = 15;
console.log(array[5]);
// 4. Add a number at the end of the array.
array.push(25);
console.log(array);

// 5. Remove the first element from the array.
array.shift();
console.log(array);


// Assignment 2: Array Methods - push, pop, shift, unshift
// Task:
// 1. Create an array of fruit names.
let fruits = ["Apple", "Banana", "Grapes", "Mango"];

// 2. Add "Orange" to the end of the array.
fruits.push('Orange');
console.log(fruits);


// 3. Remove the last item and store it in a variable.
let lasrItem = fruits.pop();
console.log(lasrItem);


// 4. Add "Strawberry" to the beginning of the array.
fruits.unshift("Strawberry");
console.log(fruits);


// 5. Remove the first item and store it in a variable.
let firstIrtem2 = fruits.shift();
console.log(firstIrtem2);


// Assignment 3: Iterating Over an Array
// Create an array of 5 colors.
// Use a for loop to print each color.
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// Assignment 4: Array Methods - splice and slice
// Task:
// Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];

// Use the splice method to remove the second and third elements.
numbers.splice(1, 2);

// Use the splice method to add two numbers at the second position.
numbers.splice(1, 0, 6, 7);
console.log(numbers);


// Use the slice method to create a new array containing the last three elements of the original array.
let startIndex = numbers.length - 3;
let lastThreeElements = numbers.slice(startIndex);
console.log(lastThreeElements);


// Assignment 5: Array Sorting
// Task:
// Create an array of names.
let names = ["Charlie", "Eve", "Alice", "Bob", "David"];

// Sort the array in alphabetical order.
names.sort();
console.log(names);

// Sort the array in reverse alphabetical order.
names.reverse();
console.log(names);



// Assignment 6: Finding Elements in an Array
// Task:
// Create an array of numbers.
let numbers2 = [10, 20, 30, 40, 50];

// Use indexOf to find the position of a specific number.
console.log(numbers2.indexOf(30));

// Use includes to check if a specific number is present in the array.
console.log(numbers2.includes(30));

// Use findIndex to find the index of the first element greater than a certain value.
let index = numbers2.findIndex(num => num > 25);
console.log(index);


// use for loop to find the index of the first element greater than a certain value.
value = 40;
for (let i = 0; i < numbers2.length; i++) {
    if (value < numbers2[i]) {
        console.log(`index of the number which is greater then 40 is ${i}`);
    }
}


// Assignment 7: Multi-dimensional Arrays
// Task:

// Create a 2D array representing a grid.
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// Access a specific element in the grid.
console.log(grid[0][2]);

// Modify an element in the grid.
grid[2][2] = 4;
console.log(grid[2][2]);



// Assignment 8: Array Destructuring
// Task:
// Create an array with 4 elements.
let array3 = ["apple", 42, true, "banana"];

// Use destructuring to extract the first and second elements into variables.
let [first, second] = array3;
console.log(`first ${first}; second ${second}`);

// Swap the values of two variables using array destructuring.
[first, second] = [second, first];
console.log(`first ${first}; second ${second}`);


// Assignment 9: Combining Arrays
// Task:
// Create two arrays of numbers.
let array5 = [1, 2, 3, 4, 5];
let array6 = [10, 20, 30, 40, 50];

// Combine the two arrays into one using the concat method.
console.log(array5.concat(array6));


// Create a new array by combining the two arrays using the spread operator.
let combinedArray = [...array5, ...array6];
console.log(combinedArray);


// Assignment 10: Reversing and Sorting Arrays
// Task:
// Create an array of numbers.
let numbers7 = [10, 5, 30, 2, 15];

// Reverse the array.
numbers7.reverse();
console.log(numbers7);

// Sort the array in descending order
let numbers7Sort = [];
let numLenght = numbers7.length;
let firstN = numbers7[0];


for (let i = 0; i < numLenght; i++) {

    for (let i = 0; i < numLenght; i++) {
        if (numbers7[i] > firstN) {
            firstN = numbers7[i];   
        }
    }

    numbers7Sort.push(firstN);
    numbers7.splice(numbers7.indexOf(firstN), 1);
    firstN = numbers7[0];
}
console.log(numbers7Sort);
