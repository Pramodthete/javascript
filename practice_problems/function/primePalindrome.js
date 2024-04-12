// 3. Take a number from user and check if the number is a Prime then show
// that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err, res) {
    if (err) {
        console.error(err);
        return;
    }
    
    let num1 = parseInt(res['Enter a Number']);

    if (isPrime(num1)) {
        console.log(`${num1} is Prime Number`);
    } else {
        console.log(`${num1} is not Prime Number`);
    }

    if (isPalindrome(num1)) {
        console.log(`${num1} is Palindrome Number`);
    } else {
        console.log(`${num1} is not Palindrome Number`);
    }

    function isPrime(num1) {
        if (num1 <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num1); i++) {
            if (num1 % i === 0) {
                return false;
            }
        }
        return true;
    }

    function isPalindrome(num1) {
        let r = 0;
        let n = num1;
        let newNum = 0;
        while (num1 !== 0) {
            r = num1 % 10;
            newNum = newNum * 10 + r;
            num1 = Math.floor(num1 / 10);
        }
        return n === newNum;
    }
});
