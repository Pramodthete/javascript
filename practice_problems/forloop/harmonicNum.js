// Write a program that takes a command-line argument n and prints the nth harmonic
// number. Harmonic Number is of the form

const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err,res){
    let n = res['Enter a Number'];
    let num = parseInt(n);
    let harm=0;
    for(let i=1;i<=num;i++){
        harm+=1/i;
    }

    console.log(`Harmonic Number of ${num} is :${harm}`)

});