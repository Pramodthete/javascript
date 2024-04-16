const  person = {name:'Tray'};
let propertyDescriptor = Object.getOwnPropertyDescriptor(person,'name');
console.log(propertyDescriptor);

//ouput
//{ value: 'Tray', writable: true, enumerable: true, configurable: true }