//1
// function dots(params) {
//    let a = params.indexOf(".")
//    return a

// }

// console.log(dots("salam. menim. adim. var."));

//2
// let groupmates=["Jane", "Peter","John"]
// groupmates.push("Loki")
// groupmates.shift()
// console.log(groupmates);

//3

// let numbers="32,31,34,36,31"

// let result=numbers.replace(/,/g, ";");
// console.log(result);

//4

// let massiv=[1,2,3,4,5,6,7,8,9,10]
// let arr= massiv.map(el=>el*2)
// console.log(arr);

//5
// let massiv=[1,2,3,4,5]
// let arr= massiv.map(el=>el**2)
// console.log(arr);
// console.log(massiv);

//6

// let array=[1,6,34,5,1,-4,54,76,23,65,3,50,45,100,2346,-52,6545,0,45,22]
// let newArray = array.filter(element => element>0)
//  newArray.sort((a, b) => a-b);

// console.log(array);

//7
// function negative(params) {
//     const element = [];
//     for (let i = 0; i < params.length; i++) {
//         if(params[i]>0){
//             element.push(params[i]);

//         }

//     }
//     return element
// }
// console.log(negative([1,2,3,4,-3,-9]));

//8

// let str="Kebab-case"
// let x =str.toUpperCase().replace("-","_")

//    console.log(x);

//9

// let array = [2, 42, 134, 21, 454, 123, 21];
// array.sort((a, b) => b-a);

// console.log(array[1]);

// const c = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5];
// // function newArray(arr) {
// //   let currentOccurencesOfInt = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     let currentIterationInt = arr[i];
// //     for (let j = 0; j < arr.length; j++) {
// //       if (currentIterationInt == arr[j]) {
// //         currentOccurencesOfInt++;
// //       }
// //     }
// //     if (currentIterationInt % 2 != 0) {
// //       return currentIterationInt;
// //     }
// //   }
// // }

// function findOdd(arr) {
//  return arr.reduce((a, b) => a ^ b, 0);
// }
// console.log(findOdd(c));

// const tree = [
//   "ulu baba",
//   "ulu nene",
//   [
//     "baba",
//     "nene",
//     ["ogul", "qiz", ["neve", "neve2", ["kotukce", "kotukce2", ["yadiqca"]]]],
//   ],
// ];

// console.log(tree.flat(Infinity));

// const x = [];

// function arr(tree) {
//   for (let i = 0; i < tree.length; i++) {
//     if (Array.isArray(tree[i])) {
//         arr(tree[i]);
//     }
//     else{
//         x.push(tree[i]);
//     }
//   }
//   return x;
// }

// console.log(arr(tree));

// rekursiya

// flat metodu

// const x = [];

// function arr(tree) {
//   for ( const item of tree) {
//     if (Array.isArray(item)) {
//         arr(item);
//     }
//     else{
//         x.push(item);
//     }
//   }
//   return x;
// }

// console.log(arr(tree));

// const reng = prompt("Rengi secin?");
// const size = prompt("olchu ne qeder olsn")
// document.querySelector("h1").style.backgroundColor = reng;
// document.querySelector("h1").style.fontSize=size+"px"
// let ad = prompt("Adiniz?");
// document.querySelector("h1").textContent = ad;

// let soyad = prompt("Soyadiniz?");
// document.querySelector(".surname").textContent = soyad;

// let yash = prompt("Yashiniz?");
// document.querySelector(".age").textContent = yash;

// let a;
// if (confirm("Evli misiniz?") == true) {
//   a = "Evli";
// } else {
//   a = "Subay";
// }
// document.querySelector(".marriage").textContent = a;
// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");
// const button3 = document.querySelector(".button3");
// const button4 = document.querySelector(".button4");

// let num = 0;
// function b() {
//   num++;

//   if (num === 4) {
//     alert("hechbr data tapilmadi");
//   }
// }
  
// button1.addEventListener("click", function () {
//   document.querySelector("h1").textContent = "";

//   button1.style.display = "none";

//   const data1 = document.querySelector(".data1");
//   data1.textContent = "ad tapilmadi";
//   b()
//  });

// button2.addEventListener("click", function () {
//   document.querySelector(".surname").textContent = "";

//   button2.style.display = "none";

//   const data2 = document.querySelector(".data2");
//   data2.textContent = "soyad tapilmadi";
//   b()

// });

// button3.addEventListener("click", function () {
//   document.querySelector(".age").textContent = "";

//   button3.style.display = "none";

//   const data3 = document.querySelector(".data3");
//   data3.textContent = "yash tapilmadi";
//   b()
  
// });

// button4.addEventListener("click", function () {
//   document.querySelector(".marriage").textContent=""
//   button4.style.display = "none";

//   const data4 = document.querySelector(".data4");
//   data4.textContent = "melumat tapilmadi";
//   b()

// });


