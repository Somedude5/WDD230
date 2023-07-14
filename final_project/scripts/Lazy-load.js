
// JavaScript code to replace the image after it loads along with lazy loading
window.addEventListener('load', function () {
    var container = document.querySelector('.order-container');
    container.style.backgroundImage = "url('images/smoothies/smoothies_800x800.jpg')";

    container.classList.add('loaded');

});