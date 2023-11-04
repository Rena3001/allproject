"use strict"
const hamburger=document.querySelector(".hamburger")
const ul = document.querySelector("ul")
const button = document.querySelector("button")
hamburger.addEventListener("click", function (){
   ul.classList.toggle("active")
   hamburger.classList.toggle('active')
})
