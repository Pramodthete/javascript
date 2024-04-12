
// Write a function to check if the two numbers are Palindromes

let num1=454;
pal(num1);

function pal(num1){
    let r=0;
    let q=num1;
    let n=0;
    while(num1!==0){
        r=Math.floor(num1%10);
        // console.log(r);
        n=Math.floor(n*10+r);
        // console.log(n);
        num1=Math.floor(num1/10);
    }
    console.log(n);
    if(n===q){
        console.log("Number is Palindrome");
    }else{
        console.log("Number is Not palindrome");
    }
}