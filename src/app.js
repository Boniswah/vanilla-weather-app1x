function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    return `${day} ${hours}:${minutes}`;

}

function displayTemperature(response) {
console.log(response.data.time);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
temperatureElement.innerHTML = Math.round (response.data.temperature.current);
cityElement.innerHTML = (response.data.city);
descriptionElement.innerHTML = (response.data.condition.description);
humidityElement.innerHTML = (response.data.temperature.humidity);
windElement.innerHTML = Math.round (response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.time * 1000);

}



let city = "Pretoria";
let apikey = "febb10a9ted73c64aff21fo10d593bdc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
