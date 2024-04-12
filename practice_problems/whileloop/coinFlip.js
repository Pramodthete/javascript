// Extend the Flip Coin problem till either Heads or Tails wins 11 times.
function flip(){
    return Math.floor(Math.random()*2);
}

// console.log(coin);
hcount=0;
tcount=0;
// let p;
while(hcount<11 || tcount<11){
    // let p=flip();
    // console.log(p);
    if(flip()===0){
        hcount++;
    }else{
        tcount++;
    }
}
if(hcount===11){
    console.log("Head Wins !!!");
}else if(tcount===11){
    console.log("Tail Wins !!!");
}