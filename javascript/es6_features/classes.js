// Class example
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50



// Importing module
const { add } = require('./math.js');

// Using the add function
let result = add(5, 10);
console.log("\nResult:", result);