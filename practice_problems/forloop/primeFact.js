function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }

    // n must be odd at this point. So a skip of 2 (i = i + 2) can be used
    for (let i = 3; i*i <= n; i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

    // This condition is to handle the case when n is a prime number greater than 2
    if (n > 2) {
        console.log(n);
    }
}

// Test the function
// const N = 315;


const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err,res){
    let n = res['Enter a Number'];
    let N = parseInt(n);
    console.log("Prime factors of", N, "are:");
    primeFactors(N);
});
