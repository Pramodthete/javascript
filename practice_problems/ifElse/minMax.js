// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

function random(){
    return Math.floor(Math.random()*1000+100);
}

let val1 = random();
console.log(val1);
let val2=random();
console.log(val2);
let val3=random();
console.log(val3);
let val4=random();
console.log(val4);
let val5=random();
console.log(val5);

let high = Math.max(val1,val2,val3,val4,val5);
let less = Math.min(val1,val2,val3,val4,val5);

console.log("Mininmum value: "+less);
console.log("Maximum value: "+high);
