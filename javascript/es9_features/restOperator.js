// Rest operator example
function sum(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));   // Output: 30
