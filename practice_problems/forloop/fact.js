// Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err,res){
    let n = res['Enter a Number'];
    let num = parseInt(n);
    let fact=1;
    for(let i=num;i>0;i--){
        fact*=i;
    }
    console.log(`Factorial of ${num} is ${fact}`);

});