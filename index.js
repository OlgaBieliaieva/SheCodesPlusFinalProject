// Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00
const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[now.getDay()];

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
const month = months[now.getMonth()];
const date = now.getDate();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
let formattedDate = `${day}, ${month} ${date}, ${year}  ${hours}:${minutes}`;
let currentDay = document.querySelector("#currentDateTime");
currentDay.innerHTML = formattedDate;

// Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page
// after the user submits the form.
function searchLocation(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#user-location");
  let userLocation = document.querySelector("#currentCity");
  userLocation.innerHTML = locationInput.value;
}
let searchLocationForm = document.querySelector("#search-location");
searchLocationForm.addEventListener("click", searchLocation);

// Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
// When clicking on it, it should convert the temperature to Fahrenheit.
// When clicking on Celsius, it should convert it back to Celsius.
const temperatureElement = document.querySelector("#temperature");
function convertToFahrenheit(event) {
  event.preventDefault();
  temperatureElement.innerHTML = 82;
}
function convertToCelsius(event) {
  event.preventDefault();
  temperatureElement.innerHTML = 28;
}
let fahrenheitLink = document.querySelector("#fahrenheit-scale");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-scale");
celsiusLink.addEventListener("click", convertToCelsius);
