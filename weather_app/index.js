const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const descDisplay = document.querySelector('.descDisplay');
const weatherEmoji = document.querySelector('.weatherEmoji');
const errorDisplay = document.querySelector('.errorDisplay');
const apiKey = 'WEATHER_API_KEY'; // Replace with your actual API key

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim().toLowerCase();
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeather(weatherData);
    }
     catch (error) {
      console.error(error);
      displayError(error);
    }
    } else {
      displayError('Please enter a city name.');
    }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return await response.json();
}

function displayWeather(data) {
  const {name: city,
        main :{temp, humidity},
        weather:[{description, id}]} = data;
    card.textContent = '';
    card.style.display = 'flex';

    const cityName = document.createElement("h1");
    cityName.textContent = city;
    card.appendChild(cityName);
    cityName.classList.add("cityName");

    const tempDisplay = document.createElement("p");
    tempDisplay.textContent = `Temperature: ${Math.round(temp - 273.15)}°C`;
    card.appendChild(tempDisplay);
    tempDisplay.classList.add("temp");

    const humidityDisplay = document.createElement("p");
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    card.appendChild(humidityDisplay);
    humidityDisplay.classList.add("humidity");

    const descDisplay = document.createElement("p");
    descDisplay.textContent = `Description: ${description}`;
    card.appendChild(descDisplay);
    descDisplay.classList.add("descDisplay");

    const weatherEmoji = document.createElement("p");
    weatherEmoji.textContent = getWeatherEmoji(id);
    card.appendChild(weatherEmoji);
    weatherEmoji.classList.add("weatherEmoji");
}

function getWeatherEmoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈️";
  } else if (weatherId >= 300 && weatherId < 400) {
    return "🌦️";
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌧️";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "❄️";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌫️";
  } else if (weatherId === 800) {
    return "☀️";
  } else if (weatherId > 800) {
    return "☁️";
  } else {
    return "";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = '';
  card.style.display = 'block';
  card.appendChild(errorDisplay);
}