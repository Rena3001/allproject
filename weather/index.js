const form = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const icon = document.querySelector(".icon");
const card = document.querySelector(".screen");
const cityCard = document.querySelector(".location");
const date = document.querySelector(".date");
const temperature = document.querySelector(".temperature span");
const humidity = document.querySelector(".span_2");
const wind = document.querySelector(".wind_number");
const switcher = document.querySelector(".switch input");
const weatherImg = document.createElement("img");
const div = document.querySelector(".temperature");
let isCelsius = true;

async function weather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d348a62ee12b2bb05648ea0a4a52078`
    );

    if (!response.ok) {
      searchInput.setAttribute("placeholder", "City not found");
    }

    const weatherData = await response.json();

    cityCard.textContent = weatherData.name;
    date.textContent = new Date().toLocaleDateString();

    if (isCelsius) {
      temperature.textContent = `${Math.round(
        weatherData.main.temp - 273.15
      )}°C`;
    } else {
      temperature.textContent = `${Math.round(weatherData.main.temp)}K`;
    }
    weatherImg.classList.add("img_2");
    humidity.textContent = `${weatherData.main.humidity}%`;
    wind.textContent = `${weatherData.wind.speed} m/s`;
    if (
      weatherData.weather[0].main === "Cloud" ||
      weatherData.weather[0].main === "Clouds"
    ) {
      weatherImg.setAttribute("src", "./cloud.png");
    } else if (weatherData.weather[0].main === "Clear") {
      weatherImg.setAttribute("src", "./clear.png");
    } else if (weatherData.weather[0].main === "Fog") {
      weatherImg.setAttribute("src", "./fog.png");
    } else if (weatherData.weather[0].main === "Rain") {
      weatherImg.setAttribute("src", "./rain.png");
    } else if (weatherData.weather[0].main === "Sunny") {
      weatherImg.setAttribute("src", "./sunny.png");
    }
    div.append(weatherImg);
  } catch (error) {
    console.error(error.message);
  }
}

switcher.addEventListener("change", () => {
  isCelsius = !isCelsius;
  const city = searchInput.value;
  weather(city);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = searchInput.value;
  weather(city);
});
