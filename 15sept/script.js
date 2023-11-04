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
const images = ["cards-1.jpg", "cards-2.jpg", "cards-4.jpg"];
var slidesContainer = document.querySelector(".slides-container");
var slideImage = document.querySelector(".slide img"); // Assuming the slide contains an <img> element
var currentSlide = 0;

function previousSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlidePosition();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlidePosition();
}

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  slideImage.src = images[currentSlide]; // Update the displayed image
}

slideImage.src = images[currentSlide];
