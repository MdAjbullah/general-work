// let data = [1, 2, 3, 4, 5];
// let data1 = [6, 7, 8, 9, 10];
// let data2=[];

// // <!-- let arr3 = arr1.concat(arr2); -->

// for (let i=0; i<data.length; i++){
//     data2[i]=data[i];
// }
// for (let i=0; i<data1.length; i++){
//     data2[data.length+i]=data1[i];

// }
// console.log(data2);


// reverse Array

// let data1=[30,40,50,60,70,80,90,100];
// console.log(data1);
// let reverse=data1.reverse();
// console.log(reverse);


// marge two Array


let data1=[10,20,30,40,50];
let data2=[10,20,30,40,50,70,80,90,100];

// let data3=data1.concat(data2);
let data3=[...data1,...data2]
console.log(data3);
let data4=data3.reverse();
console.log(data4);
