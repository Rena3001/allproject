// const ul = document.querySelector("ul");
// const body = document.querySelector("body")
// let i =0;
// const a = ul.addEventListener("click", function () {
//  i++
  
//   const p = document.createElement("p")
//   p.textContent="eleemnt"+i
//   body.append(p)
//   console.log(p);
 
  
//  });

// const button= document.getElementById("myElement")
// button.addEventListener("click", function(){
//   button.textContent="clicked"
// })
// const body = document.querySelector("body")
// const p =document.querySelector("p")
// const button = document.querySelector("button")
// const input = document.querySelector("input")
// button.addEventListener("click", function(){
  
//   p.textContent=input.value

// })
function myFunc(array){
  let count =0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    count+=element  
    
  }

  return count/array.length;
}

let array =[1,2,3,4]
console.log(myFunc(array));




// console.log(a);
// const button = document.querySelector("button")
// button.addEventListener("click", function(){
//   button.textContent="clicked"
// })


// function myFunc(a,b){
//   c = (a+b)/2

// }
// myFunc(5,6)
// console.log(c);