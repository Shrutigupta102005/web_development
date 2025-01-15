var a= 10;                          // hoisting
console.log(a);                     
function fun(){                     
    console.log(a);
    var a = 20;
    function foo(){
        a++;
        console.log(a);
        var a = 30;
        
    }
    
}

foo();
fun();


// == and ===
console.log([]==0); // true   will first perform typeconversion 
// and with === it will not perform type conversion

