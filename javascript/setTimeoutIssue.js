console.log("start");

setTimeout(function cb(){
    console.log("Callback");
})

console.log("End");

//millions of line here

let startDate= new Date().getTime();
let endDate = startDate;

while(endDate<startDate+10000){
    endDate = new Date().getTime();
}
console.log("While Expires");

// output
//->
// start
// End
// While Expires
// Callback