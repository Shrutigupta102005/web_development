// variables
var a = 19;
let b = 20;
const c=21;
console.log(a);



// functions
// function creation
function saymyname(){
    console.log("shruti gupta");
}
// function call
saymyname()

// function with parameter

function avg(num1,num2){
    console.log(num1+num2);
}
avg(23,45);

// return function
function sum(num1,num2,num3){
    return(num1+num2+num3);
    // unreachable statment
    let nun = "else";
}
ans = sum(2,3,4);
console.log(ans);

// array
   // creation of array
   // method 1
   let arr1 = [1,2,3,4,5,6,78,9]
console.log(arr1)
    //method2 by help of constructor
    let arr2 = new Array(1,2,3,4,5,6,67,7)
console.log(arr2);
   
//objects
let obj = {
    name:"shruti",class:12,greet:function(name){
        console.log("welcome");
    }
}
console.log(typeof(obj))