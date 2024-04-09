
const arr = [5,1,3,2,6];

function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
}

// these all are same
//option 1
const output = arr.map(binary);

//we can write whole function within argument (anonymous function)
//option 2
const outpu = arr.map(function binary(x){
    return x.toString(2);
});

//option 3     using arrow function
const outp = arr.map( (x)=>x.toString(2));

console.log(output);
console.log(outpu);
console.log(outp);


//another example
const users = [
    {firstname: "akshay", lastname:"saini", age:26},
    {firstname: "pranav", lastname:"hirulkar", age:25},
    {firstname: "pramod", lastname:"thete", age:24}
];

const userdata = users.map(x => x.firstname +" "+x.lastname);

console.log(userdata);