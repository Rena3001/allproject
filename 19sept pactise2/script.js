"use strict"


const ul = document.querySelector("ul")
const hamburger= document.querySelector(".hamburger")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    ul.classList.toggle("active")
})