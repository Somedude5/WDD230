// Function to get the total number of orders from localStorage
function getTotalOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? parseInt(orders) : 0;
}

// Function to update and display the total number of orders
function updateTotalOrders() {
    const totalOrdersElement = document.querySelector('#total-orders');
    const totalOrdersParagraph = document.querySelector('#drinks-paragraph');

    const totalOrders = getTotalOrders();

    if (totalOrders > 0) {
        totalOrdersElement.textContent = totalOrders;
    } else {
        totalOrdersElement.textContent = totalOrders;
        totalOrdersParagraph.style.display = 'none';
    }
}

// Function to increment the total number of orders
function incrementTotalOrders() {
    const totalOrders = getTotalOrders();
    const newTotalOrders = totalOrders + 1;
    localStorage.setItem('orders', newTotalOrders);
    updateTotalOrders();
}

// Call the function to update and display the total number of orders on page load, this will also show the button as well.
updateTotalOrders();
