function a(){
    var x=10, z=10;
    return function b(){
        console.log(x); 
        // here we only have x value not z value
    }
}

var y=a();
y();

// In this code 'z' variable is not been used
// thats why 'z' is been garbage collected

// And after executing full program then x will be garbage collected
// until x use the memory  (Disadventage of closure)