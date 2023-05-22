// Fetch weather data from the API
function fetchWeatherData(city) {
    const API_KEY = '4eee360a067ed73973424336fd538daf'; // Replace with your API key
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            displayErrorMessage('Failed to fetch weather data.');
        });
}

// Display weather data on the UI
function displayWeatherData(data) {
    const weatherDataElement = document.getElementById('weather-data');
    weatherDataElement.innerHTML = '';

    const city = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const cityHeading = document.createElement('h2');
    cityHeading.textContent = city;

    const temperaturePara = document.createElement('p');
    temperaturePara.innerHTML = `Temperature: ${temperature} &#8451;`;

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = `Description: ${description}`;

    weatherDataElement.appendChild(cityHeading);
    weatherDataElement.appendChild(temperaturePara);
    weatherDataElement.appendChild(descriptionPara);
}

// Display error message on the UI
function displayErrorMessage(message) {
    const weatherDataElement = document.getElementById('weather-data');
    weatherDataElement.innerHTML = '';

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;

    weatherDataElement.appendChild(errorMessage);
}

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('search-input').value;
    if (city.trim() !== '') {
        fetchWeatherData(city);
    }
});
