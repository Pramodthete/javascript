fetch('https://jsonplaceholder.typicode.com/posts')
      .then(json=>console.log(json));

      
function add(){
    return new Promise((resolve, reject) => {
        a=10;
        b=20;
        resolve(a+b);
    })
}
add().then(function xyz(r){
    
    console.log(r);
});




// Create a function that returns a promise
function asyncOperation() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous task (e.g., fetching data from a server)
      setTimeout(() => {
        // If the task is successful, resolve the promise with a message
        resolve("Async operation completed successfully!");
        
        // If there's an error, reject the promise with an error message
        // reject("Error: Something went wrong!");
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Call the asyncOperation function and handle the promise
  asyncOperation()
    .then(result => {
      // This block executes when the promise is resolved
      console.log(result);
    })
    .catch(error => {
      // This block executes when the promise is rejected
      console.error(error);
    });





