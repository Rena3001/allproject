let modal = document.querySelector(".popup");
let btn = document.querySelector("button");
let remove = document.querySelector(".remove");

function click() {
  modal.classList.toggle("active");
}

btn.addEventListener("click", () => {
  click();
});


remove.addEventListener("click", () => {
    click();
  });


const images = ["cards-1.jpg", "cards-2.jpg", "cards-4.jpg"];
let count = 0;
const image = document.querySelector("img");
const previous = document.querySelector(".previous")
const next= document.querySelector(".next")

previous.addEventListener("click", function () {
  count = (count - 1 + images.length) % images.length;
  image.src = images[count];
});

next.addEventListener("click", function () {
  count = (count + 1) % images.length;
  image.src = images[count];
});