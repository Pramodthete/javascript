
// But this is not a good way to make counter

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

// We cannot access count outside
// Here we achive Data hiding and encapsulation
// console.log(count)

var counter1= counter();
counter1();
counter1();

// this completly start with new counter
var counter2 = counter();
counter2()
counter2()