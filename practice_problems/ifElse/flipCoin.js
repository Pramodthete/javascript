// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
function coinFlip(){
    return Math.floor(Math.random()*2);
}

for(let i=0;i<6;i++){
    if(coinFlip()==0){
        console.log("Head ");
    }else{
        console.log("Tail ");
    }
}

