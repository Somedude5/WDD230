document.addEventListener('DOMContentLoaded', () => {
    const order = JSON.parse(localStorage.getItem('order'));
    const orderDetails = document.querySelector('#orderDetails');
    
    if (order) {
      const listItems = Object.entries(order).map(([key, value]) => {
        return `<p><strong>${key}:</strong> ${value}</p>`;
      });
      orderDetails.innerHTML = listItems.join('');
    } else {
      orderDetails.innerHTML = '<p>No order details found.</p>';
    }
  });
  