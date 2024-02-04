 let x= String= "i am happy"
console.log(x);

let y = Number = 10
console.log(y);
let z = Boolean = true
console.log(z);
let a = BigInt = 1234567890123456789012345678901234567890n
console.log(a);
let b = Symbol = "hello"
console.log(b);
let c = Object = "hello"
console.log(c);
let d= undefined = "hello"
console.log(d);
let e = null = "hello"
console.log(e);

// Array product

let arr=[
    "iphone",
    "samsung",
    "nokia",
    "realme",
    "oppo",
    "vivo",
    "redmi",
    "oneplus",
    "lenovo",
    "motorola",
]
console.log(arr);

// create object

let obj = {
    1: "iphone",
    2: "samsung",
    3: "nokia",
    4: "realme",
    5: "oppo",
    6: "vivo",
    7: "redmi",
}



// type of and variable

// string
let v1="hellow my dear friend"
console.log(typeof v1);
// number

let v2= 10;
console.log(typeof v2);

// integer


let v3= 10.10;
console.log(typeof v3);

// boolean

let v4= true;
console.log(typeof v4);

// infiiity

let v5= 10/0;
console.log(typeof v5);

// not a number

let v6= 10/"hello";
console.log(typeof v6);

// BigInt

let v7= 1234567890123456789012345678901234567890n;
console.log(typeof v7);

// symbol

let v8= Symbol("hello");
console.log(typeof v8);

// undefined

let v9;
console.log(typeof v9);

// Array

let v10= ["iphone","samsung","nokia","realme","oppo","vivo","redmi","oneplus","lenovo","motorola"];
console.log(typeof v10);

// Object

let v11= {1: "iphone",2: "samsung",3: "nokia",4: "realme",5: "oppo",6: "vivo",7: "redmi",};

console.log(typeof v11);



// valid variable

let name ="mohan"
console.log(name);

let $name ="mohan"
console.log($name);


// invilid variable

// let 1name ="manu"
// console.log(1name);

// operator

console.log(`${number}*1=${number}`);
console.log(`${number}*2=${number*2}`);
console.log(`${number}*3=${number*3}`);
console.log(`${number}*4=${number*4}`);
console.log(`${number}*5=${number*5}`);
console.log(`${number}*6=${number*6}`);
console.log(`${number}*7=${number*7}`);
console.log(`${number}*8=${number*8}`);
console.log(`${number}*9=${number*9}`);
console.log(`${number}*10=${number*10}`);


// all arithmetic operator

let num1=10;
let num2=20;
console.log(`the additon of num1 and num2 is ${num1+num2}`);
console.log(`the subtraction of num1 and num2 is ${num1-num2}`);
console.log(`the multiplication of num1 and num2 is ${num1*num2}`);
console.log(`the division of num1 and num2 is ${num1/num2}`);
console.log(`the modulus of num1 and num2 is ${num1%num2}`);
console.log(`the increment of num1 is ${++num1}`);
console.log(`the decrement of num2 is ${--num2}`);



// perimeter of rectangular

let length=10;
let breadth=20;
let perimeter=2*(length+breadth);
console.log(`the perimeter of rectangle is ${perimeter}`);  


// compare two numbers

let number1=12;
let number2=12;
console.log(number1==number2);


number3=10;
number4=20;
console.log(number3==number4);

let number5=10;
let number6=20;

console.log(number5 != number6);


// if ,if-else,if-else-if,if-else-if-else   
let trafiLight="orange";{
    if (trafiLight=="red"){
        console.log("stop");
    }
    else if (trafiLight=="yellow"){
        console.log("ready");
    }
    else if (trafiLight=="green"){
        console.log("go");
    }
    else{
        console.log("invalid");
    }

}



// two largest number 

let num3=20;
let num4=15;

if (num3>num4){
    console.log(`${num3} is largest number`);
}
else{
    console.log(`${num4} is largest number`);
}



// fizz buzz

let num6=5;
if (num6%5==0 && num6%3==0){
    console.log("fizzbuzz");
}
else if (num6%5==0){
    console.log("buzz");
}
else if (num6%3==0){
    console.log("fizz");
}
else{
    console.log("invalid");
}


// switch case

const day ="tuesday";

let  daysuntilWeekend;

switch (day){
    case "monday":
        console.log(`there are 5 day(s)until the untilWeekend.`);
        break;
    case "tuesday":
        console.log(`there are 4 day(s)until the untilWeekend.`);
        break;
    case "wednesday":
        console.log(`there are 3 day(s)until the untilWeekend.`);
        break;
    case "thursday":
        console.log(`there are 2 day(s)until the untilWeekend.`);
        break;
    case "friday":
        console.log(`there are 1 day(s)until the untilWeekend.`);
        break;
    case "saturday":
        case "sunday":
        console.log(`there are 0 day(s)until the untilWeekend.`);
        break;
        default:
            daysuntilWeekend = "invalid day";
           
   
}



// month 1 2to 12

const monthNumber=1;
switch(monthNumber){
    case 1:
        console.log(january);
        break;
    case 2:
        console.log(february);
        break;

    case 3:
        console.log(march);
        break;
    case 4:
        console.log(april);
        break;
    case 5:
        console.log(may);
        break;
    case 6:
        console.log(june);
        break;
    case 7:
        console.log(july);
        break;
    case 8:
        console.log(august);
        break;
    case 9:
        console.log(september);
        break;
    case 10:
        console.log(october);
        break;
    case 11:
        console.log(november);
        break;
    case 12:
        console.log(december);
        break;
    default:
        console.log("invalid month Number");
        break;
       
}



// ternary condition

let number =0;
number==0
? console.log("number is zero")
: number>0
? console.log("number is greater than zero")
: console.log("number is less than zero");

// large number 

let num10=10;
let num11=10;
num10==num11
? console.log("both are equal")
: num10>num11
? console.log(`${num10} is largest number`)
: console.log(`${num11} is largest number`);



// loops 

let number12=5;
for (let i=1;i<=10;i++){
    console.log(`${number12}*${i}=${number12*i}`);
}



// specify the positive number 
let number13=10;
for (let i=1;i<=10;i++){
    if (i%2==0){
       console.log(i);
    }
}