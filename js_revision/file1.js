var a= 10;                          // hoisting 
console.log(a);                     // var have functional scope 
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
 // there is no  ascii value in js 

//  difference between == and === ?
console.log(1=="1"); // true   will first perform typeconversion
console.log([]==0); // true   will first perform typeconversion 
console.log([]==""); // false   will first perform typeconversion non primitive to primitive
console.log(0==[]); // true   will first perform typeconversion
console.log(0=="   ");
console.log(""=="   ");
console.log(""=="");   // true string is non primitive 
console.log([]==[]);     //false differnce address 
// convert string to array
console.log(String([])); 
// and with === it will not perform type conversion

// type conversion 
// 1+ "1" = 11 ---> implicit type conversion to string 
// 1 - "1" = 0 ---> implicit type conversion to number  because - operator is only for numbers
// 1 + + "6" = 7 --->  // second method for conversion put + sign before the string

//explicit  type conversion
Number("1"); // 1 string to number
// second method for conversion put + sign before the string
String(1); // 1 number to string
Boolean(1); // true number to boolean


// pass by value and pass by reference sort the datatype 
// pass by value - primitive data type
// pass by reference - non primitive data type

// diff between undefined, not defined  ,NAN ,null and none?




// nan - not a number(not a valid number )
console.log(1+"a"); //1a
var a = "shruti"
console.log(a++);  // nan
