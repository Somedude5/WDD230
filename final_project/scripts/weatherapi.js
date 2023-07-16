(async function () {
  const lat = 33.1581;
  const lon = 117.3506;
  const appid = "d3598f177fbfd6f61c409046c36bba72";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

  // Get all the variables set
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const temperatureElement = document.querySelector("#temperature");
  const windspeedElement = document.querySelector("#windspeed");
  const windchillElement = document.querySelector("#windchill");
  const humidityElement = document.querySelector("#humidity");

  // Windchill Function
  function calculateWindchill(temperature, windspeed) {
    const windchillValue = windspeed >= 3.0 && temperature <= 50
      ? `${Math.ceil(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16))}`
      : "N/A";

    temperatureElement.textContent = windspeed;
    windchillElement.textContent = windchillValue;
    windspeedElement.textContent = temperature;
  }

  // Displaying the actual results
  function displayResults(weatherData) {
    const temperature = weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed.toFixed(0);
    const humidity = weatherData.main.humidity;

    temperatureElement.innerHTML = `<strong>${temperature}</strong>`;

    const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    calculateWindchill(temperature, windspeed);

    humidityElement.textContent = humidity;
  }


  // Weather API Call and json return
  async function getWeather() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const weatherData = await response.json();
        console.log(weatherData);
        displayResults(weatherData);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Call the get weather api
  getWeather();
})();

const lastupdated = document.querySelector("#lastupdated");
const lastModified = document.lastModified;

if (lastModified) {
  lastupdated.textContent = lastModified;
} else {
  lastupdated.textContent = "N/A";
}

