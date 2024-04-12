// Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.
const prompt = require("prompt");


prompt.start();

// Get the first input

prompt.get(['Day'], function (err, result) {
   
   if (err) { return onErr(err); }
   const input1 = result.Day;
   // Get the second input
   
   prompt.get(['Month'], function (err, result) {
      if (err) { return onErr(err); }
      const input2 = result['Month'];
      
      console.log(input1,input2)

      if(input2=="March" && input1>20 ){
         console.log("True");
      }else if(input2=="June" && input1<20){
         console.log("True");
      }else if(input2=="April" || input2=="May"){
         console.log("True");
      }else{
         console.log("False");
      }
   });
   
  
  
});


function onErr(err) {
   console.error(err);
   return 1;
}
