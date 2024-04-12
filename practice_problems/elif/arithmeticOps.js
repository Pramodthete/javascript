// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum
// 1. a + b * c    3. c + a / b
// 2. a % b + c    4. a * b + c

const prompt = require('prompt');

console.log("Enter 3 numbers")


prompt.get("a = ", function(err,res){
    if(err){
        onerror(err);
    }
    let a= res['a = '];

    prompt.get("b = ", function(err,res){
        if(err){
            onerror(err);
        }
        let b= res['b = '];

        prompt.get("c = ", function(err,res){
            if(err){
                onerror(err);
            }
            let c= res['c = '];

            let operation1 = a + b *c;
            let operation2 = a % b + c;
            let operation3 = c + a / b;
            let operation4 = a * b + c;

            console.log("Arithmetic operation 1 answer: "+operation1);
            console.log("Arithmetic operation 2 answer: "+operation2);
            console.log("Arithmetic operation 3 answer: "+operation3);
            console.log("Arithmetic operation 4 answer: "+operation4);

        });

    });

});