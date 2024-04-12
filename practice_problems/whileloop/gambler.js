// Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made.
function flip(){
    return Math.floor(Math.random() * 2);
}

let placeBet = 20; // Betting amount
let initial = 100;
let target1 = 1; // Broke
let target2 = 200; // Goal
let betsMade = 0;
let wcount = 0;

while (initial > placeBet && initial < target2) {
    betsMade++;

    if (flip() === 0) {
        initial -= placeBet;
    } else {
        initial += placeBet;
        wcount++;
    }
}
// console.log(wcount);
// console.log(target1);

// console.log(target2);
// console.log(initial);


if (initial === target1) {
    console.log("Loss");
} else if (initial === target2) {
    console.log("Win!!!, Winning count: " + wcount);
}

console.log("Bets made: " + betsMade);


