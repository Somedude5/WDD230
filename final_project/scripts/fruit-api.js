// Fetch available fruit options from the web service
async function fetchFruitOptions() {
    try {
      const fruitOptionsResponse = await fetch('data/fruits.json');
      const fruitOptions = await fruitOptionsResponse.json();
      return fruitOptions;
    } catch (error) {
      console.error('Error fetching fruit options:', error);
      return [];
    }
  }
  
  // Populate select elements with fruit options
  function populateSelects(fruitOptions) {
    const fruitSelects = document.querySelectorAll('select');
    fruitOptions.forEach((fruit) => {
      fruitSelects.forEach((select) => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        select.appendChild(option);
      });
    });
  }
  
  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const formElements = event.target.elements;
    const {
      firstName,
      email,
      phone,
      fruit1,
      fruit2,
      fruit3
    } = formElements;
  
    console.log('First Name:', firstName.value);
    console.log('Email:', email.value);
    console.log('Phone Number:', phone.value);
    console.log('Fruit 1:', fruit1.value);
    console.log('Fruit 2:', fruit2.value);
    console.log('Fruit 3:', fruit3.value);
  
    const order = {
      firstName: firstName.value,
      email: email.value,
      phone: phone.value,
      fruit1: fruit1.value,
      fruit2: fruit2.value,
      fruit3: fruit3.value
    };
    localStorage.setItem('order', JSON.stringify(order));
  
    event.target.reset();
  }
  
  // Reset form values and clear local storage on beforeunload event
  window.addEventListener('beforeunload', () => {
    document.querySelector('.fruitForm').reset();
    localStorage.removeItem('order');
  });
  
  // Display order details from local storage
  document.addEventListener('DOMContentLoaded', () => {
    const order = JSON.parse(localStorage.getItem('order'));
    if (order) {
      const orderDetails = document.querySelector('#orderDetails');
      const listItems = Object.entries(order).map(([key, value]) => {
        return `<li>${key}: ${value}</li>`;
      });
      orderDetails.innerHTML = `<ul>${listItems.join('')}</ul>`;
    }
  });
  
  // Fetch fruit options and populate selects on page load
  window.addEventListener('load', async () => {
    const fruitOptions = await fetchFruitOptions();
    populateSelects(fruitOptions);
  });
  
  // Attach form submission handler
  window.addEventListener("DOMContentLoaded", (event) => {document.querySelector('.fruitForm').addEventListener('submit', handleFormSubmit)});
  