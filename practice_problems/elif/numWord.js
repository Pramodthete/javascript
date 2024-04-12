// Read a single digit number and write the number in word

const prompt = require('prompt');

prompt.get("Enter single Digit Number", function(err,res){
    if(err){
        onerror(err);
    }
    let num= res['Enter single Digit Number'];

    if(num==0){
        console.log("Zero");
    }else if(num==1){
        console.log("One");
    }else if(num==2){
        console.log("Two");
    }else if(num==3){
        console.log("Three");
    }else if(num==4){
        console.log("Four");
    }else if(num==5){
        console.log("Five");
    }else if(num==6){
        console.log("Six");
    }else if(num==7){
        console.log("Seven");
    }else if(num==8){
        console.log("Eight");
    }else if(num==9){
        console.log("Nine");
    }else{
        console.log("... ?? ....Please Enter Valid Number ...............");
    }
})