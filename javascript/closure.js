function x(){
    var a=7;
    // option 1
    function y(){
        console.log(a);
    }
    a=100;
    return y;

    // option 2
    // return function y(){
    //     console.log(a);
    // }
}
var z= x();
console.log(z); 
//  this is printing this in console (as it function),
// beacuse x function return y function
//  ƒ y(){
//     console.log(a);
// }

z();
// printing 100 for option 1, beacause its refering memory
// printing 7 for option 2
// that means its calling y function at the end but it still remember that variable a=7
