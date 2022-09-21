/// this function returns formatted date and time
function formatDateTime(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const dayOfTheMonth = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${month} ${dayOfTheMonth}, ${year}  ${hours}:${minutes}`;
}
// this code displays current date and time
let currentDateTimeElement = document.querySelector("#currentDateTime");
let currentDateTime = new Date();
currentDateTimeElement.innerHTML = formatDateTime(currentDateTime);

// this function displays location that user submit
function searchLocation(event) {
  event.preventDefault();
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let locationInput = document.querySelector("#user-location");
  // let userChooseLocation = document.querySelector("#currentCity");
  let userChooseLocation = locationInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${userChooseLocation}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showSearchLocationWeather);
  // userChooseLocation.innerHTML = locationInput.value;
}

function showSearchLocationWeather(response) {
  let cityName = response.data.name;
  let countryName = response.data.sys.country;
  let weatherIcon = response.data.weather[0].icon;
  let temp = response.data.main.temp;
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let sunriseTime = new Date(response.data.sys.sunrise * 1000);
  let sunriseHours = sunriseTime.getHours();
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }
  let sunriseMinutes = sunriseTime.getMinutes();
  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  let formattedSunriseTime = `${sunriseHours}:${sunriseMinutes}`;
  let sunsetTime = new Date(response.data.sys.sunset * 1000);
  let sunsetHours = sunsetTime.getHours();
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }
  let sunsetMinutes = sunsetTime.getMinutes();
  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }
  let formattedSunsetTime = `${sunsetHours}:${sunsetMinutes}`;

  let userLocationCity = document.querySelector("#currentCity");
  userLocationCity.innerHTML = `${cityName}, ${countryName}`;
  let userLocationWeatherIcon = document.getElementById("currentWeather");
  userLocationWeatherIcon.insertAdjacentHTML(
    "afterbegin",
    `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="weather picture" width="100" id="weatherIcon"></img>`
  );
  let userLocationTemp = document.querySelector("#temperature");
  userLocationTemp.innerHTML = `${Math.round(temp)}`;
  let userLocationWindSpeed = document.querySelector("#windSpeed");
  userLocationWindSpeed.innerHTML = `${Math.round(wind)}`;
  let userLocationHumidity = document.querySelector("#humidityIndicator");
  userLocationHumidity.innerHTML = `${Math.round(humidity)}`;
  let userLocationSunriseTime = document.querySelector("#sunriseTime");
  userLocationSunriseTime.innerHTML = `${formattedSunriseTime}`;
  let userLocationSunsetTime = document.querySelector("#sunsetTime");
  userLocationSunsetTime.innerHTML = `${formattedSunsetTime}`;
  let userLocation
}
// this code creates an event for "Choose a location" button
let searchLocationForm = document.querySelector("#search-location");
searchLocationForm.addEventListener("submit", searchLocation);

// this function transfers user geolocation to other functions
function retrievePosition(position) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showUserLocationWeather);
}
// this function displays user location
function showUserLocationWeather(response) {
  let cityName = response.data.name;
  let countryName = response.data.sys.country;
  let weatherIcon = response.data.weather[0].icon;
  let temp = response.data.main.temp;
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let sunriseTime = new Date(response.data.sys.sunrise * 1000);
  let sunriseHours = sunriseTime.getHours();
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }
  let sunriseMinutes = sunriseTime.getMinutes();
  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  let formattedSunriseTime = `${sunriseHours}:${sunriseMinutes}`;
  let sunsetTime = new Date(response.data.sys.sunset * 1000);
  let sunsetHours = sunsetTime.getHours();
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }
  let sunsetMinutes = sunsetTime.getMinutes();
  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }
  let formattedSunsetTime = `${sunsetHours}:${sunsetMinutes}`;
  let userLocationCity = document.querySelector("#currentCity");
  userLocationCity.innerHTML = `${cityName}, ${countryName}`;
  let userLocationWeatherIcon = document.getElementById("currentWeather");
  userLocationWeatherIcon.insertAdjacentHTML(
    "afterbegin",
    `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="weather picture" width="100" id="weatherIcon"></img>`
  );
  let userLocationTemp = document.querySelector("#temperature");
  userLocationTemp.innerHTML = `${Math.round(temp)}`;
  let userLocationWindSpeed = document.querySelector("#windSpeed");
  userLocationWindSpeed.innerHTML = `${Math.round(wind)}`;
  let userLocationHumidity = document.querySelector("#humidityIndicator");
  userLocationHumidity.innerHTML = `${Math.round(humidity)}`;
  let userLocationSunriseTime = document.querySelector("#sunriseTime");
  userLocationSunriseTime.innerHTML = `${formattedSunriseTime}`;
  let userLocationSunsetTime = document.querySelector("#sunsetTime");
  userLocationSunsetTime.innerHTML = `${formattedSunsetTime}`;
}
// this function sets user location
function getUserLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
// this code creates an event for "Your current location" button
// let currentLocationButton = document.querySelector(".current-location-button");
// currentLocationButton.addEventListener("click", getUserLocation);
Document.addEventListener("DOMContentLoaded", getUserLocation())
