// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
    
//     console.log("Namaste JS");
// }
// x();



// output
// ->
//Namaste JS
// 6
// 6
// 6
// 6
// 6   // these 6 numbers printing 1 sec after another

//var variable have only one memory created and there all for loop executed and then i becomes 6 
//and then setTimeout function call every after 1 sec but printing 6, 
//beacuse i not created for every iteration i have only one space created in memory

//******************* */
// if we want to create diffrent i memory for every iteration
// then we use let and let also have local scope

// function a(){
//     for(let j=1;j<=5;j++){
//         setTimeout(function(){
//             console.log(j);
//         },j*1000);
//     }
    
//     console.log("Namaste JS");
// }
// a();

/******************** */


// if interviewer say that use var then,

function a(){
    for(var j=1;j<=5;j++){
        function close(n){
            setTimeout(function(){
                console.log(n);
            },n*1000);
        }
        close(j);
    }
    
    console.log("Namaste JS");
}
a();

// if we bind setTimeout function in another function and call in for loop then somehow it will create a new i copy and pass it to the this function close(j)


