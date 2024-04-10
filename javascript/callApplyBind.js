let name = {
    firstname:"Vaibhav",
    lastname:"Thete"
}
let printfulName = function(hometown,state){
    console.log(this.firstname + " " + this.lastname + " from "+ hometown+ " , "+state);
}

printfulName.call(name,"Pune","Maharashtra");




let name2 = {
    firstname:"Pramod",
    lastname:"Thete"
}


//call() invokes a function immediately with a specified context and individual arguments. 
printfulName.call(name2,"Mumbai","Maharashtra");

//— apply() invokes a function immediately with a specified context and an array of arguments.
printfulName.apply(name2,["Mumbai","Maharashtra"]);

//— bind() creates a new function with a specified context and initial arguments, without invoking it immediately. and return function
let printName=printfulName.bind(name2,"Mumbai","Maharashtra");

console.log(printName);
printName();