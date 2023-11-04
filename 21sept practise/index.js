"use strict"
const div = document.querySelector(".window")
const table = document.querySelector(".table")
const button = document.querySelector("button")
button.addEventListener("click", function(){
   table.classList.toggle("active")
   div.classList.toggle("active")
})