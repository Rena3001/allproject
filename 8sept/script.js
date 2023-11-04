"use strict";

// const body = document.querySelector("body");
// const h1 = document.createElement("h1");
// const button = document.createElement("button");
// h1.style.height = "100px";
// h1.style.width = "100px";
// h1.style.border = "1px solid black";
// button.style.width = "50px";
// button.style.height = "35px";
// button.style.background = "darkred";
// button.style.color = "white";
// h1.style.display = "flex";
// h1.style.justifyContent = "center";
// h1.style.alignItems = "center";

// body.append(h1);
// body.append(button);

// const time = 30;
// let count = 30;
// let isPaused = false;

// function myFunc() {
//   if (count <= 0) {
//     clearInterval(a);
//   } else {
//     h1.textContent = count--;
//   }
// }

// let a = setInterval(myFunc, 1000);

// button.addEventListener("click", function () {
//   clearInterval(a);
// });

// button.addEventListener("click", function () {
//   if (isPaused) {
//     a = setInterval(myFunc, 1000);
//     isPaused = false;
//     button.textContent = "stop";
//   } else {
//     clearInterval(a);
//     isPaused = true;
//     button.textContent = "start";
//   }
// });

// const div = document.createElement("form");
// const input = document.createElement("input");
// input.setAttribute("type", "text");
// const button = document.createElement("button");
// const body = document.querySelector("body");
// const h1 = document.createElement("h1");
// const wrapper = document.createElement("div");
// body.append(div);
// div.append(input);
// div.append(button);
// body.append(wrapper);

// div.style.height = "100px";
// div.style.width = "500px";
// div.style.border = "1px solid black";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.gap = "15px";
// div.style.padding = "15px";
// button.style.border = "1px solid black";
// input.style.border = "1px solid black";
// button.style.width = "230px";
// button.style.height = "20px";
// button.style.background = "white";
// button.textContent = "Add";
// button.style.color = "black";
// input.style.width = "230px";
// input.style.height = "20px";
// input.style.background = "white";
// body.style.display = "flex";
// body.style.alignItems = "center";
// body.style.flexDirection = "column";

// const todos = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : [];
// function renderItems() {
//   wrapper.innerHTML = "";
//   todos.forEach((el) => {
//     let div2 = document.createElement("div");
//     div2.style.padding = "15px";
//     let h1 = document.createElement("h1");
//     h1.textContent = el;
//     const button2 = document.createElement("button");
//     button2.style.width = "100px";
//     button2.style.height = "20px";
//     button2.style.background = "white";
//     button2.textContent = "delete";
//     button2.style.color = "black";
//     div2.style.height = "100px";
//     div2.style.width = "500px";
//     div2.style.border = "1px solid black";
//     div2.style.display = "flex";
//     div2.style.justifyContent = "space-around";
//     div2.style.alignItems = "center";
//     div2.append(h1);
//     div2.append(button2);
//     wrapper.append(div2);
//     button2.addEventListener("click", function () {
//       const indexToRemove = todos.indexOf(el);

//       if (indexToRemove !== -1) {
//         todos.splice(indexToRemove, 1);

//         localStorage.setItem("user", JSON.stringify(todos));

//         div2.remove();
//       }
//     });
//   });
// }
// renderItems();

// button.addEventListener("click", function () {
//   h1.textContent = input.value;
//   const inputValue = h1.textContent;

//   input.value = "";

//   const userId = "user";

//   todos.push(inputValue);

//   localStorage.setItem(userId, JSON.stringify(todos));

//   renderItems();
// });

// var x = JSON.parse(localStorage.getItem("user"));
// console.log(x);

// // x.forEach(product => console.log(product))
// x.forEach((product) => console.log(product));
// let product = h1.textContent;

// console.log( document.querySelector("footer").parentElement.firstElementChild.lastElementChild.textContent);

// const body = document.querySelector("body");
// const srch = document.querySelector(".srch");
// const btn = document.querySelector(".btn");
// const ttl = document.querySelector(".ttl");
// const textarea = document.querySelector("textarea");
// const send = document.querySelector(".send");
// const main = document.querySelector("main");
// const footer = document.querySelector("footer");
// main.style.display = "flex";
// main.style.flexWrap = "wrap"; // Fix the property name
// main.style.padding = "20px";

// send.addEventListener("click", function () {
//   if (ttl.value == "") {
//     alert("Title cannot be empty.");
//   } else if (textarea.value == "") {
//     alert("Description cannot be empty.");
//   } else {
//     const div = document.createElement("div");
//     div.style.width = "150px";
//     div.style.height = "150px";
//     div.style.border = "2px solid black";
//     div.style.padding = "20px";
//     div.style.overflowWrap = "break-word";

//     const a = new Date();
//     const h1 = document.createElement("h1"); // Create an h1 element
//     h1.textContent = ttl.value; // Set its text content

//     const combinedText =
//       h1 +
//       +textarea.value +
//       a.getFullYear() +
//       "/" +
//       (a.getMonth() + 1) +
//       "/" +
//       a.getDate(); // Fix month

//     div.innerHTML = combinedText; // Use innerHTML to insert HTML content

//     ttl.value = "";
//     textarea.value = "";

//     main.append(div);

//   }
// });

// send.addEventListener("click", function () {
//   // Create a div element
//   const endDiv = document.createElement("div");
//     endDiv.style.width = "100%";
//     endDiv.style.height = "100vh";
//     endDiv.style.border = "2px solid black";
//     endDiv.style.padding = "20px";
//     endDiv.style.display = "flex";
//     endDiv.style.justifyContent = "space-between";

//     // Combine the values of ttl and textarea
//     let combinedText = ttl.value + " " + textarea.value;

//     // Set the text content of endDiv to the combined text
//     endDiv.textContent = combinedText;

//     ttl.value = "";
//     textarea.value = "";

//     // Append endDiv to the footer
//     footer.append(endDiv);
//     console.log(combinedText);

// });
const body = document.querySelector("body");
const searchDiv = document.querySelector(".result");
const searchInput = document.querySelector(".srch");
const searchBtn = document.querySelector(".btn");
const ttl = document.querySelector(".ttl");
const textarea = document.querySelector("textarea");
const send = document.querySelector(".send");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.padding = "20px";
const array = [];
let result = [];
send.addEventListener("click", function () {
  if (ttl.value == "") {
    alert("Title cannot be empty.");
  } else if (textarea.value == "") {
    alert("Description cannot be empty.");
  } else {
    // Create the first div
    const div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "150px";
    div.style.border = "2px solid black";
    div.style.padding = "20px";
    div.style.overflowWrap = "break-word";

    const a = new Date();
    const date = a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate();

    const combinedText = ttl.value + " " + textarea.value + " " + date;

    div.innerHTML = combinedText;
    array.push(ttl.value);
    console.log(array);
    ttl.value = "";
    textarea.value = "";

    main.append(div);

    const endDiv = document.createElement("div");
    const remove = document.createElement("button");
    const h1 = document.createElement("h1");
    const span = document.createElement("span");

    remove.textContent = "remove";
    endDiv.style.width = "100%";
    endDiv.style.border = "2px solid black";
    endDiv.style.padding = "20px";
    endDiv.style.display = "flex";
    endDiv.style.justifyContent = "space-between";

    remove.style.cssText =
      "background: white; border: 1px solid black; border-radius: 15px; width: 80px; height: 50px";
    h1.textContent = ttl.value;
    span.textContent = textarea.value;
    endDiv.innerHTML = combinedText;
    endDiv.append(span);
    endDiv.append(remove);
    footer.append(endDiv);
    remove.addEventListener("click", function () {
      endDiv.remove();
      div.remove();
    });
  }
});

searchInput.addEventListener("input", function () {
  searchDiv.innerHTML =  ""
  if (searchInput.value.length >= 2) {
    result = array.filter((el) => el.includes(searchInput.value));
    console.log(array);
    result.forEach((el) => {
      const searchContent = document.createElement("div");
      searchContent.style.border = "1px solid black";
      searchContent.textContent = el;
      searchDiv.append(searchContent);
    });
  }
});

//   let el = arrayElements.findIndex(function (el) {
//     if (el.toString().startsWith('R')) {
//         return el
//     }
//     })
//     console.log(el);

//     let arrayElements = ["Elxan", "Murad", "Tofiq", "Resul"];

//   let el = arrayElements.find(function (el) {
//     if (el.toString().startsWith('R')) {
//         return el
//     }
//     })
//     console.log(el); //(Resul) Arrayde "R" ile baslayan elementin ozunu gosterir

//   let arrayElements = ["Elxan", "Murad", "Tofiq", "Resul"];

//   let el = arrayElements.filter(function (el) {
//     if (el.toString().includes("a")) {
//       return el;
//     }
//   });
//   console.log(el); //['Elxan', 'Murad'] Icerisinde "a" kecen butun elementleri gosterir
