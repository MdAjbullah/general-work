// let score=4;


// function one(){
//     let score =0;
//     console.log(score);
// }
// function two (){
//     score = 1;
//     console.log(score);
// }   
// function three(){
   
//     console.log(score);
// }

// one();
// two();
// three();
// console.log(score);


// nesting of the scope 


function outer(){   
    let a=10;
    function inner(){
        let b=20;
        console.log(a+b);
    }
    return inner;
}
let x=outer();  
let y=outer();
x();
y();
