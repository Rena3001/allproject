// const array = [1, 2, 3, 4];

// // function age() {
// //     let arr=[];
// //     for (let i = 0; i < array.length; i++) {
// //         let element = 2023 - array[i];
// //         arr.push(element);

// //     }

// // }
// // age()
// let arr = [];

// for (let index=array.length-1; index>=0; index--) {
//   const element = array[index];
//    arr.push(element);

// }

// console.log(arr);

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// function minMax(numbers) {
//   if (!numbers || numbers.length === 0) {
//     return [null, null];
//   }

//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);

//   return [min, max];
// }
// console.log(minMax([1, 2, 3, 4, 5]));      // Output: [1, 5]
// console.log(minMax([2334454, 5]));         // Output: [5, 2334454]
// console.log(minMax([1]));

// function cubes(a) {
// 	 let b = a ** 3
//    return b
// }
// cubes()
// console.log(cubes(3));   // Output: 27
// console.log(cubes(5));   // Output: 125
// console.log(cubes(10));  // Output: 1000

// function calcAge(age) {
// 	return age * 365
// }
// calcAge()
// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

// function circuitPower(x, y) {
// 	return x*y
// }
// circuitPower()
// console.log(circuitPower(230,10));
// console.log(circuitPower(110,3));
// console.log(circuitPower(480,20));

// function addition(a, b) {
//   return a + b;
// }
// addition()
// console.log(addition(3,2));
// console.log(addition(-3,-6));
// console.log(addition(7,3));

// function convert(minutes) {
// 	return minutes*60
// }
// convert()
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));

// function triArea(base, height) {
// 	return (base * height) / 2
// }
// triArea()

// console.log(triArea(3,2));
// console.log(triArea(7,4));
// console.log(triArea(10,10));

// function giveMeSomething(a) {
//   return "something" + " " + a;
// }
// giveMeSomething()

// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

// function squaed(b) {
// 	return b * b
// }
// squaed()
// console.log(squaed(5))
// console.log(squared(9))
// console.log(squared(100))

function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
