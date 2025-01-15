// hoisting - it is a default behaviour of javasript where all the declarations are moved on the top of the scope before the code execution
var a;  // default value of js is undefined 
console.log(a);
var a = 30; // only var a is moved on the top of the scope

// how will js engine work with js file
// 1. Memory allocation phase - 
// 2.  creation phase -

//Execution context -
var fun = function(){
    console.log("hello");
}

