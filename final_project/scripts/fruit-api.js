// Fetch available fruit options from the web service
async function fetchFruitOptions() {
    try {
        const fruitOptionsResponse = await fetch('./data/fruits.json');
        const fruitOptions = await fruitOptionsResponse.json();
        console.log('Fruit options:', fruitOptions);
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

// Function to get the total number of orders from localStorage
function getTotalOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? parseInt(orders) : 0;
}

// Function to update and display the total number of orders
function updateTotalOrders() {
    const totalOrdersElement = document.querySelector('#total-orders');
    const totalOrdersParagraph = document.querySelector('#drinks-paragraph');
    const clearButton = document.querySelector('#clear-button');

    const totalOrders = getTotalOrders();
    totalOrdersElement.textContent = totalOrders;

    if (totalOrders > 0) {
        totalOrdersParagraph.style.display = 'block';
        clearButton.style.display = 'block';
    } else {
        totalOrdersParagraph.style.display = 'none';
        clearButton.style.display = 'none';
    }
}

// Function to increment the total number of orders so they can be shown on the home screen
function incrementTotalOrders() {
    const totalOrders = getTotalOrders();
    const newTotalOrders = totalOrders + 1;
    localStorage.setItem('orders', newTotalOrders);
    updateTotalOrders();
}

// Handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const {
        firstName,
        email,
        phone,
        fruit1,
        fruit2,
        fruit3,
        instructions
    } = formElements;

    console.log('First Name:', firstName.value);
    console.log('Email:', email.value);
    console.log('Phone Number:', phone.value);
    console.log('Fruit 1:', fruit1.value);
    console.log('Fruit 2:', fruit2.value);
    console.log('Fruit 3:', fruit3.value);
    console.log('Instructions:', instructions.value);

    const orderTime = new Date(); // Get the current time

    const order = {
        firstName: firstName.value,
        email: email.value,
        phone: phone.value,
        fruit1: fruit1.value,
        fruit2: fruit2.value,
        fruit3: fruit3.value,
        instructions: instructions.value,
        orderTime: orderTime.toISOString() // Convert time to ISO string format so the date shows up
    };

    localStorage.setItem('order', JSON.stringify(order));

    event.target.reset();

    window.location.href = 'thankyou.html';
    incrementTotalOrders();
}

// Call the function to update and display the total number of orders on page load so button can get rid of them
window.addEventListener('DOMContentLoaded', updateTotalOrders);

// Attach form submission handler
window.addEventListener('DOMContentLoaded', async () => {
    const fruitOptions = await fetchFruitOptions();
    populateSelects(fruitOptions);
    const fruitForm = document.querySelector('.fruitForm');
    fruitForm.addEventListener('submit', handleFormSubmit);
});

// Event listener for the clear button
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    localStorage.setItem('orders', '0');
    updateTotalOrders();
    clearButton.style.display = 'none';
});
