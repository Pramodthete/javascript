const arr = [5,1,3,2,6];

// normal function for find max value
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}


// Using reduce we can find max value

//first parameter is just one variable and we can assign any value to it initially at the end
//second parameter is sequence of array/list/...

const output = arr.reduce(function(acc,curr){  
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)

//arrow function
const outpu = arr.reduce((acc,curr)=>acc+=curr)

// anonymous function
const outp = arr.reduce((acc,curr)=>{
    acc=acc*curr;
    return acc;
},1)


console.log(findMax(arr));
console.log("max: "+output);
console.log("sum: "+outpu);
console.log("multi: "+outp);



//another example **IMP**
const users = [
    {firstname: "akshay", lastname:"saini", age:26},
    {firstname: "pranav", lastname:"hirulkar", age:25},
    {firstname: "pramod", lastname:"thete", age:24},
    {firstname: "vaibhav", lastname:"thete", age:54},
    {firstname: "Rohit", lastname:"Jadhav", age:54}
];

const data = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(data);