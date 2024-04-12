// Write a program that reads 5 Random 2 Digit values , then find their sum and the average
function random(){
    return Math.floor(Math.random()*100+10);
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


let sum = val1+val2+val3+val4+val5;

console.log(`Sum of all numbers: ${sum}`);

console.log(`Average : ${Math.floor(sum/5)}`);
