// Promise.prototype.finally()
// Example Promise
const promise = new Promise((resolve, reject) => {
    // Simulate asynchronous operation
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

// Add a finally block
promise
    .then(result => {
        console.log(result); // Output: Success!
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finally block executed'); // Output: Finally block executed
    });
