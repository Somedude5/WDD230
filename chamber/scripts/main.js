const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = today.toLocaleDateString('en-US', options);


const currentDateElement = document.querySelector("#currentdate");
currentDateElement.textContent = currentDate;


const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


//script content for the banner for mondays and tuesdays
window.addEventListener('DOMContentLoaded', function() {
	var currentDate = new Date();
	var dayOfWeek = currentDate.getDay();

	// Display the banner only on Mondays (1) or Tuesdays (2)
	if (dayOfWeek === 1 || dayOfWeek === 2) {
		document.getElementById('banner').style.display = 'block';
	}
});