// Write a program that takes a input and determines if the number is a prime.

const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err,res){
    let n = res['Enter a Number'];
    let num = parseInt(n);

    let isPrime=true;
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            isPrime=false;
        }
    }
    if(isPrime){
        console.log(`${num} is Prime Number`);
    }else{
        console.log(`${num} is not Prime Number`);
    }

});