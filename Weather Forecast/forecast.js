function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value
   
}


let serachForm = document.querySelector("#search-form");
serachForm.addEventListener("submit", search);

