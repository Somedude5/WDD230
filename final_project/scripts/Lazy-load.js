// JavaScript code for image lazy loading and replacing
window.addEventListener('load', function () {
    const container = document.querySelector('.order-container');
    const cardContainer = document.querySelector('.card');
    
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Replace the background image when it comes into view
          container.style.backgroundImage = "url('images/smoothies/smoothies_800x800.jpg')";
          cardContainer.style.backgroundImage = document.querySelector('#card-img');
          
          // Toggle the 'loaded' class to show the replaced image
          container.classList.toggle('loaded');
          cardContainer.classList.toggle('loaded');
          
          // Disconnect the observer once the image is replaced
          observer.disconnect();
        }
      });
    });
  
    // Observe the container to trigger the replacement when it becomes visible
    observer.observe(container);
  });
  