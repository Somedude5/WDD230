// function calculateWindchill(windspeed = 0, temperature = 0) {
//   const temperatureElement = document.querySelector("#temperature");
//   const windspeedElement = document.querySelector("#windspeed");
//   const windchillElement = document.querySelector("#windchill");

//   let windchillValue = "N/A";

//   if (windspeed >= 3.0 && temperature <= 50) {
//     const chillfactor = Math.pow(windspeed, 0.16);
//     const windchillamt = 35.74 + 0.6215 * temperature - 35.75 * chillfactor + 0.4275 * temperature * chillfactor;
//     windchillValue = `${Math.ceil(windchillamt)}`;
//   }

//   temperatureElement.textContent = temperature;
//   windchillElement.textContent = windchillValue;
//   windspeedElement.textContent = windspeed;
// }

// // Call the windchill function
// calculateWindchill(5, 5);
