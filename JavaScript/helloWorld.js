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
// call stack 
function makeTea() {
    console.log("Chai bana raha hoon");
}

function boilWater() {
    console.log("Paani ubal raha hai");
    makeTea();
}

function startKitchen() {
    console.log("Kitchen start karta hoon");
    boilWater();
}

startKitchen();

// global scope 
var age = 17;
let life=7;
if(life=7){
    console.log(age);
}

// function scope 
function block(){
    let age1 = 18;
    console.log(age1);
}
block();
//console.log(age1);


// block scope
{
    let age2 = 19;   // if the variable is declared with let then it will not be accessible outside the block same goes with const
                    // if the variable is declared with var then it will be accessible outside the block as it a global variable
    console.log(age2);
}  


// variable hoisting
console.log(naam); // undefined
var naam = "Rahul";

//console.log(naam2); // Error: Cannot access 'naam' before initialization
//let naam2 = "Rahul";

//object cloning

let shubh = {
    age: 23,
    wt:29,
    name:"shubham"
}
console.log(shubh);



// errorr handling 
try{
    console.log("hello");
    console.log("world");
    console.log(dhruv);
    console.log("shruti");
    console.log("gupta");
}
catch(error){
    console.log("you are inside catch block !!! error was detected ");
    console.log("do smt to get out of here ");
}
finally{
    console.log("mujhe farak nahi padta mai toh chala hi jaunga");  
}
// creating custom error by using throw keyword 
throw "yeh error tuh maine he banaya hai haha !!!";