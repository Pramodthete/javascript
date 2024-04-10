const cart = ["shoes","pants","kurta"];

//Inversion of control
//bad practice
//->
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// })


//good practice
// using promises
//->
// const promise=createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })