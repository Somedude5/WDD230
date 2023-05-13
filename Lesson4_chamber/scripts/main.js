const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = today.toLocaleDateString('en-US', options);



const currentDateElement = document.querySelector("#currentdate");
currentDateElement.textContent = currentDate;


const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;
