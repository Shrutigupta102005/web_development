let input = 20 ;

// brute
for(let i = 1; i<= input ;i++){
    if(i% 3==0 && i%5==0){
        console.log("fizzBuzz");
    }
    else if(i% 3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
//% --> are the heaviest operation
//  little optimised 
for(let i = 1; i<= input ; i++){
    let str = "";
    if(i%3 == 0){str += "fizz";}
    if(i%5 == 0){str += "Buzz";}
    if(str === ""){ str+=i ;}
    console.log(str);
}
// more optimised 
let cnt3 = 1 ;
let cnt5 = 1 ;
for(let i = 1 ; i<= input;i++){
    let str = "";
    if(cnt3 == 3 ){
        str += "Fizz";
        cnt3 =0;
    }
    if(cnt5 == 5 ){
        str += "Buzz";
        cnt5 = 0;
    }
    if(str === ""){
        str += i;
    }
    console.log(str);
    cnt3++;
    cnt5++;
}
