// This example demonstrates how multiple threads (simulated using setTimeout()) can safely access and modify shared memory using SharedArrayBuffer and Atomics, ensuring data integrity and avoiding race conditions.


// Create a SharedArrayBuffer with 4 bytes
const buffer = new SharedArrayBuffer(4);

// Create a typed array to access the buffer
const array = new Int32Array(buffer);

// Function to increment a value atomically
function incrementAtomic(index) {
    Atomics.add(array, index, 1);
}

// Function to read a value atomically
function readAtomic(index) {
    return Atomics.load(array, index);
}

// Initialize the value at index 0 to 0
array[0] = 0;

// Increment the value atomically 100 times in parallel
for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        incrementAtomic(0);
    }, 0);
}

// Read the final value atomically
setTimeout(() => {
    console.log("Final value:", readAtomic(0)); // Expected output: 100
}, 1000);
