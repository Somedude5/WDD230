function windchillApp(windspeed, temperature){
    //Get html elements to update
    const temperatureElement = document.querySelector("#temperature")
    const windspeedElement = document.querySelector("#windspeed")
    const windchillElement = document.querySelector("#windchill")
    //Calculate the windchill, if applicable
    let windchillMSG = "N/A"

    if(windspeed >= 3.0 && temperature <= 50){
        chillfactor = Math.pow(windspeed, 0.16)
        let windchillamt = 35.74 + (0.6215 * temperature) - (35.75 * chillfactor) + (0.4275 * temperature * chillfactor)
        windchillMSG = `${windchillamt}`
    }
    //update the html elements with values
    temperatureElement.textContent = temperature
    windchillElement.textContent = windchillMSG
    windspeedElement.textContent = windspeed

}

//call the windchill function with 
windchill(5,5)