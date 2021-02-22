const toggleButton = document.getElementsByClassName('toggleButt')[0];
const navbar = document.getElementsByClassName('nav-wrap')[0];

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
})