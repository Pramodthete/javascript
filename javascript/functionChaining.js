const calculator = {
    value: 0,
    add(x) {
        this.value += x;
        return this; // Return the object to enable chaining
    },
    multiply(x) {
        this.value *= x;
        return this; // Return the object to enable chaining
    }
};

const result = calculator.add(5).multiply(2).value;
console.log(result); // Outputs: 10