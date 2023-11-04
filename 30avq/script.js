// arraylarin random reqemlerin cemi menfidise menfi
//qaytarsin musbetdirsen cemi qaytarsin
// var arr2 = [25, 30, 45, 5, 3];
// var arr3 = [-25, 30, -45, 5, 3];
// let sum = 0;

// for (let i = 0; i < arr3.length; i++) {
//   sum += arr3[i];
// }

// // console.log(myFunc(25, 30, 45, 5, 3));
// //  console.log(myFunc(-25, 30, -45, 5, 3));
// console.log(sum > 0 ? sum : "menfidir");

// //[1,2,3,4,5]

// let arr = [1,2,3,4,5];
// let x=[]

// for (let index=arr.length-1; index>=0; index--) {
//   const element = arr[index];
//    x.push(element);

// }

// console.log(x);

// let array = ["hello"]
// let x =[]
// for (let i = array.length-1; i >= array.length; i--) {
//     const element = array[i.split];
//    x.push(element);

// }

// console.log(x);

//1;3;5;3;1 tekrar reqemler yeni arrayda yigilsin

// let arr = [1, 3, 5, 3, 1];
// let x = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!x.includes(arr[i])) {
//     x.push(arr[i])
//   }
//   else{
//   }

// }
// console.log(x);
// console.log(arr.length - x.length +" " +"eded eyni chixdi");

// var str = "hellooooo world";
// var word = str.split(" ");
// var x=[]
// for (let i = 0; i < word.length; i++) {
//     x.push(word[i].length)

// }

// console.log(x);
// console.log(Math.max(...x));

// function myFunc(arr) {
//     let x = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (!x.includes(arr[i])) {
//         x.push(arr[i]);
//       }
//     }

//     return x;
//   }

//   console.log(myFunc([1, 1, 2]));

// function array(string) {
//   if (string === "" || string.length === 1 || string.length === 2) {
//     return null;
//   }

//   return string.slice(2, -2).replace(/,/g, " ").trim(" ");
// }

// console.log(array("1,2, 3"));

// function array(string) {
//   let newArr = string.split(',')
//   if(newArr.length <= 2) {
//     return null
//   }
//   return newArr.slice(1, -1).join(" ")
// }

// console.log(array("1,2, 3, 4, 5"));
// function faktorial(num) {
//     var result = num
//     if(num===0 || num ===1){
//         return 1;
//     }
//     while(num>1){
//         num--;
//         result*=num
//     }
//     return result
// }
// console.log(faktorial(5));

// let sait = "aieəüöou"

// function word(){

// }

// function printArray(array){
//     let newArr = array.join('')
//     console.log(newArr);
// }

// console.log(printArray(["h","o","l","a"]));

// function removeEveryOther(arr){
//     let result=[]
//     for (let i = 0; i < arr.length; i+=2) {
//          result.push(arr[i])
//     }
//     return result
//   }

//   console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// function findMultiples(integer, limit) {
//     let x =[]
//     for (let i = integer; i <= limit; i=i+integer) {
//       x.push(i)
//     }
//     return x

//   }

//   console.log(findMultiples(2,6));
