// Read a Number and Display the week day (Sunday, Monday,...)

const prompt = require('prompt');

prompt.get(["Enter 1-7 Number"], function(err,res){
    if(err){
        onerror(err);
    }
    const n = res['Enter 1-7 Number'];

    let num=parseInt(n);

    switch(num){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("... ?? .... Please Enter the Correct Number");  
    }
});