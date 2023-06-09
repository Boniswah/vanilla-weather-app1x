function displayTemperature(response) {
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round (response.data.temperature.current);
cityElement.innerHTML = (response.data.city);
descriptionElement.innerHTML = (response.data.condition.description);
}



let city = "Pretoria";
let apikey = "febb10a9ted73c64aff21fo10d593bdc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
