document.addEventListener('DOMContentLoaded', displayOrderDetails);

function displayOrderDetails() {
  const order = JSON.parse(localStorage.getKey('order'));
  const orderDetails = document.querySelector('#orderDetails');

  if (order) {
    const listItems = Object.entries(order).map(([key, value]) => {
      return `<li>${key}: ${value}</li>`;
    });
    orderDetails.innerHTML = `<ul>${listItems.join('')}</ul>`;
  } else {
    orderDetails.innerHTML = '<p>No order details found.</p>';
  }
}
