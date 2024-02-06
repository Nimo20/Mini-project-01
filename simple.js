var currentWeatherDiv = document.querySelector('#weather-cards');
var weatherCardDiv = document.querySelector('.weather-cards');
var cityInput = document.querySelector('#city-input');
var searchButton = document.querySelector('#submit');
var API_KEY = "c40ec961139c146223010acccae3fa44";

var createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) {
        return `
        <div class="weather-container">
            <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
            <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
            <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
            <h4>Humidity: ${weatherItem.main.humidity}%</h4>
        </div>
        <div>
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>`;
    } else {
        return `
        <li class="cards">
            <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="Weather Icon">
            <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
            <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
            <h4>Humidity: ${weatherItem.main.humidity}%</h4>
        </li>`;
    }
    };

    var getWeatherDetails = (cityName, lat, lon) => {
    var WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat${lat}&lon${lo}&appid=${API_KEY}`;
    console.log(data)
    fetch(WEATHER_API_URL)
        .then(res => res.json())
        .then(data => {
        // filter the forecast to get only one per day
        var uniqueForecastDays = [];
        var fiveDaysForecast = data.list.filter(forecast => {
            var forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
            return uniqueForecastDays.push(forecastDate);
            }
        });

        // Clear previous weather cards
        weatherCardDiv.value.innerHTML= "";
        cityInput.value = "";

        console.log(fiveDaysForecast);

        fiveDaysForecast.forEach((weatherItem, index) => {
            weatherCardDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
        });

        // Store the weather data in localStorage
        localStorage.setItem('weatherData', JSON.stringify(data));
        })
        .catch(() => {
        alert("An error occurred while fetching the weather forecast!");
        });
    };

    var getCityCoordinates = () => {
    var cityName = cityInput.value;
    if (!cityName) return;

    var GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${API_KEY}`;
    console.log()
    
    fetch(GEOCODING_API_URL)
        .then(res => res.json())
        .then(data => {
        if (data.length === 0) return alert(`No coordinates found for ${cityName}`);

        var { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
        })
        .catch(() => {
        alert("Error fetching weather data!");
        });

};

searchButton.addEventListener('click', getCityCoordinates);