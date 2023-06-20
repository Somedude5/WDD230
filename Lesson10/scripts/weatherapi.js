


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 43.82
const lon = -111.23
const appid = "bc241852da8f5fec0328f94f92fdb6e0"

// const appid2 = "be32833d7239c63fb1ec02ebf74bf9fc"

const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

function displayResults(weatherData) {

    // toFixed(0) rounds the temperature to the nearest whole number
  
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
  
    weatherIcon.setAttribute('alt', desc);
  
    captionDesc.textContent = desc;
    
    // stuff for the assignment this week
    // const temp = weatherData.main.temp.toFixed(0)
    // const windspeed = weatherData.wind.speed.toFixed(0)
    // getwindchill(temp, windspeed)
  
}

async function getWeather() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
getWeather();