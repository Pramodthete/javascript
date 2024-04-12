const prompt = require('prompt');

prompt.get("Enter 1,10,100,... Digit Number", function(err,res){
    if(err){
        onerror(err);
    }
    let num= res['Enter 1,10,100,... Digit Number'];

    if(num==1){
        console.log("One");
    }else if(num==10){
        console.log("Ten");
    }else if(num==100){
        console.log("One Hundred")
    }else if(num==1000){
        console.log("One Thaousand");
    }else if(num==10000){
        console.log("Ten Thaousand");
    }else if(num==100000){
        console.log("One Lac");
    }else if(num==1000000){
        console.log("Ten Lac");
    }else if(num==10000000){
        console.log("One Crore");
    }else{
        console.log("... ?? .... Please Enter the Correct Number");
    }

});