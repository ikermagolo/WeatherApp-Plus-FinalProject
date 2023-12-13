

function refreshWeather(response){
    
    let tempElement = document.querySelector('#weather-app-temperature');
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector('#weather-app-humidity')
    let windyElement = document.querySelector("#weather-app-wind");
    let discriptionElement = document.querySelector("#weather-app-description");
   let iconElement = document.querySelector('img.weather-icon');
   iconElement.src=response.data.condition.icon_url;
  
  
   



    discriptionElement.innerHTML = response.data.condition.description;
    windyElement.innerHTML = response.data.wind.speed;
    humidityElement.innerHTML =response.data.temperature.humidity;
    cityElement.innerHTML = response.data.city;
    tempElement.innerHTML = Math.round(temperature);
 
   console.log(response.data);
 
}



function searchCity(city){

    let apikey = "3d814e4ef189oa5f9c0dta1eabf099a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiUrl).then(refreshWeather);

}


function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector('#search-form-input');


searchCity(searchInput.value);
    

}

function displayForecast(){
    let forecastElement = document.querySelector('#forecast');
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
let forecastHtml = "";

    days.forEach(function (day){
        forecastHtml = 
        forecastHtml + 
        `
        <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature">9º</div>
        </div>
      </div>
    `;
    });
   
    forecastElement.innerHTML = forecastHtml;  

}



let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Dodoma");
displayForecast();

  

