const hamburgerIcon = document.querySelector('.hamburger_icon');
const navMenu = document.querySelector('.nav_menu2');
const navBranding = document.querySelector('.nav_branding');
const navContainer = document.querySelector('.mobile_nav_container');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBranding.classList.toggle('active');
  navContainer.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('active');
  navMenu.classList.remove('active');
  navBranding.classList.remove('active');
  navContainer.classList.remove('active');
}));
