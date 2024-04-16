let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = "Data fetched successfully";
        resolve(data);
    }, 2000);
});

myPromise.then((data) => {
    console.log("Received data:", data); // this is printing
}).catch((error) => {
    console.error("Error:", error);
});
