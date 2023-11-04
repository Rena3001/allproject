// function word(str) {
//   let sait = "aieəüöou";
//   let x = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!sait.includes(str[i])) {
//       x+=str[i]
//     }
//   }
//   return x
// }
// console.log(word("salam dunya ehalisi"));

// let firstName = "reNa";
// firstName = firstName.toLowercase();
// console.log(firstName[firstName.length-1]);
// console.log(firstName.indexOf(""));
// console.log(firstName.lastIndexOf("a"));
// console.log(firstName.includes("a"));
// console.log(firstName.slice(-1));
// console.log(firstName.trim().length);
// console.log(firstName.trimStart().length);
// console.log(firstName.trimEnd().length);
// console.log(firstName[0].toUpperCase() + firstName.slice(1, firstName.length));
// console.log(firstName.charAt(0));

// let email=prompt("enter email")
// if(email.trim().includes("@") && email.trim().includes(".")){
//   console.log("valid email");
// }
// else{
//   console.log("invalid");
// }

// let message="hello world how are you"
// // // console.log(message.replace(/e/g,"-"));
// // console.log(message.startsWith("you"));
// // console.log(message.endsWith("you"));
// console.log(message.split(" ").join("-"));

// const firstName="Rena"
// // console.log(...firstName);
// console.log(firstName.padStart(5,"*"));
// console.log(firstName.padEnd(5,"*"));
// console.log(firstName.repeat(4));

// const txt = "my name is nasib";
// const words = txt.split(" ");
// let newSentence = "";
// for (let i = 0; i < words.length; i++) {
//   newSentence +=
//     words[i].slice(0, 1).toUpperCase() +
//     words[i].slice(1, words[i].length) +
//     " ";
// }
// console.log(newSentence);

// let total=0
// function sum(...arg) {
//   for (let i = 0; i < arg.length; i++) {
//     const item = arg[i];
//     total+=item
//   }
//   return total
// }
// sum(1,2,3);
// console.log(item);

// sessionStorage.setItem("ad","Jane")
// sessionStorage.setItem("users",JSON.stringify(["Jane","Peter"]))
// // sessionStorage.removeItem("ad")
// sessionStorage.clear()
// console.log(sessionStorage.getItem("users"));
// console.log(JSON.parse(sessionStorage.getItem("users")));
// console.log(sessionStorage.ad);

// localStorage.setItem("name","Jane")
// localStorage.setItem("nums",JSON.stringify([1,2,3]))
// localStorage.removeItem("name")
// // localStorage.clear()
// console.log(JSON.parse(localStorage.getItem("nums"))[0]);

// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.clientWidth);

// console.log(document.querySelector("h1").getBoundingClientRect());

// const h1 = document.querySelector("h1")

// h1.addEventListener("click", function(){
//     alert("bye")
// })

//h1.addEventListener("click", functionadi moterizesiz)

// const h1 = document.querySelector("h1");

// h1.addEventListener("dblclick", function(){
//     alert("bye")
// })

// h1.addEventListener("mouseover", function(){
//     alert("bye")
// })

// h1.addEventListener("mouseout", function(){
//     alert("bye")
// })

// const input= document.querySelector("input")
// const submit= document.querySelector("submit")
// input.addEventListener("keydown", function(e){
//     console.log(e.target.value);
// })

// input.addEventListener("keyup", function(e){
//     console.log(e.target.value);
// // })

// submit.addEventListener("submit", function(e){
//     e.preventDefault()
//     console.log(e.target.value);
// })

//e.preventDefault()-->sehfenin yenilenmesinin qarhsisi alinmasi

//load and unload

//focus-->input

//blur-->focusun eksi kenara klik vuranda

//scroll--->scrollY

// resize-->scrollX

// h1.onclick=function(){
//     alert("hello")
// }-->html moterize ile

const div = document.createElement("div");
const body = document.querySelector("body");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid grey";
body.prepend(div);
const button = document.createElement("button");
body.append(button);
button.style.width = "30px";
button.style.height = "30px";
button.style.border = "1px solid red";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.background = "red";
button.style.color = "white";

button.value = "stop";

let i = 1;
setTimeout(function run() {
  i++;
  setTimeout(run, 100);
}, 100);
