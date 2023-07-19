const hamburgerIcon = document.getElementById('hamburger-icon');
const navigationMenu = document.querySelector('.navigation');

hamburgerIcon.addEventListener('click', function() {
  navigationMenu.classList.toggle('show');
});
