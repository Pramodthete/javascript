// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt');

prompt.get("Enter 1,10,100,... Digit Number", function(err,res){
    if(err){
        onerror(err);
    }
    let n= res['Enter 1,10,100,... Digit Number'];

    let num = parseInt(n);

    switch(num){
        case 1:
            console.log("One");
            break;
    
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("One Hundred")
            break;
        case 1000:
            console.log("One Thaousand");
            break;
        case 10000:
            console.log("Ten Thaousand");
            break;
        case 100000:
            console.log("One Lac");
            break;
        case 1000000:
            console.log("Ten Lac");
            break;
        case 10000000:
            console.log("One Crore");
            break;
        default:
            console.log("... ?? .... Please Enter the Correct Number");
    }

});