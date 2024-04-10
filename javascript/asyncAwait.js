const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved value..");
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
    const val = await p;
    console.log(val);
}
handlePromise();

