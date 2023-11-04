"use strict";

// const images = ["cards-1.jpg", "cards-2.jpg", "cards-4.jpg"];
// let count = 0;

// const image = document.querySelector("img");

// const previous = document.querySelector(".previous");
// const next = document.querySelector(".next");
// previous.addEventListener("click", function () {
//   count = (count - 1 + images.length) % images.length;
//   image.src = images[count];
// });

// next.addEventListener("click", function () {
//   count = (count + 1) % images.length;
//   image.src = images[count];
//   image.style.margin="0 50px"
// });

// const image1 = document.querySelector(".img1");
// const image2 = document.querySelector(".img2");
// const image3 = document.querySelector(".img3");

// const previous = document.querySelector(".previous");
// const next = document.querySelector(".next");

// previous.addEventListener("click", function () {
//   const image1 = document.querySelector(".img1");
//   const image2 = document.querySelector(".img2");
//   const image3 = document.querySelector(".img3");
// });

// next.addEventListener("click", function () {
//   image1.style.cssText = "";
// });
// const images = ["./assets/imgs/Rectangle 1329.png", "./assets/imgs/Rectangle 1328.png", "./assets/imgs/Rectangle 1330.png"];
// let count = 0;

// const image = document.querySelector(".actionImg img");

// const next = document.querySelector(".next");

// console.log(image);
// next.addEventListener("click", function () {
//   count=(count+1)%images.length;
//   image.src = images[count];
// });

const catalogButton = document.querySelector(".catalog");
const menu = document.querySelector(".ul_none");

catalogButton.addEventListener("click", function (e) {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  }
});

document.querySelector("body").addEventListener("click", function (e) {
  if (e.target !== catalogButton) {
    menu.style.display = "none";
  }
});

let modal = document.querySelector(".popup");
let callButton = document.querySelector(".number a ");
let remove = document.querySelector(".button1 i");
let send = document.querySelector(".send button");
let thanks = document.querySelector(".thanks");
let exit = document.querySelector(".exit");
function click() {
  modal.classList.toggle("active");
  console.log("saam");
}

callButton.addEventListener("click", () => {
  click();
});

remove.addEventListener("click", () => {
  click();
});

function thankFunc() {
  thanks.classList.toggle("active");
}

send.addEventListener("click", () => {
  thankFunc();
});
exit.addEventListener("click", () => {
  thankFunc();
});

let registration = document.querySelector(".registration");
let regButton = document.querySelector(".icons__img_reg");
let reg_remove = document.querySelector(".button2 i");

function register() {
  registration.classList.toggle("active");
}

regButton.addEventListener("click", () => {
  register();
});

reg_remove.addEventListener("click", () => {
  register();
});
