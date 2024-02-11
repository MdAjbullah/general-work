// promiss is a specila object in JS that represents a value that may be available now, or in the future, or never.
//  syntax
// function createPromise() {
//   return new Promise((resolve, reject) => {
  
//   });
// }


function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });
}

// console.log('start');
// let x= createPromise();
// console.log(" gote a new promise");
// x.then( function f(){
//   console.log("promise resolved");
// });
//  async and Await 


async function consumer() {
  // return 10;
  let x = await createPromise();
  console.log(x);
}
console.log(consumer());











