function outest(){
    var c= 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
            function innest(){
                var d=1;
                console.log(d);
                function inn(){
                    var d1=1;
                    console.log(d1);
                }
                return inn;
            }
            return innest;
        }
        let a=10; // if we don't write this then it try to find in lexical scope
        return inner;
    }
    return outer;
}
let a=100; // this will not execute, still execute inside a variable values
var close = outest()("hello")()(); // n-1 brackets, n=no. of functions
close();