function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time * 1000);
   
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%,`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
}


function searchCity(city) {
    let apiKey = "4052b3o3a5234d364a0003de67t9f22b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
    
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    
      if (hours < 10) {
        hours = `0${hours}`;
      }

      let day = days[date.getDay()];

      return `${day} ${hours}:${minutes}`;

    }
    


function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    searchCity(searchInputElement.value);
}


let serachForm = document.querySelector("#search-form");
serachForm.addEventListener("submit", search);


searchCity("London");

