// Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is
// reached..



let num = 256;
let n=1, p=0;
while(p<256){
    p=2**n;
    console.log("2 to the power "+n+" is : "+p+", ");
    n++;
}
