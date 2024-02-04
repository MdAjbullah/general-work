// function h(x,fn){
//     console.log(x*x);
//     fn();
// }

// h(5,function(){
//     console.log("this is callback function");
// })




console.log("start");
setTimeout(function(){
    console.log("this is settimeout function 1");
},5000)
setTimeout(function(){
    console.log("this is settimeout function 2");
},0)
for(let i=0;i<1000000000;i++){
    // do nothing
}
console.log("end");
