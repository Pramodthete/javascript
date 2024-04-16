// Spread operator example
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combining arrays using spread operator
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array using spread operator
let copyOfArr1 = [...arr1];
console.log(copyOfArr1);    // Output: [1, 2, 3]
