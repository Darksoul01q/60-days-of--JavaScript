let container = document.getElementById("container");
let searchCard = document.getElementById("searchBar");
let searchBar = document.getElementById("weather");
let searchBtn = document.getElementById("search");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windspeed");

async function weather() {
  city.textContent = "Loading...";
  temp.textContent = "";
  description.textContent = "";
  humidity.textContent = "";
  windSpeed.textContent = "";
  try {
    if (searchBar.value === "") {
      throw new Error("Enter a city name");
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=ENTER_YOUR_API_KEY&units=metric`,
    );

    if (!response.ok) {
      throw new Error(`Status - ${response.status} : Data Doesn't fetched `);
    }

    const data = await response.json();

    city.textContent = `${data.name}`;
    temp.textContent = `${data.main.temp}°C`;
    description.textContent = `${data.weather[0].description}`;
    humidity.textContent = `💧Humidity : ${data.main.humidity}%`;
    windSpeed.textContent = `💨Wind : ${data.wind.speed} m/s`;
  } catch (error) {
    city.textContent = error.message;
  }
}

searchBtn.addEventListener("click", () => {
  weather();
});
