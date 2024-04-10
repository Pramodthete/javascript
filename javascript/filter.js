const arr = [5,1,3,2,6];

function greater(x){
        return x>4;
}
//-----------------------------------



const output = arr.filter(greater);

const outp = arr.filter(function(x){
    return x<4;
});

const outpu = arr.filter((x)=>x%2);

//----------------------------------------------



console.log("greater than 4 numbers: "+output);

console.log("less than 4 numbers: "+outp);

console.log("odd numbers: "+outpu);




//another example **IMP**
const users = [
    {firstname: "akshay", lastname:"saini", age:26},
    {firstname: "pranav", lastname:"hirulkar", age:25},
    {firstname: "pramod", lastname:"thete", age:24},
    {firstname: "vaibhav", lastname:"thete", age:54},
    {firstname: "Rohit", lastname:"Jadhav", age:54}
];

const less= users.filter((x)=>x.age<30)
            .map((x) =>x.firstname);

console.log(less);