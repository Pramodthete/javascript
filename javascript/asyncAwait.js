const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value..");
    },10000)
});


// use async
//always return a promise
async function getData(){
    return p;
}
// promise stored first inside this variable
const dataPromise=getData();
//then print promise
dataPromise.then((res)=> console.log(res));



//Before async and await, how do we handle promises
function getD(){
    p.then((res)=>console.log(res)); //it takes 10 sec to execute
    console.log("This will get printed first"); // this will get printed first
}
getD();


// Now using async and await to handle promises
async function handlePromise(){
    // await only used inside the async function
    // Js engine was waiting for promise to resolved
    // once the value get inside val then only waiting is over
    const val = await p;
    console.log("code is waiting on previous line")
    console.log(val);
}
handlePromise();

