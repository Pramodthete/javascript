
// Read a single digit number and write the number in word using Case

const prompt = require('prompt');

prompt.get(["Enter Single digit Number"], function(err,res){
    if(err){
        onerror(err);
    }
    const num = res['Enter Single digit Number'];
    
    let num1 = parseInt(num);

    switch(num1){
        case 1:console.log("One");
        break;
        case 2:console.log("Two");
        break;
        case 3:console.log("Three");
        break;
        case 4:console.log("Four");
        break;
        case 5:console.log("Five");
        break;
        case 6:console.log("Six");
        break;
        case 7:console.log("Seven");
        break;
        case 8:console.log("Eight");
        break;
        case 9:console.log("Nine");
        break;
        default:console.log("Enter Single digit Number....");
        break;
    }
})