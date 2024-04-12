// Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n.

const prompt = require('prompt');

prompt.get(['Enter a Number'], function(err,res){
    let n = res['Enter a Number'];
    let num = parseInt(n);

    console.log("Table of Power of 2 :")
    for(let i=1;i<=num;i++){
        console.log(`2 to the power ${i} = ${2**i}`)
    }

});