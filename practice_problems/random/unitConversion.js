// Use Script & Debug – Unit Conversion


// a. 1ft = 12 in then 42 in = ? ft.....................................................

let feet = 0;
let inches=42;
console.log("1ft = 12 inches, Then");
feet=inches/12;
console.log(inches+" inches = "+feet+" feet");
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter Number in feet: ', (num) => {
//   console.log(`In Inches: ${num*12}`);
//   rl.close();
// });



// b. Rectangular Plot of 60 feet x 40 feet in meters....................................
// 1 meter = 3.28 feet/foot
let lf=60;
let bf=40;

let lm=lf/3.28;
let bm=bf/3.28;
console.log("\nlength :"+lm.toFixed(2)+" m, breadth : "+bm.toFixed(2)+" m")
console.log("Area of rectangle:"+(lm*bm).toFixed(2));



// c. Calculate area of 25 such plots in acres.......................................
// 1 meter = 4046.86 acre
console.log("\nlength :"+(lm/4046.86).toFixed(4)+" acre, breadth : "+(bm/4046.86).toFixed(4)+" acre")
console.log("Area all 25 plots:"+((lm*bm)*25).toFixed(2));


