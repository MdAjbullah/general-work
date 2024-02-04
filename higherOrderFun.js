// const powerTwo=(n)=>{
//     return n**2;
// }

// function powerCube(powetTwo,n){
//     return powerTwo(n)*(n);
// }
// // console.log(powerCube(powerTwo,2));

// // function sayhellow(){
// //     return()=>{
// //         console.log("hellow");
// //     }
// // }
// // let  guessValue=sayhellow();
// console.log(guessValue());


// function oneFun(n){
//     function twoFun(m){
       
//         function threeFun(p){
            
//             return n*m*p;

//         }
//         return threeFun();
//     }
//     return twoFun();
// }
// let result=oneFun(2)(3)(4);
// console.log(result);

const oneFun=n=>{
    const twoFun= m=>{
        const three= p=>{
            return n*m*p;
        }
        return three;
    }
    return twoFun;
    
}
let result=oneFun(2)(3)(4);
// console.log(result);


const myNums=[1,2,3,4,5,6,7,8,9,10];
const sumArrray=arr=>{
    let rotal =0;
    arr.forEach(element => {
        rotal+=element;
    });
    return rotal;
}
console.log(sumArrray(myNums));


// property 
// setInterval
function sayhellow(){
    console.log("hellow",Math.random() 
    );
}
setInterval(sayhellow,1000);
// setTimeout
setTimeout(sayhellow,2000);