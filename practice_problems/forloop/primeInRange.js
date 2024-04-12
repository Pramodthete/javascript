// Extend the program to take a range of number as input and output the Prime
// Numbers in that range.


const prompt = require('prompt');

console.log("Enter the range of numbers:")
prompt.get(['Number 1'], function (err, res) {
    let n1 = res['Number 1'];
    let num1 = parseInt(n1);

    prompt.get(['Number 2'], function (err, res) {
        let n2 = res['Number 2'];
        let num2 = parseInt(n2);

        for (let i = num1; i < num2 ; i++) {
            let count =0;
            for (let j = 2; j < i  ; j++) {
                if ( i% j == 0) {
                    count++;
                } 
            }
            if(count==0 ){
                console.log(i);
            }
        }

    });
});