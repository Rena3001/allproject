"use strict";

var height = prompt("enter your height");
var weight = prompt("enter your weight");

if (weight > 0 && height > 0) {
  var bmi = weight / (height * height);
  var roundedBMI = Math.round(bmi * 100) / 100;
  console.log("your bmi is " + roundedBMI);
} else {
  console.log("Please enter valid positive values for weight and height.");
}
