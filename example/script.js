// let count=0;
// for (let i = 0; i<=100; i++) {
//     count++;
//     console.log(count);
//     if(count%3===0){
//         console.log("fizz");
//     }
//     else if(count%5===0){
// console.log( "buzz" );
//     }else if(count%3===0 && count%5===0){
//         console.log("fizzbuzz");
//     }else{
//         console.log("kod ishlemir");
//     }
// }


// const arr=[-3,5,9,-2,15,-8,3];
// arr.filter(arr,function(){
//     if(arr>0){
//         return arr;
//     }
// })




// const sentence='my name is nasib';

// console.log(sentence.charAt(0).toUpperCase().slice(-1));


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }


// do {
//     console.log(i);
// } while (i<=10);

// let i =0;
// while (i<=10) {
//     console.log(i);
// }


// const a = document.querySelector("a")
// a.getAttribute("href")
// console.log(a);



// const p = document.createElement("p");
// document.querySelector("body").append(p);
// p.textContent="salam";
// const text=p.textContent("salam")

// console.log(text);

// function musbetOrta(dizi) {
//     var pozitivler = dizi.filter(function (element) {
//         return element>0
//     });
  
//     if (pozitivler.length === 0) {
//         return 0
//     }
  
//     var toplam = pozitivler.reduce(function (toplam, sayi) {
//       return toplam + sayi; 
//     }, 0);
  
//     var ortalama = toplam / pozitivler.length;
//     return ortalama;
//   }
  
//   var arr = [3, -2, 8, -4, 5, -1, 9];
//   var averege = musbetOrta(arr);
//   console.log(averege);
  

// let a = new Date()

// console.log(a.getDate()+2   +"/"+a.getMonth(10)+"/"+a.getFullYear(23));
const myFunc = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}
 
const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}
 
myFunc(add);