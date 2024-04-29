function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = response.data.temperature.current;
    
}

function searchCity(city) {
    let apiKey = "4052b3o3a5234d364a0003de67t9f22b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
    
}


function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value
   searchCity(searchInputElement.value);
}


let serachForm = document.querySelector("#search-form");
serachForm.addEventListener("submit", search);



