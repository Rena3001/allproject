"use strict";

// function start() {
//     console.log("start");
//     setTimeout(function(){       //async
//     document.querySelector("body").textContent="hello world"

//     },3000)
//     console.log("end");
// }

// console.log("before");
// start()
// console.log("after");

// function step1(clb){
//   setTimeout(function(){
//     const location ={ lat:"40.188.13", lng:"40.45.33", city:"Baku"}
//     console.log("step1 finished");
//     clb(location)
//   },3000)
// }
// function step2(location,clb){
//     setTimeout(function(){
//         const currency ={ currency:"azn"}
//         console.log("step2 finished");
//         clb(location,currency)
//       },1000)
// }
// function step3(location,currency,clb){
//     setTimeout(function(){
//         console.log("step3 finished");
//         let message=`hi your city is ${location.city} and your currency is ${currency.currency}`
//         clb(message)
//     },1000)
// }

// function start(){
//     step1(function(step1Data){
//         step2(step1Data,function(location,currency){
//             step3(location,currency,function(message){
//                 document.querySelector("body").textContent=message
//             })
//         })
//     })
// }

// start()

// const res = fetch("https://jsonplaceholder.typicode.com/posts");
// res
//   .then((data)=>data.json())
//   .then((data)=>{
//     const ul = document.createElement("ul")
//     data.map((post)=>{
//         const li = document.createElement("li")
//         li.innerHTML=`<h1>${post.id}</h1><h4>${post.title}</h4> <p>${post.body}</p>`
//         ul.append(li)
//     })
//     document.querySelector("body").append(ul)
//   })
//   .catch((error) => console.log(error));

// const myPromise= new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let rand= Math.random()
//     if(rand>0.5){
//       return resolve(`True rand is greater than 0.5. Number is ${rand}`)
//     }
//     else{
//       reject(`False rand is lower than 0.5. Number is ${rand}`)
//     }
//   },2000)
// })

// myPromise.then(function(message){
//   console.log(message);
// })

// async function fetchData() {
//   const ul = document.createElement("ul");
//   data.map((post) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<h1>${post.id}</h1><h4>${post.title}</h4> <p>${post.body}</p>`;
//     ul.append(li);
//   });
//   // document.querySelector("body").append(ul);
//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   // const data = await res.json();
//   // console.log(data);
// }

// fetchData();

// const res = fetch("https://jsonplaceholder.typicode.com/posts");
// const body = document.querySelector("body");

// res
//   .then((data) => data.json())
//   .then((data) => {
//     const limitedData = data.slice(0, 5);

//     limitedData.map((post) => {
//       const div = document.createElement("div");
//       div.innerHTML = `<h4>${post.title}</h4> <p>${post.body}</p>`;
//       div.dataset.id = "";

//       div.style.cssText =
//         "width:200px; height:200px; border:1px solid black;  overflow:hidden; padding:10px;   ";
//       body.append(div);
//       body.style.display = "flex";
//       body.style.flexWrap = "wrap";
//       body.style.gap = "29px";

//       div.addEventListener("click", function () {
//         const content = document.createElement("div");
//         content.innerHTML = "";
//         content.style.border = "1px solid black";
//         content.append(div.textContent);
//         body.append(content);
//         content.textContent;
//         content.style.cssText =
//           "width:100%; height:100%; border:1px solid black;  overflow:hidden; padding:10px;   ";

//       });
//     });
//   })
//   .catch((error) => console.log(error));

const res = fetch("https://jsonplaceholder.typicode.com/posts");
const body = document.querySelector("body");

res
  .then((data) => data.json())
  .then((data) => {
    const limitedData = data.slice(0, 5);

    limitedData.map((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<h4>${post.title}</h4> <p>${post.body}</p>`;
      div.dataset.id = post.id;

      const a = div.dataset.id;
      div.style.cssText =
        "width:200px; height:200px; border:1px solid black; overflow:hidden; padding:10px;";

      body.append(div);
      body.style.display = "flex";
      body.style.flexWrap = "wrap";
      body.style.gap = "29px";

      div.addEventListener("click", function () {
        if (currentContent) {
          content.removeChild(currentContent);
        }
        console.log(a);
        currentContent = document.createElement("div");
        currentContent.innerHTML = `<h4>${post.title}</h4> <p>${post.body}</p>`;
        currentContent.style.cssText =
         "width:100%; height:100%; border:1px solid black; overflow:hidden; padding:10px;";
        content.append(currentContent);
      });
    });
    const content = document.createElement("div");
    body.append(content);
    let currentContent = "";
  })
  .catch((error) => console.log(error));
