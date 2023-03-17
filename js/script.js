// Get references to the burger menu and header menu elements
const burgerMenu = document.getElementById('burger');
const headerMenu = document.getElementById('headerMenu');

burgerMenu.addEventListener('click', function() {
  // Toggle the visibility of the header menu
if (headerMenu.style.display === 'none') {
    headerMenu.style.display = 'block';
} else {
    headerMenu.style.display = 'none';
  }
});