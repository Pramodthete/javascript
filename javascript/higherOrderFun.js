const radius=[3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}


// const calculate = function(radius,logic){
//     const output = [];
//     for(let i = 0; i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// Higher Order Function
// with 'Array.prototype.' we can available this function to all arrays, so we can use like map function (high order fun)
Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area)); // we create our map function
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));