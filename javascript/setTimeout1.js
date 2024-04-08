function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("Namaste JS");
}
x();

// output
// ->
// Namaste JS
// 1    //this 1 printing after 3 sec

//first it scan the code, then setTimeout store someware and attach timer to it then setTimeout execute there
// But js does not wait there to complete 3 sec
// js is proceed further executing next instructions