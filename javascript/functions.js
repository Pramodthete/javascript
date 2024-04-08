//Function Statement means Function Declaration
function a(){
    console.log("a called");
}

// Function Expression
var b= function(param1, param2)
{             // these are called parameters
    console.log("b called");
}
// Named Function Expression
var c= function d(param1, param2)
{             // these are called parameters
    console.log("b called");
}

a();
b(1,2) // these are called arguments

            //this anonymous function is the Callback function
setTimeout(function(){
    console.log("timer");
},5000);